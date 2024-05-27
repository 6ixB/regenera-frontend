"use client";

import { Star } from "lucide-react";
import { useSession } from "next-auth/react";
import { Typewriter } from "react-simple-typewriter";

function formatDate(date: Date): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `Today is ${dayOfWeek}, ${month} ${dayOfMonth}`;
}

export default function DashboardMainGreetingCard() {
  const { data } = useSession();
  const currentDate = new Date();

  return (
    <div
      className={
        "h-72 w-full bg-light-background-100 border border-light-background-300 text-light-text-100 p-8 rounded-md row-span-5 flex flex-col gap-y-4"
      }
    >
      <div className={"text-xl font-semibold"}>
        Welcome back,
        <Typewriter
          words={[` ${data?.user.username}!`, ` ${data?.user.email}!`]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        👋
      </div>
      <div className={"text-base"}>
        {formatDate(currentDate)}. Are you ready to make the world a better
        place today?
      </div>
      <div
        className={
          "flex-1 grid grid-cols-4 rounded-md border border-light-background-300 divide-light-background-300 divide-x  text-base 3xl:text-xl font-semibold text-center"
        }
      >
        <div
          className={"w-full flex flex-col gap-y-2 items-center justify-center"}
        >
          <Star size={16} />
          <div>2120</div>
        </div>
        <div
          className={"w-full flex flex-col gap-y-2 items-center justify-center"}
        >
          <div>2</div>
          <div>Projects</div>
        </div>
        <div
          className={"w-full flex flex-col gap-y-2 items-center justify-center"}
        >
          <div>10</div>
          <div>Donations</div>
        </div>
        <div
          className={"w-full flex flex-col gap-y-2 items-center justify-center"}
        >
          <div>7</div>
          <div>Volunteers</div>
        </div>
      </div>
    </div>
  );
}
