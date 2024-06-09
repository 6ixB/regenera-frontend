"use client";

import Button from "@/components/base/Button";
import { FrontendRoutesEnum } from "@/lib/routes";
import { X } from "lucide-react";
import Link from "next/link";

export enum IncompleteProfileNoticeModalEnum{
  CREATE_PROJECT = "create a project",
  DONATE_PROJECT = "donate to a project",
  VOLUNTEER_PROJECT = "volunteer to a project",
}

interface IncompleteProfileNoticeModalProps {
  onClose?: () => void;
  notice: IncompleteProfileNoticeModalEnum
}

export default function IncompleteProfileNoticeModal({
  onClose, notice
}: IncompleteProfileNoticeModalProps) {
  return (
    <div
      id="hs-small-modal"
      className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] size-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-40"
    >
      <div className="m-3 mt-8 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-bold text-gray-800">
              Your profile data is incomplete
            </h3>
            {onClose && (
              <button
                type="button"
                className="flex size-7 items-center justify-center rounded-md border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                data-hs-overlay="#hs-small-modal"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <X size={20} className="text-light-text-100" />
              </button>
            )}
          </div>
          <div className="overflow-y-auto p-4">
            <p className="mt-1 text-gray-800">
              In order to {notice}, you need to complete your profile
              information, mainly your <b>photo, address, and phone</b>, such
              that other people can contact you.
            </p>
          </div>
          <div className="flex items-center justify-end gap-x-2 border-t px-4 py-3">
            {onClose && (
              <Button
                type="button"
                data-hs-overlay="#hs-small-modal"
                onClick={onClose}
                variant="outline"
                className="inline-flex items-center gap-x-2 rounded-lg border px-3 py-2 text-sm font-semibold disabled:pointer-events-none disabled:opacity-50"
              >
                Close
              </Button>
            )}
            <Link
              href={FrontendRoutesEnum.SETTINGS_PROFILE.toString()}
              className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-light-text-100 px-3 py-2 text-sm font-semibold text-white hover:bg-light-text-200 disabled:pointer-events-none disabled:opacity-50"
            >
              Update profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
