import SettingsProfileMain from "@/components/pages/settings/profile/SettingsProfileMain";
import { getUserProfileByIdQueryFn } from "@/lib/api/usersApi";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { auth } from "@/lib/next-auth/auth";
import { notFound } from "next/navigation";

async function getProfileData(
  userId: string,
): Promise<UserProfileEntity | null> {
  try {
    const res = await getUserProfileByIdQueryFn(userId);

    if (res.status === 200) {
      return res.data as UserProfileEntity;
    }
  } catch (error) {
    return null;
  }

  return null;
}

export default async function SettingsProfile() {
  const session = await auth();
  const profileData = await getProfileData(session?.user.id as string);

  if (!profileData) {
    notFound();
  }

  return (
    <main
      className={
        "flex h-full w-full flex-1 overflow-y-hidden bg-light-background-200"
      }
    >
      <SettingsProfileMain profileData={profileData} />
    </main>
  );
}
