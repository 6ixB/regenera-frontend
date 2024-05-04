import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={
        "mt-auto w-full pt-16 pb-8 bg-light-background-100 flex flex-col items-center justify-center shadow-sm"
      }
    >
      <div
        className={
          "w-full flex flex-col  gap-8 items-center text-light-text-100"
        }
      >
        <div className={"w-full max-w-[626px] flex justify-between"}>
          <div className={"text-base font-medium"}>Regenera</div>
          <div className={"flex flex-col gap-2 text-sm"}>
            <div className={"font-semibold"}>Learn more</div>
            <Link href={"/"}>
              <div>How Regenera Works</div>
            </Link>
            <Link href={"/"}>
              <div>Why Regenera</div>
            </Link>
            <Link href={"/"}>
              <div>Common questions</div>
            </Link>
            <Link href={"/"}>
              <div>Success stories</div>
            </Link>
          </div>
          <div className={"flex flex-col gap-2 text-sm"}>
            <div className={"font-semibold"}>Resources</div>
            <Link href={"/"}>
              <div>Help center</div>
            </Link>
            <Link href={"/"}>
              <div>Blog</div>
            </Link>
            <Link href={"/"}>
              <div>Regenera stories</div>
            </Link>
            <Link href={"/"}>
              <div>Newsroom</div>
            </Link>
          </div>
        </div>
        <hr className={"w-full border-light-background-200"}></hr>
        <div
          className={
            "w-full max-w-[626px] flex justify-between text-sm text-light-text-100"
          }
        >
          <div>© 2024 SROOMY</div>
          <div className={"flex items-center gap-8"}>
            <Link href={"/"}>
              <div>Terms</div>
            </Link>
            <Link href={"/"}>
              <div>Privacy Notice</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
