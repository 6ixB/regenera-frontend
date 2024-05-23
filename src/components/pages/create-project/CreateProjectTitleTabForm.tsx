import Input from "@/components/forms/Input";
import CreateProjectTitleTabImage from "./CreateProjectTitleTabImage";
import { PenLine } from "lucide-react";
import Button from "@/components/base/Button";

export default function CreateProjectTitleTabForm(){
    return (
        <div className="w-full flex flex-col items-center gap-y-8 max-w-sm">
            <CreateProjectTitleTabImage />

                <Input icon={<PenLine className="text-light-text-100" />} label={'Project Title'} desc={'Give a captivating title to inspire support'} 
             className={'border-light-primary-100'} />

                <Button variant={'solid'} className="w-full">Finish Your Setup</Button>
            
        </div>
    )
}