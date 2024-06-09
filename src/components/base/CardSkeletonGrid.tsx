import CardSkeleton from "./CardSkeleton";

export function CardSkeletonGrid() {
    return (
        <div className="w-full">
            <div className="w-full grid gap-6 grid-cols-2 md:grid-cols-3 ">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />

            </div>
        </div>
    )
}