import { signIn } from "next-auth/react";
import Button from "../base/Button";
import Google from "../vector-graphics/Google";

export default function GoogleSignInButton() {
  const handleClick = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <Button variant={"outline"} onClick={handleClick}>
      <Google />
      <span>Continue with Google</span>
    </Button>
  );
}
