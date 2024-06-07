import Header from "@/components/navigations/Header";
import DashboardSidebar from "@/components/navigations/sidebar/dashboard/DashboardSidebar";

interface DashboardTemplateProps {
  children: React.ReactNode;
}

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  return (
    <>
      <Header />
      <div
        className={
          "w-full h-full flex overflow-y-hidden mt-[60px] md:mt-[69.6px] "
        }
      >
        <DashboardSidebar />
        {children}
      </div>
    </>
  );
}
