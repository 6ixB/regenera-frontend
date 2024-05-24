'use client'

import { CircleFadingPlus } from "lucide-react"
import Image from "next/image"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

interface CreateProjectTitleTabImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    imageValue: File
}

const CreateProjectTitleTabImage = forwardRef<HTMLInputElement, CreateProjectTitleTabImageProps>(({imageValue, ...props}, ref) => {

    const [titleImage, setTitleImage] = useState<string>('')

    const imageInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
      
        if(imageValue) setTitleImage(URL.createObjectURL(imageValue))
    
    }, [imageValue])
    

    const handleImageInput = () => {
        if(imageInput.current) imageInput.current.click()
    }
    
    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if(e.target.files) setTitleImage(URL.createObjectURL(e.target.files[0]))
            
    //     console.log(e.target.files);
        
    // }

    // useImperativeHandle(ref, () => ({
    //     getImage: () => titleImage
    // }))

    // console.log(imageValue);
    

    return (
        <div className="flex h-[24rem] aspect-square bg-gradient-to-r from-light-primary-200 to-light-primary-100 rounded-md p-0.5 group" onClick={handleImageInput} >
            <div className="flex h-full w-full bg-light-background-100 rounded-md justify-center overflow-hidden">
                <input type="file" accept="image/*" className="hidden" ref={imageInput} {...props}/>
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
})

CreateProjectTitleTabImage.displayName = 'CreateProjectTitleTabImage'

export default CreateProjectTitleTabImage