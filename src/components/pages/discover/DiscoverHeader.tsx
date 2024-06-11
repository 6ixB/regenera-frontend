import DiscoverPopularProjects from "./DiscoverPopularProjects";

export default function DiscoverHeader(){
    return (
        <div className="w-full flex justify-center">
            <div className="container flex flex-col justify-center items-center gap-4">


                <DiscoverPopularProjects />

            </div>
        </div>
    )
}