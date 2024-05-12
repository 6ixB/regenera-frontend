import { ProfileTabEnum } from "./ProfileTabs"

interface ProfileTabsMenuProps{
    menu: ProfileTabEnum,
    activeTab: ProfileTabEnum,
    onClick: (tab: ProfileTabEnum) => void
}

export default function ProfileTabsMenu({menu, activeTab, onClick}: ProfileTabsMenuProps){
    
    return (
        <div className={`w-fit h-full pt-3 pb-2 border-b-2 transition-all duration-500 cursor-pointer ${menu === activeTab ? 'border-b-light-accent-100' : 'border-b-transparent'} border-b-light-accent-100`} 
            onClick={() => onClick(menu)}>
            <span className="text-base text-light-text-100 font-medium">{menu}</span>
        </div>
    )
}