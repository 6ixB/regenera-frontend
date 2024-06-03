"use client";

import { CircleCheck } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

enum SignInToastCodeEnum {
  SignUpSuccess = "SignUpSuccess",
}

const signInToastCodeMap = {
  [SignInToastCodeEnum.SignUpSuccess]: (
    <p className={"text-sm"}>Successfully created an account</p>
  ),
};

export default function SignInToast() {
  const search = useSearchParams();
  const code = search.get("signin") as SignInToastCodeEnum;

  useEffect(() => {
    if (code in signInToastCodeMap) {
      toast.custom(
        <div
          className="max-w-xs bg-white border border-light-background-300 md:shadow-sm rounded-xl"
          role="alert"
        >
          <div className="flex p-4 text-light-text-100">
            <CircleCheck size={20} className="flex-shrink-0" />
            <div className="ms-3">{signInToastCodeMap[code]}</div>
          </div>
        </div>
      );
    }
  }, [code]);

  return null;
}
