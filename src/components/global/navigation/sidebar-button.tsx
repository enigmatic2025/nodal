import { ReactElement } from "react";

interface NavBarButtonProps {
    label: string,
    icon: ReactElement<SVGSVGElement>,
    active: boolean,
    count: number,
}

export function SideBarButton({ label, icon, active, count }: NavBarButtonProps) {
    return (
        <div className={`group ${active ? "bg-[#6581FF] text-white" : ""} flex flex-row justify-start items-center gap-x-5 rounded-md hover:bg-[#6581FF] hover:text-white cursor-pointer p-1`}>
            {icon}
            <p className="font-normal text-sm">{label}</p>
            {
                count > 0 &&
                <div className={`
                ml-auto 
                mr-1
                ${active ? "bg-white" : "bg-red-500"} 
                flex w-2 h-2 justify-center items-center 
                aspect-square 
                rounded-full 
                group-hover:bg-white
                `}
                />
            }
        </div>
    )
}

