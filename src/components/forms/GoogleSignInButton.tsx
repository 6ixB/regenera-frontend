"use client";

import { getAuth } from "firebase/auth";
import Button from "../base/Button";
import Google from "../vector-graphics/Google";
import { app as firebaseApp } from "@/lib/firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

export default function GoogleSignInButton() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Signed In User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <Button variant={"outline"} onClick={() => signInWithGoogle()}>
      <div className={"inline-flex gap-x-2"}>
        <Google />
        <span>Continue with Google</span>
      </div>
    </Button>
  );
}
