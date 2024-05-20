'use client'

import { useState } from "react";
import DiscoverPopularProjectSlide from "./DiscoverPopularProjectSlide";

export default function DiscoverPopularProjects(){

    const [activeNumber, setActiveNumber] = useState(1)

    const handleExpandSlide = (number: number) => {
        setActiveNumber(number)
    }

    return (
        <div className="w-full h-fit flex flex-row gap-1 ">
            <DiscoverPopularProjectSlide number={1} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProjectSlide number={2} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProjectSlide number={3} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProjectSlide number={4} activeNumber={activeNumber} onClick={handleExpandSlide}  />
            <DiscoverPopularProjectSlide number={5} activeNumber={activeNumber} onClick={handleExpandSlide} />
        </div>
    )
}