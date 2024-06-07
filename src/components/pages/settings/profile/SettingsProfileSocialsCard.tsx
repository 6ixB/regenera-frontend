"use client";

import Input from "@/components/forms/Input";
import { setCurrentUpdateProfileDto } from "@/lib/state/features/users/updateUserProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SettingsProfileSocialsCard() {
  const dispatch = useAppDispatch();

  const currentUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.current,
  );

  return (
    <div className="rounded-xl border border-light-background-300 bg-light-background-100 p-8">
      <div className="text-lg font-semibold text-light-text-100">Socials</div>
      <div className="mt-4 flex flex-col gap-4">
        <Input
          icon={<Instagram size={18} className="text-light-text-100" />}
          label={"Instagram"}
          desc={"Share your instagram profile with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. https://instagram.com/hanselcute"}
          type={"text"}
          value={currentUpdateUserProfileDto.instagramUrl ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  instagramUrl: null,
                }),
              );
            } else {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  instagramUrl: value,
                }),
              );
            }
          }}
        />
        <Input
          icon={<Facebook size={18} className="text-light-text-100" />}
          label={"Faceook"}
          desc={"Share your facebook profile with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. https://facebook.com/hanselcute"}
          type={"text"}
          value={currentUpdateUserProfileDto.facebookUrl ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  facebookUrl: null,
                }),
              );
            } else {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  facebookUrl: value,
                }),
              );
            }
          }}
        />
        <Input
          icon={<Twitter size={18} className="text-light-text-100" />}
          label={"Twitter"}
          desc={"Share your twitter profile with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. https://twitter.com/hanselcute"}
          type={"text"}
          value={currentUpdateUserProfileDto.twitterUrl ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  twitterUrl: null,
                }),
              );
            } else {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  twitterUrl: value,
                }),
              );
            }
          }}
        />
        <Input
          icon={<Linkedin size={18} className="text-light-text-100" />}
          label={"Linkedin"}
          desc={"Share your Linkedin profile with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. https://linkedin.com/in/hanselcute"}
          type={"text"}
          value={currentUpdateUserProfileDto.linkedinUrl ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  linkedinUrl: null,
                }),
              );
            } else {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  linkedinUrl: value,
                }),
              );
            }
          }}
        />
      </div>
    </div>
  );
}
