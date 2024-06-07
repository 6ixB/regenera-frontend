"use client";

import Input from "@/components/forms/Input";
import { setCurrentUpdateProfileDto } from "@/lib/state/features/users/updateUserProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { Cake, MapPin, Smartphone } from "lucide-react";

interface SettingsProfilePersonalInformationCardProps {}

export default function SettingsProfilePersonalInformationCard({}: SettingsProfilePersonalInformationCardProps) {
  const dispatch = useAppDispatch();

  const currentUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.current,
  );

  return (
    <div className="rounded-xl border border-light-background-300 bg-light-background-100 p-8">
      <div className="text-lg font-semibold text-light-text-100">
        Personal Information
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Input
          icon={<Cake size={18} className="text-light-text-100" />}
          label={"Birthdate"}
          desc={"Share your birthdate with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. 10-19-2004"}
          type={"date"}
          value={currentUpdateUserProfileDto.birthDate ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  birthDate: null,
                }),
              );
            } else if (value < new Date().toISOString().split("T")[0]) {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  birthDate: value,
                }),
              );
            }
          }}
        />
        <Input
          icon={<Smartphone size={18} className="text-light-text-100" />}
          label={"Phone"}
          desc={"Share your phone number with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. 081380803333"}
          type={"text"}
          value={currentUpdateUserProfileDto.phone ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  phone: null,
                }),
              );
            } else if (!isNaN(Number(value))) {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  phone: value,
                }),
              );
            }
          }}
        />
        <Input
          icon={<MapPin size={18} className="text-light-text-100" />}
          label={"Address"}
          desc={"Share your address with others"}
          className={
            "border-light-primary-100 text-base placeholder-light-background-300"
          }
          placeholder={"e.g. 1234 Main St, Springfield, IL 62701"}
          type={"text"}
          value={currentUpdateUserProfileDto.address ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  address: null,
                }),
              );
            } else {
              dispatch(
                setCurrentUpdateProfileDto({
                  ...currentUpdateUserProfileDto,
                  address: value,
                }),
              );
            }
          }}
        />
      </div>
    </div>
  );
}
