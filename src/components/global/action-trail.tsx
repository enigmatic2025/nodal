import { motion } from "motion/react"
import { user } from "@/data/user-data";
import { Button } from "./button";

interface Action {
    id: number;
    label: string;
    assignee: string;
    url: string
    deadline: string;
    complete: boolean;
}

interface ActionTrailData {
    data: Action[]
}

export function ActionTrail({ data }: ActionTrailData) {
    return (
        <div className="flex flex-col h-full text-[0.8rem]">
            <div className="h-full">
                <div className="grid grid-cols-1 gap-y-5 p-5">
                    {data.map((entry, index) => (
                        <div key={entry.id} className="relative flex items-center gap-x-5 p-1">

                            {/* ID and timestamp */}
                            <p className="text-gray-400">
                                <span className="font-bold text-black">ID: {entry.id}</span>
                                <br />
                                {entry.deadline}
                                <div className="flex w-fit items-center gap-x-1 text-xs text-[#6581FF] mt-2 p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    {entry.assignee}
                                </div>
                            </p>

                            {/* Timeline marker and line */}
                            <div className="flex flex-col items-center h-full relative z-10">
                                <div className="flex justify-center items-center h-4 aspect-square border border-[#6581FF] rounded-full z-20">
                                    {entry.complete === false ? (
                                        <motion.div
                                            className="h-1.5 aspect-square bg-[#6581FF] rounded-full z-20"
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ) : (
                                        <div className="flex justify-center items-center text-[#6581FF] h-3 aspect-square rounded-full z-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                                        </div>
                                    )}
                                </div>
                                {/* Only render the dashed line if not the last entry */}
                                {index !== data.length - 1 && (
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-[calc(100%+20px)] border-l border-dashed border-black/20 z-0" />
                                )}
                            </div>

                            {/* Label and user */}
                            <div className="flex-1">
                                <p className="w-[90%]">{entry.label}</p>
                            </div>
                            {
                                entry.assignee === user.firstName + ' ' + user.lastName && (index === 0 || data[index - 1].complete === true) &&
                                <Button className="ml-auto">Go</Button>
                            }
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}