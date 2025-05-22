"use client"

import { useState } from "react"
import { ActionFlowData } from "@/data/actions-data"
import { ActionData } from "@/data/actions-data"
import { Chat } from "../global/chat"
import { Modal } from "../global/modal"
import { ActionTrail } from "../global/action-trail"



export function RecentActionFlows() {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedFlowID, setSelectedFlowID] = useState<number | null>(null)

    const handleRowClick = (id: number) => {
        setSelectedFlowID(id)
        setOpen(true)
    }

    const filteredActions = selectedFlowID
        ? ActionData.filter(action => action.actionFlowID === selectedFlowID)
        : []

    return (
        <div className="flex-grow min-h-[590px] min-w-[600px] border border-black/10 rounded-md pb-5 pl-5 pr-5 overflow-auto">
            <div className="sticky top-0 grid grid-cols-5 gap-x-5 z-10 py-3 text-black font-semibold">
                <div>Status</div>
                <div>Priority</div>
                <div>Process</div>
                <div>Description</div>
                <div>Deadline</div>
            </div>
            <div className="flex flex-col text-[0.8rem]">
                {
                    ActionFlowData.map((item, index) => (
                        <div key={index} onClick={() => { setOpen(true); handleRowClick(item.id) }} className="group grid grid-cols-5 min-h-12 items-center gap-x-5 hover:bg-black/2 border-b border-black/10 cursor-pointer">
                            <div className={`
                                    ${item.status === "In Progress" ? "border text-blue-500" : ""}
                                    ${item.status === "Complete" ? " border text-green-500" : ""}
                                    ${item.status === "Cancelled" ? " border text-gray-500" : ""}
                                    w-fit
                                    flex
                                    flex-row
                                    justify-start
                                    items-center
                                    rounded-full
                                    gap-2
                                    p-1
                                    `}>
                                {item.status === "In Progress" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-ellipsis-icon">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M17 12h.01" />
                                        <path d="M12 12h.01" />
                                        <path d="M7 12h.01" />
                                    </svg>
                                )}
                                {item.status === "Complete" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big-icon">
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                        <path d="m9 11 3 3L22 4" />
                                    </svg>
                                )}
                                {item.status === "Cancelled" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ban-icon">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m4.9 4.9 14.2 14.2" />
                                    </svg>
                                )}
                                {item.status}
                            </div>
                            <div className={`
                                    ${item.priority === "High" ? "border border-red-500 text-red-500" : ""}
                                    ${item.priority === "Medium" ? "border border-blue-500 text-blue-500" : ""}
                                    ${item.priority === "Low" ? "border border-green-500 text-green-500" : ""}
                                    w-[10ch]
                                    flex
                                    flex-row
                                    justify-center
                                    items-center
                                    rounded-full
                                    gap-2
                                    p-1
                                `}>
                                {item.priority}
                            </div>
                            <div>
                                {item.process}
                            </div>
                            <div>
                                {item.description}
                            </div>
                            <div>
                                {item.deadline.toLocaleDateString()}
                            </div>
                        </div>
                    ))
                }
                <Modal isOpen={open} onClose={() => setOpen(false)}>
                    <div className="flex flex-row items-center bg-[#6581FF] text-white rounded-md p-2">
                        <div className="w-50%">
                            <p className="w-fit text-xl">Action Trail</p>
                            <p className="flex items-center gap-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                The action trail enables you to follow the workflow from start to finish.
                            </p>
                        </div>
                        <textarea
                            placeholder="Search Action Flow ID"
                            rows={1}
                            className="flex h-[70%] w-[50%] resize-none rounded-md bg-white text-black text-sm p-2 focus:outline-none ml-auto">
                        </textarea>
                    </div>
                    <div className="flex flex-row justify-start h-[50vh] w-250 gap-x-10 p-2">
                        <div className="flex flex-col h-full w-full rounded-md">
                            <div className="flex h-full border border-black/10 overflow-y-auto rounded-md">
                                <ActionTrail data={filteredActions} />
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-full rounded-md">
                            <Chat />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
