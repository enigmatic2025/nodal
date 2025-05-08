import { ReactElement } from "react";

interface NavBarButtonProps {
    label: string,
    icon: ReactElement<SVGSVGElement>,
    count: number,
}

export function NavBarButton({ label, icon, count }: NavBarButtonProps) {
    return (
        <div className="flex flex-row justify-start items-center gap-x-5 rounded-md hover:bg-[#6581FF] hover:text-white cursor-pointer p-2">
            {icon}
            <p className="font-normal">{label}</p>
            {
                count > 0 &&
                <div className="flex w-[20px] h-full text-[0.8rem] text-white font-semibold justify-center items-center aspect-square ml-auto rounded-full bg-red-500 p-3 antialiased">
                    {count}
                </div>
            }
        </div>
    )
}

