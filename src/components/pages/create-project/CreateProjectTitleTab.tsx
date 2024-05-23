import CreateProjectTitleTabForm from "./CreateProjectTitleTabForm";

export default function CreateProjectTitleTab(){
    return (
        <div className="container h-fit flex flex-col items-center gap-10 py-4">
            <div className="w-full flex flex-col items-center text-center gap-2">
                <h3 className="font-medium text-3xl text-light-text-100">Initiate a Cleaner Tomorrow</h3>
                <p className="font-medium text-base text-light-text-200">Kickstart your cleanup project by giving a compelling title and eye-catching photo</p>
            </div>

            <CreateProjectTitleTabForm />
        </div>
    )
}