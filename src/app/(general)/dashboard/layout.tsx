import Sidebar from "@/components/navigations/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"w-full h-full flex"}>
      <Sidebar />
      {children}
    </div>
  );
}
