import Card from "@/components/base/Card";
import { ProjectPhaseEnum } from "@/lib/utils/projectUtils";

export default function DashboardJoinedProjectCards() {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-6 px-8 py-4">
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
      </div>
    </>
  );
}
