"use client"

import { useState } from "react"
import { ActionsData } from "@/data/actions-data"
import { AuditTrailData } from "@/data/actions-data"
import { Button } from "../global/button"
import { Chat } from "../global/chat"
import { Modal } from "../global/modal"
import { AuditTrail } from "../global/audit-trail"



export function ActionsTable() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="flex-grow min-h-[590px] min-w-[600px] border-[0.5px] border-black/20 rounded-md pb-5 pl-5 pr-5 overflow-auto">
            <div className="sticky top-0 grid grid-cols-5 gap-x-5 bg-white z-10 py-3 text-black font-semibold">
                <div>Status</div>
                <div>Process</div>
                <div>Description</div>
                <div>Due Date</div>
                <div>Audit Trail</div>
            </div>
            <div className="flex flex-col text-[0.8rem]">
                {
                    ActionsData.map((item, index) => (
                        <div key={index} onClick={() => window.open(item.link)} className="grid grid-cols-5 min-h-12 items-center gap-x-5 hover:bg-black/2 border-b-[0.5px] border-black/20 cursor-pointer">
                            <div className={`
                                    ${item.status === "In Progress" ? "bg-blue-50 text-blue-500 font-semibold" : ""}
                                    ${item.status === "Complete" ? "bg-green-50 text-green-500 font-semibold" : ""}
                                    ${item.status === "Cancelled" ? "bg-gray-50 text-gray-500 font-semibold" : ""}
                                    w-[13ch]
                                    flex
                                    flex-col
                                    justify-center
                                    items-center
                                    rounded-full
                                    gap-2
                                    p-1
                                    `}>
                                {item.status}
                            </div>
                            <div>
                                {item.process}
                            </div>
                            <div>
                                {item.description}
                            </div>
                            <div>
                                {item.duedate.toLocaleDateString()}
                            </div>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                setOpen(true);
                            }}>
                                <Button onClick={() => { setOpen(true) }}>Open</Button>
                            </div>
                        </div>
                    ))
                }
                <Modal isOpen={open} onClose={() => setOpen(false)}>
                    <div className="flex flex-row justify-start h-[60vh] w-250 gap-x-10 p-2">
                        <div className="flex flex-col h-full w-full rounded-md">
                            <div className="w-fit text-white text-lg bg-[#6581FF] rounded-full mb-5 pl-5 pr-5">Audit Trail</div>
                            <div className="flex items-center gap-x-2 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                Audit trail enables you to follow the process flow from start to finish.
                            </div>
                            <div className="flex h-full rounded-md bg-black/2 overflow-y-auto">
                                <AuditTrail data={AuditTrailData} />
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
