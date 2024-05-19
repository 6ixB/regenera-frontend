export default function ProfileHeader(){

    return (
        <div className="w-full h-[60vh]">

            <div className="w-full h-4/6 bg-light-background-300"></div>

            <div className="container h-2/6 flex flex-row m-auto gap-6">
                <div className="w-auto h-[130%] aspect-square bg-light-background-300 rounded-full -translate-y-1/2 border-4 border-light-background-100">
                    
                </div>

                <div className="flex flex-col py-6">
                    <h2 className="text-3xl font-medium text-light-text-100">Robert William</h2>
                    <p className="text-sm text-light-text-100">Kemanggisan, Jakarta Barat</p>
                </div>
            </div>

        </div>

    )

}