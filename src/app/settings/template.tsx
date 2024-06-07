import Header from "@/components/navigations/Header";
import SettingsSidebar from "@/components/navigations/sidebar/settings/SettingsSidebar";

interface DashboardTemplateProps {
  children: React.ReactNode;
}

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  return (
    <>
      <div className={"w-full h-full flex overflow-y-hidden"}>
        <SettingsSidebar />
        {children}
      </div>
    </>
  );
}
