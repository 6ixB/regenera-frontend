interface ProfileAboutStatsProps{
    header: string,
    img: React.ReactNode,
    desc: string
}


export default function ProfileAboutStats({header, img, desc}: ProfileAboutStatsProps){
    return (
        <div className="w-full flex flex-col gap-4 items-center">
            <p className="text-base font-medium text-light-text-100">{header}</p>
            {img}
            <p className="text-base font-medium text-light-text-100">{desc}</p>
        </div>
    )
}