"use client";

import Button from "@/components/base/Button";
import { useUpdateUserProfileMutation } from "@/lib/hooks/useUpdateUserProfileMutation";
import { UpdateUserProfileDto } from "@/lib/model/user/user.dto";
import {
  setCurrentUpdateProfileDto,
  setOriginalUpdateProfileDto,
  // setOriginalUpdateProfileDto,
} from "@/lib/state/features/users/updateUserProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { Eraser, SquarePen, Upload } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef } from "react";

interface SettingsProfilePhotoAndBannerCardProps {}

function detectChanges(
  updateUserProfileDto: UpdateUserProfileDto,
  originalUpdateUserProfileDto: UpdateUserProfileDto,
) {
  for (const key in updateUserProfileDto) {
    if (
      updateUserProfileDto[key as keyof UpdateUserProfileDto] !==
      originalUpdateUserProfileDto[key as keyof UpdateUserProfileDto]
    ) {
      return true;
    }
  }

  return false;
}

export default function SettingsProfilePhotoAndBannerCard({}: SettingsProfilePhotoAndBannerCardProps) {
  const session = useSession();

  const dispatch = useAppDispatch();

  const currentUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.current,
  );
  const originalUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.original,
  );

  const uploadImageInputRef = useRef<HTMLInputElement | null>(null);
  const uploadBannerInputRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: updateUserProfileMutateAsync, isPending } =
    useUpdateUserProfileMutation({
      session,
      currentUpdateUserProfileDto,
      originalUpdateUserProfileDto,
      onSuccess: (res) => {
        if (res.user) session.update({ ...res });
        dispatch(setOriginalUpdateProfileDto(currentUpdateUserProfileDto));
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const isChanged = detectChanges(
    currentUpdateUserProfileDto,
    originalUpdateUserProfileDto,
  );

  return (
    <div className="relative rounded-xl border border-light-background-300  bg-light-background-100">
      <div className="relative h-[192px] w-full rounded-t-xl bg-light-background-300">
        <div className="absolute right-4 top-4 flex items-center gap-4">
          <div
            className="hs-tooltip inline-block cursor-pointer"
            onClick={() => uploadBannerInputRef.current?.click()}
          >
            <div className="hs-tooltip-toggle inline-flex items-center justify-center gap-2 rounded-full bg-light-background-100 p-2 text-light-text-100 hover:bg-light-background-200">
              <SquarePen size={20} />
              <span
                className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-light-primary-100 px-2 py-1 text-xs font-medium text-light-background-100 opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                role="tooltip"
              >
                Upload banner
              </span>
            </div>
          </div>
          {currentUpdateUserProfileDto.bannerUrl && (
            <div
              className="hs-tooltip inline-block cursor-pointer"
              onClick={() =>
                dispatch(
                  setCurrentUpdateProfileDto({
                    ...currentUpdateUserProfileDto,
                    bannerUrl: null,
                  }),
                )
              }
            >
              <div className="hs-tooltip-toggle inline-flex items-center justify-center gap-2 rounded-full bg-light-background-100 p-2 text-light-text-100 hover:bg-light-background-200">
                <Eraser size={20} />
                <span
                  className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-light-primary-100 px-2 py-1 text-xs font-medium text-light-background-100 opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Clear banner
                </span>
              </div>
            </div>
          )}
        </div>
        {currentUpdateUserProfileDto.bannerUrl && (
          <Image
            sizes="100vw"
            className={
              "h-full w-full rounded-t-xl bg-light-background-300  object-cover"
            }
            src={currentUpdateUserProfileDto.bannerUrl}
            width={0}
            height={0}
            alt="Profile Banner"
          />
        )}
      </div>
      <div className="top-50 absolute left-8 size-36 -translate-y-1/2 rounded-full border-4 border-light-background-100 bg-light-background-300"></div>
      {currentUpdateUserProfileDto.imageUrl && (
        <Image
          className={
            "top-50 absolute left-8 size-36 -translate-y-1/2 rounded-full border-4 border-light-background-100 bg-light-background-300 object-cover"
          }
          sizes="100vw"
          src={currentUpdateUserProfileDto.imageUrl}
          width={0}
          height={0}
          alt="Profile Banner"
        />
      )}
      <div className="flex flex-col px-8 pb-8 pt-24">
        <div className="text-lg font-semibold text-light-text-100">
          Your photo and banner
        </div>
        <div className="text-base text-light-text-100">
          This will be displayed on your profile
        </div>
        <div className="mt-4 flex gap-4">
          {currentUpdateUserProfileDto.imageUrl && (
            <Button
              variant="outline"
              className="py-2"
              onClick={() =>
                dispatch(
                  setCurrentUpdateProfileDto({
                    ...currentUpdateUserProfileDto,
                    imageUrl: null,
                  }),
                )
              }
            >
              <Eraser size={16} className="me-2" />
              Clear photo
            </Button>
          )}
          <Button
            variant="solid"
            className="py-2"
            onClick={() => uploadImageInputRef.current?.click()}
          >
            <Upload size={16} className="me-2" />
            Upload photo
          </Button>
          {isChanged && (
            <>
              {!isPending && (
                <Button
                  variant="outline"
                  className="py-2"
                  onClick={() => {
                    dispatch(
                      setCurrentUpdateProfileDto(originalUpdateUserProfileDto),
                    );
                  }}
                >
                  Reset
                </Button>
              )}
              <Button
                variant="solid"
                className="py-2"
                onClick={async () => {
                  await updateUserProfileMutateAsync();
                }}
              >
                {isPending ? (
                  <div
                    className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-light-primary-200"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
            </>
          )}
        </div>
      </div>
      {/* Hidden File Inputs */}
      <input
        ref={uploadImageInputRef}
        className="hidden"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch(
              setCurrentUpdateProfileDto({
                ...currentUpdateUserProfileDto,
                imageUrl,
              }),
            );
          }
        }}
      />
      <input
        ref={uploadBannerInputRef}
        className="hidden"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const bannerUrl = URL.createObjectURL(file);
            dispatch(
              setCurrentUpdateProfileDto({
                ...currentUpdateUserProfileDto,
                bannerUrl: bannerUrl,
              }),
            );
          }
        }}
      />
    </div>
  );
}
