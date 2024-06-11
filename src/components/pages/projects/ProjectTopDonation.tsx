import { UserEntity } from "@/lib/model/user/user.entity";
import Image from "next/image";

interface ProjectTopDonationProps {
  idx: number,
  donator: UserEntity
  totalAmount: number,
}

export default function ProjectTopDonation({ idx, donator, totalAmount }: ProjectTopDonationProps) {
  return (
    <div
      className={
        "flex items-center gap-x-2 p-2 border border-light-primary-100 rounded bg-light-background-100 "
      }
    >
      <div
        className={
          "text-base font-medium w-10 h-10 flex items-center justify-center border border-light-primary-200 rounded"
        }
      >
        #{idx}
      </div>
      <div className={"w-10 h-10 rounded-full bg-light-background-300"}>
        <Image
          width={0}
          height={0}
          sizes={"100vw"}
          className={`w-full h-auto aspect-square rounded-full object-cover`}
          src={
            donator.imageUrl || ''
          }
          alt={"User Profile"}
        />
      </div>
      <div className={"flex flex-col"}>
        <div className={"text-base font-medium"}>{donator.username}</div>
        <div className={"text-sm"}>Donated Rp {totalAmount}</div>
      </div>
    </div>
  );
}
