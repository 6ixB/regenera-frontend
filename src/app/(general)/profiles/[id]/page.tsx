import ProfileHeader from "@/components/pages/profiles/ProfileHeader";
import ProfileTabs from "@/components/pages/profiles/ProfileTabs";

export default function Profile(){
    return (
        <main className="w-full pb-4">
            <ProfileHeader/>
            <ProfileTabs/>
        </main>
    )
}