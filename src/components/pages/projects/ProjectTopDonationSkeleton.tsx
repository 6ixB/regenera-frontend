import { UserEntity } from "@/lib/model/user/user.entity";
import Image from "next/image";

interface ProjectTopDonationSkeletonProps {
    idx: number,
}

export default function ProjectTopDonationSkeleton({ idx }: ProjectTopDonationSkeletonProps) {
    return (
        <div
            className={
                "flex items-center gap-x-2 p-2 border border-light-primary-100 rounded bg-light-background-100 animate-pulse duration-200"
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

            </div>
            <div className={"flex flex-col gap-y-2"}>
                <div className="bg-light-background-300 h-3 rounded-xl w-24">
                    
                </div>
                <div className="bg-light-background-300 h-3 rounded-xl w-48">
                </div>
            </div>
        </div>
    );
}
