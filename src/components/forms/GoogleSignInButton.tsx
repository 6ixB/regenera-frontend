"use client";

import { getAuth } from "firebase/auth";
import Button from "../base/Button";
import Google from "../vector-graphics/Google";
import { app as firebaseApp } from "@/lib/firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const auth = getAuth(firebaseApp);

export default function GoogleSignInButton() {
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    router.push("/");
  }

  return (
    <Button variant={"outline"} onClick={() => signInWithGoogle()}>
      {loading ? (
        <div
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-light-primary-100 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className={"inline-flex gap-x-2"}>
          <Google />
          <span>{user ? "Redirecting..." : "Continue with Google"}</span>
        </div>
      )}
    </Button>
  );
}
