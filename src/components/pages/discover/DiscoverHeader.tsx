import DiscoverPopularProjects from "./DiscoverPopularProjects";

export default function DiscoverHeader(){
    return (
        <div className="w-full flex ">
            <div className="container flex flex-col justify-center items-center gap-4">

                <h3 className="text-2xl font-medium text-light-text-200 pt-2">Join the Movement: Popular Cleanup Projects</h3>

                <DiscoverPopularProjects />

            </div>
        </div>
    )
}