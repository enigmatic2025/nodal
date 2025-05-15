interface HeaderBarProps {
    label: string,
}

export default function HeaderBar({ label }: HeaderBarProps) {
    return (
        <div className="flex flex-row gap-x-5 items-center mb-5">
            <h1 className="text-xl w-[13ch]">{label}</h1>
            <textarea
                placeholder="Search"
                rows={1}
                className="flex min-w-[50%] resize-none rounded-md border border-[#6581FF] text-[1rem] p-2 focus:outline-none ml-auto">
            </textarea>
            <div className="flex flex-row gap-x-5 ml-auto pr-5 text-sm">
                <div className="group flex items-center text-black gap-x-1 cursor-pointer">
                    <div className="group-hover:text-[#6581FF] cursor-pointer">
                        Support
                    </div>
                </div>
                <div className="group flex items-center text-black gap-x-1 cursor-pointer">
                    <div className="group-hover:text-[#6581FF] cursor-pointer">
                        Feedback
                    </div>
                </div>
                <div className="relative group flex items-center text-black gap-x-1 cursor-pointer">
                    <div className={`
                    absolute
                    ml-20
                    mb-4
                        flex w-2 h-2 justify-center items-center 
                        aspect-square 
                        rounded-full 
                        bg-red-500
                        `}
                    />
                    <div className="group-hover:text-[#6581FF] cursor-pointer">
                        Notifications
                    </div>
                </div>
            </div>
        </div>
    )
}