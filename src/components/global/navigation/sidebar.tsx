"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { user } from "@/data/user-data"
import { NavBarButtonData } from "@/data/navbar-data"
import { SideBarButton } from "./sidebar-button"

export default function SideBar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col min-h-[99vh] justify-start items-center min-w-[250px] bg-white text-black rounded-md shadow-sm p-5 overflow-y-auto">
            <Image
                src={'/nodal-title-color-black.svg'}
                alt="logo"
                height={100}
                width={100}
                className="mb-5"
            />
            <div className="w-full border-t border-black/10 mb-5" />
            <div className="flex flex-col w-full gap-y-3 mb-10">
                {NavBarButtonData.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                        <Link key={item.href} href={item.href} passHref>
                            <SideBarButton
                                label={item.label}
                                icon={item.icon}
                                count={item.count}
                                active={isActive}
                            />
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-row w-full justify-start items-center rounded-md gap-x-5 mt-auto">
                <Image
                    src={'/user.jpeg'}
                    alt="logo"
                    height={30}
                    width={30}
                    className="rounded-full"
                />
                <div>
                    <p className="text-sm">{user.firstName + ' ' + user.lastName}</p>
                    <p className="text-sm text-gray-500">{user.team}</p>
                </div>
            </div>
        </div>
    )
}