'use client'

import { useState } from "react";
import DiscoverPopularProject from "./DiscoverPopularProject";

export default function DiscoverPopularProjects(){

    const [activeNumber, setActiveNumber] = useState(1)

    const handleExpandSlide = (number: number) => {
        setActiveNumber(number)
    }

    return (
        <div className="w-full h-fit flex flex-row gap-1 ">
            <DiscoverPopularProject number={1} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProject number={2} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProject number={3} activeNumber={activeNumber} onClick={handleExpandSlide} />
            <DiscoverPopularProject number={4} activeNumber={activeNumber} onClick={handleExpandSlide}  />
            <DiscoverPopularProject number={5} activeNumber={activeNumber} onClick={handleExpandSlide} />
        </div>
    )
}