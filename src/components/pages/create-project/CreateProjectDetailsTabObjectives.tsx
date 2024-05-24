import { Images } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface CreateProjectDetailsTabObjectivesProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    objectives: any;
}

const CreateProjectDetailsTabObjectives = forwardRef<
  HTMLInputElement,
  CreateProjectDetailsTabObjectivesProps
>(({ objectives, ...props }, ref) =>{

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current!);

    const handleClick = () => {
        if (inputRef.current) {
        inputRef.current.click();
        }
    };

    return (
        <div className="flex w-full h-[12rem] items-center justify-center flex-col border-light-primary-200 border border-dashed rounded-md p-12 gap-2 group" onClick={handleClick}>
             <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={inputRef}
                {...props}
                multiple
                />
            <Images strokeWidth={1.5} className="text-light-primary-100 h-full w-auto transition-all duration-300 group-hover:scale-110"/>
            <p className="font-medium text-sm text-light-text-200">Upload your objectives</p>
        </div>
    )
})

CreateProjectDetailsTabObjectives.displayName = "CreateProjectDetailsTabObjectives";

export default CreateProjectDetailsTabObjectives;
