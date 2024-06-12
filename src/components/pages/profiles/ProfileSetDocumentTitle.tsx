"use client";

import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { useDocumentTitle } from "@uidotdev/usehooks";

interface ProfileSetDocumentTitleProps {
  profileData: UserProfileEntity;
}

export default function ProfileSetDocumentTitle({
  profileData,
}: ProfileSetDocumentTitleProps) {
  useDocumentTitle(`Regenera · ${profileData.user?.username}`);

  return null;
}
