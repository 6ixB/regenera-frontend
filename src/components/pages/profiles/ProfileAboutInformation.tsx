import {
  Cake,
  Facebook,
  Info,
  Instagram,
  Linkedin,
  Star,
  Twitter,
  Waypoints,
} from "lucide-react";
import Link from "next/link";

export default function ProfileAboutInformation() {
  return (
    <div className="w-2/3 flex flex-col gap-8 bg-light-background-100 p-6 rounded-md shadow">
      <div className="w-full flex gap-x-8 py-2">
        <div className="w-2/6 md:w-1/6">
          <div className="w-32 flex items-center gap-x-2 text-light-text-100">
            <Star size={18} />
            <div className="text-base font-semibold">Rating</div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-1">
          <p className="text-base font-medium text-light-text-100">
            125.99 <span className="font-medium">(#1023)</span>
          </p>
        </div>
      </div>

      <div className="w-full flex gap-x-8 py-2">
        <div className="w-2/6 md:w-1/6">
          <div className="w-32 flex items-center gap-x-2 text-light-text-100">
            <Cake size={20} />
            <div className="text-base font-semibold">Birthdate</div>
          </div>
        </div>
        <div className="w-full flex items-center gap-1">
          <p className="text-base text-light-text-100">
            1 January 2000 <span className="font-medium">(24 years)</span>
          </p>
        </div>
      </div>

      <div className="flex-1 h-full w-full flex gap-x-8">
        <div className="w-2/6 md:w-1/6">
          <div className="w-32 flex items-center gap-x-2 text-light-text-100">
            <Info size={18} />
            <div className="text-base font-semibold">Biography</div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2 me-8">
          <p className="w-full text-base text-light-text-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            doloremque, ab quisquam mollitia velit est reiciendis architecto id
            minima ipsam assumenda hic totam nam distinctio corporis culpa
            numquam, porro possimus.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-x-8">
        <div className="w-2/6 md:w-1/6">
          <div className="w-32 flex items-center gap-x-2 text-light-text-100">
            <Waypoints size={18} />
            <div className="text-base font-semibold">Socials</div>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-1 me-8 text-light-text-100">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com"
            className="flex items-center cursor-pointer p-2 rounded hover:bg-light-background-200"
          >
            <Instagram size={20} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.twitter.com"
            className="flex items-center cursor-pointer p-2 rounded hover:bg-light-background-200"
          >
            <Twitter size={20} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com"
            className="flex items-center cursor-pointer p-2 rounded hover:bg-light-background-200"
          >
            <Facebook size={20} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com"
            className="flex items-center cursor-pointer p-2 rounded hover:bg-light-background-200"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
