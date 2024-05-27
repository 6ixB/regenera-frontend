import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";
import Card from "@/components/base/Card";

export default function DashboardMyProjectCards() {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-4 px-8 py-4">
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
