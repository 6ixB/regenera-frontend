"use client";

import { useSearchParams } from "next/navigation";

enum AuthErrorMessageEnum {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  Default = "Default",
}

const errorMap = {
  [AuthErrorMessageEnum.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
    </p>
  ),
  [AuthErrorMessageEnum.AccessDenied]: (
    <p>
      Access was denied. Please contact us if this error persists. Unique error
      code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">AccessDenied</code>
    </p>
  ),
  [AuthErrorMessageEnum.Verification]: (
    <p>
      There was a problem verifying your account. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Verification</code>
    </p>
  ),
  [AuthErrorMessageEnum.Default]: (
    <p>
      There was an error. Please contact us if this error persists. Unique error
      code: <code className="text-xs bg-slate-100 p-1 rounded-sm">Default</code>
    </p>
  ),
};

export default function AuthErrorMessage() {
  const search = useSearchParams();
  const error = search.get("error") as AuthErrorMessageEnum;

  return <>{errorMap[error] || "Please contact us if this error persists."}</>;
}
