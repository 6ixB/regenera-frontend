"use client";

import TextArea from "@/components/forms/TextArea";
import { setCurrentUpdateProfileDto } from "@/lib/state/features/users/updateUserProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { Info } from "lucide-react";

interface SettingsProfileBioCardProps {}

export default function SettingsProfileBioCard({}: SettingsProfileBioCardProps) {
  const dispatch = useAppDispatch();

  const currentUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.current,
  );

  return (
    <div className="h-[288px] flex-col rounded-xl border border-light-background-300 bg-light-background-100 p-8">
      <TextArea
        icon={<Info size={18} className="text-light-text-100" />}
        label={"Bio"}
        desc={"Tell us about yourself and your projects"}
        className={
          "h-full w-full resize-none border-light-background-300 placeholder-light-background-300"
        }
        placeholder="e.g. I'm a software engineer who loves to build web applications."
        value={currentUpdateUserProfileDto.bio ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "") {
            dispatch(
              setCurrentUpdateProfileDto({
                ...currentUpdateUserProfileDto,
                bio: null,
              }),
            );
          } else {
            dispatch(
              setCurrentUpdateProfileDto({
                ...currentUpdateUserProfileDto,
                bio: value,
              }),
            );
          }
        }}
      />
    </div>
  );
}
