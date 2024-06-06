"use client";

import Input from "@/components/forms/Input";
import CreateProjectTitleTabImage from "../CreateProjectTitleTabImage";
import { PenLine } from "lucide-react";
import Button from "@/components/base/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProjectTitleDto,
  CreateProjectTitleDtoSchema,
} from "@/lib/model/project/project.dto";
import { CreateProjectTabEnum } from "../CreateProjectTab";

interface CreateProjectTitleTabFormProps {
  handleActiveTab: (tab: CreateProjectTabEnum) => void,
}


export default function CreateProjectTitleTabForm({ handleActiveTab }: CreateProjectTitleTabFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateProjectTitleDto>({
    resolver: zodResolver(CreateProjectTitleDtoSchema),
  });

  const imageValue = watch("image");

  const onSubmit: SubmitHandler<CreateProjectTitleDto> = async (data) => {

    handleActiveTab(CreateProjectTabEnum.DETAILS)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center gap-y-10 max-w-sm"
    >

      <div className="w-full h-full relative">

        <CreateProjectTitleTabImage {...register("image")} images={imageValue} />
        {errors.image && (
          <p className="text-sm text-light-accent-100 absolute bottom-0 translate-y-full">
            {errors.image?.message}
          </p>
        )}
      </div>

      <Input
        icon={<PenLine className="text-light-text-100" />}
        label={"Project Title"}
        desc={"Give a captivating title to inspire support"}
        className={"border-light-primary-100 placeholder-light-background-300"}
        placeholder={"e.g. Cleaning Up Binus Anggrek"}
        error={errors.title?.message}
        {...register("title")}
      />

      <Button variant={"solid"} className={"w-full"} type={"submit"}>
        Finish Your Setup
      </Button>
    </form>
  );
}
