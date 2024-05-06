export default function ProjectTopDonation() {
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
        #1
      </div>
      <div className={"w-10 h-10 rounded-full bg-light-background-300"}></div>
      <div className={"flex flex-col"}>
        <div className={"text-base font-medium"}>Example User</div>
        <div className={"text-sm"}>Donated $500</div>
      </div>
    </div>
  );
}
