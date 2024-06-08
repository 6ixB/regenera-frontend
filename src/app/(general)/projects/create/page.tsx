import CreateProjectIncompleteProfileNoticeModal from "@/components/pages/create-project/CreateProjectIncompleteProfileNoticeModal";
import CreateProjectTab from "@/components/pages/create-project/CreateProjectTab";
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

export default async function CreateProject() {
  const session = await auth();
  const userProfileData = await getProfileData(session?.user.id as string);

  if (!userProfileData) {
    notFound();
  }

  if (
    !userProfileData.address ||
    !userProfileData.phone ||
    !userProfileData.user?.imageUrl
  ) {
    return <CreateProjectIncompleteProfileNoticeModal />;
  }

  return (
    <main className="flex w-full items-center justify-center pb-8 pt-24">
      <CreateProjectTab />
    </main>
  );
}
