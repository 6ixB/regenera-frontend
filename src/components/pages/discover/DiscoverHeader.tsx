import DiscoverPopularProjects from "./DiscoverPopularProjects";

export default function DiscoverHeader(){
    return (
        <div className="w-full flex pt-24 pb-8">
            <div className="container flex flex-col justify-center items-center gap-4">

                <h3 className="text-2xl font-medium text-light-primary-100 pt-2">Join the Movement: Popular Cleanup Projects</h3>

                <DiscoverPopularProjects />

            </div>
        </div>
    )
}