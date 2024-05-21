'use client'

import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";
import Card from "@/components/base/Card";
import Pagination from "@/components/navigations/pagination/Pagination";
import DiscoverProjectsCards from "./DiscoverProjectsCards";
import { act, useState } from "react";

export default function DiscoverProjects(){

    const [activePage, setActivePage] = useState(1)
    
    const endPage = 12
    
    const handlePagination = (page: number) => {
        
        if(page < 1){
            page = 1
        } 
        else if(page > endPage){
            page = endPage
        }
        
        setActivePage(page)
    }


    return (
        <div className="w-full h-fit ">

            <div className="container flex flex-col m-auto">

                <p className="text-lg font-medium text-light-text-200 pt-4">Discover projects</p>

                <DiscoverProjectsCards activePage={activePage}/>

                <Pagination endPage={endPage} activePage={activePage} batch={Math.ceil(activePage / 3)} onClick={handlePagination}/>
            </div>

        </div>
    )
}