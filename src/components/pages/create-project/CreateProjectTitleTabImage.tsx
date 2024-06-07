"use client";

import { CircleFadingPlus } from "lucide-react";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface CreateProjectTitleTabImageProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  images: any;
}

const CreateProjectTitleTabImage = forwardRef<
  HTMLInputElement,
  CreateProjectTitleTabImageProps
>(({ images, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current!);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className="flex h-[24rem] aspect-square bg-gradient-to-r from-light-primary-200 to-light-primary-100 rounded-md p-0.5 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex h-full w-full bg-light-background-100 rounded-md justify-center overflow-hidden">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          {...props}
        />
        {!images || images.length == 0 ? (
          <CircleFadingPlus
            strokeWidth={1.5}
            className={
              "text-light-text-200 w-3/4 h-auto p-24 transition-all duration-300 group-hover:scale-110"
            }
          />
        ) : (
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src={URL.createObjectURL(images[0])}
            alt=""
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        )}
      </div>
    </div>
  );
});

CreateProjectTitleTabImage.displayName = "CreateProjectTitleTabImage";

export default CreateProjectTitleTabImage;
