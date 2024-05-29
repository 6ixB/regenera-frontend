import ProfileHeader from "@/components/pages/profiles/ProfileHeader";
import ProfileTabs from "@/components/pages/profiles/ProfileTabs";

export default function Profile() {
  return (
    <main className="w-full min-h-dvh pb-4 bg-light-background-200">
      <ProfileHeader />
      <ProfileTabs />
    </main>
  );
}
