interface ProjectTopDonationProps {
  idx: number,
  donatorId: string
  sum: number,
}

export default function ProjectTopDonation({ idx, donatorId, sum }: ProjectTopDonationProps) {
  return (
    <div
      className={
        "flex items-center gap-x-2 p-2 border border-light-primary-100 rounded"
      }
    >
      <div
        className={
          "text-base font-medium w-10 h-10 flex items-center justify-center border border-light-primary-200 rounded"
        }
      >
        #{idx}
      </div>
      <div className={"w-10 h-10 rounded-full bg-light-background-300"}></div>
      <div className={"flex flex-col"}>
        <div className={"text-base font-medium"}>{donatorId}</div>
        <div className={"text-sm"}>Donated Rp {sum}</div>
      </div>
    </div>
  );
}
