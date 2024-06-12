import ProfileHeader from "@/components/pages/profiles/ProfileHeader";
import ProfileSetDocumentTitle from "@/components/pages/profiles/ProfileSetDocumentTitle";
import ProfileTabs from "@/components/pages/profiles/ProfileTabs";
import { getUserProfileByIdQueryFn } from "@/lib/api/usersApi";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
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
    console.log(error);
  }

  return null;
}

export default async function Profile({ params }: { params: { id: string } }) {
  const profileData = await getProfileData(params.id);

  if (!profileData) {
    notFound();
  }

  return (
    <main className="min-h-dvh w-full bg-light-background-200 pb-4">
      <ProfileSetDocumentTitle profileData={profileData} />
      <ProfileHeader profileData={profileData} />
      <ProfileTabs profileData={profileData} />
    </main>
  );
}
