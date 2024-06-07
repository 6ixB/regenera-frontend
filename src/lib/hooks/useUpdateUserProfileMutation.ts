import { useState, useEffect } from "react";
import { SessionContextValue } from "next-auth/react";
import { UpdateUserDto, UpdateUserProfileDto } from "../model/user/user.dto";
import { useMutation } from "@tanstack/react-query";
import {
  updateUserByIdMutationFn,
  updateUserProfileByIdMutationFn,
} from "../api/usersApi";

// Ugly ass custom hook, only god knows what's its problems...

interface UseUpdateUserProfileMutationProps {
  session: SessionContextValue;
  currentUpdateUserProfileDto: UpdateUserProfileDto;
  originalUpdateUserProfileDto: UpdateUserProfileDto;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
}

export function useUpdateUserProfileMutation({
  session,
  currentUpdateUserProfileDto,
  originalUpdateUserProfileDto,
  onSuccess,
  onError,
}: UseUpdateUserProfileMutationProps) {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateUserMutation = useMutation({
    mutationFn: updateUserByIdMutationFn,
    onError: (error) => {
      console.log(error);
      setIsError(true);
      if (onError) onError(error);
    },
  });

  const updateUserProfileMutation = useMutation({
    mutationFn: updateUserProfileByIdMutationFn,
    onError: (error) => {
      console.log(error);
      setIsError(true);
      if (onError) onError(error);
    },
  });

  const userId = session.data?.user.id as string;
  const accessToken = session.data?.accessToken as string;

  const updateUserProfileDtoCopy: UpdateUserProfileDto = {
    ...currentUpdateUserProfileDto,
  };

  // Strip all keys that have the same value as the original
  for (const key in updateUserProfileDtoCopy) {
    if (
      updateUserProfileDtoCopy[key as keyof UpdateUserProfileDto] ===
      originalUpdateUserProfileDto[key as keyof UpdateUserProfileDto]
    ) {
      delete updateUserProfileDtoCopy[key as keyof UpdateUserProfileDto];
    }
  }

  async function mutateAsync() {
    setIsPending(true);
    setIsSuccess(false);
    setIsError(false);

    if (
      updateUserProfileDtoCopy.imageUrl !== null &&
      updateUserProfileDtoCopy.imageUrl !== undefined
    ) {
      try {
        const response = await fetch(updateUserProfileDtoCopy.imageUrl);
        const imageFile = await response.blob();

        delete updateUserProfileDtoCopy.imageUrl;
        updateUserProfileDtoCopy.image = imageFile;
      } catch (error) {
        console.log("Error fetching image:", error);

        setIsPending(false);
        setIsError(true);
        if (onError) onError(error);

        return;
      }
    }

    if (
      updateUserProfileDtoCopy.bannerUrl !== null &&
      updateUserProfileDtoCopy.bannerUrl !== undefined
    ) {
      try {
        const response = await fetch(updateUserProfileDtoCopy.bannerUrl);
        const bannerFile = await response.blob();

        delete updateUserProfileDtoCopy.bannerUrl;
        updateUserProfileDtoCopy.banner = bannerFile;
      } catch (error) {
        console.log("Error fetching banner:", error);

        setIsPending(false);
        setIsError(true);
        if (onError) onError(error);

        return;
      }
    }

    // Separate updateUserDto with updateUserProfileDto
    const { image, imageUrl, ...updateUserProfileDto } =
      updateUserProfileDtoCopy;

    const updateUserDto: UpdateUserDto = {};

    if (image) {
      updateUserDto.image = image;
    }

    if (imageUrl !== undefined) {
      updateUserDto.imageUrl = imageUrl;
    }

    try {
      let combinedResponse = {};

      if (Object.keys(updateUserDto).length > 0) {
        const userResponse = await updateUserMutation.mutateAsync({
          userId,
          updateUserDto,
          accessToken,
        });
        combinedResponse = { ...combinedResponse, user: userResponse.data };
      }

      if (Object.keys(updateUserProfileDto).length > 0) {
        const userProfileResponse = await updateUserProfileMutation.mutateAsync(
          {
            userId,
            updateUserProfileDto,
            accessToken,
          },
        );

        // Currently has no uses, but can be used in the future
        // combinedResponse = {
        //   ...combinedResponse,
        //   userProfile: userProfileResponse.data,
        // };
      }

      setIsSuccess(true);
      if (onSuccess) onSuccess(combinedResponse);
    } catch (error) {
      console.error("Error updating user profile:", error);
      setIsError(true);
      if (onError) onError(error);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    setIsPending(
      updateUserMutation.isPending || updateUserProfileMutation.isPending,
    );
    setIsError(updateUserMutation.isError || updateUserProfileMutation.isError);
    setIsSuccess(
      updateUserMutation.isSuccess && updateUserProfileMutation.isSuccess,
    );
  }, [
    updateUserMutation.isPending,
    updateUserMutation.isError,
    updateUserMutation.isSuccess,
    updateUserProfileMutation.isPending,
    updateUserProfileMutation.isError,
    updateUserProfileMutation.isSuccess,
  ]);

  return { mutateAsync, isPending, isError, isSuccess };
}
