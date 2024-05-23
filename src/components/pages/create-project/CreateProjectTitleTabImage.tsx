'use client'

import { Aperture, CircleFadingPlus, Plus } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

export default function CreateProjectTitleTabImage(){

    const [titleImage, setTitleImage] = useState<string>('')

    const imageInput = useRef<HTMLInputElement>(null)

    const handleImageInput = () => {
        if(imageInput.current) imageInput.current.click()
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) setTitleImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="flex h-[24rem] aspect-square bg-gradient-to-r from-light-primary-200 to-light-primary-100 rounded-md p-0.5 group" onClick={handleImageInput} >
            <div className="flex h-full w-full bg-light-background-100 rounded-md justify-center overflow-hidden">
                <input type="file" onChange={handleImageChange} className="hidden" ref={imageInput}/>
                {
                    titleImage === '' ?
                    <CircleFadingPlus strokeWidth={1.5} className={'text-light-text-200 w-3/4 h-auto p-24 transition-all duration-300 group-hover:scale-110'} />
                    : 
                    <Image width={0} height={0} sizes={"100vw"}
                    src={titleImage} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"/>
                }
            </div>
        </div>
    )

}