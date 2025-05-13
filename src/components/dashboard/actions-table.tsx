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
                                    ${item.status === "In Progress" ? "bg-blue-100 text-blue-500" : ""}
                                    ${item.status === "Complete" ? "bg-green-100 text-green-500" : ""}
                                    ${item.status === "Cancelled" ? "bg-gray-100 text-gray-500" : ""}
                                    w-[13ch]
                                    flex
                                    flex-col
                                    justify-center
                                    items-center
                                    rounded-full
                                    gap-2
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
                    <div className="flex flex-col justify-start h-[80vh] w-200 gap-x-10 p-5">
                        <p className="font-semibold text-2xl mb-5">Audit Trail</p>
                        <div className="h-full overflow-y-auto p-1">
                            <div className="w-full mb-10">
                                <p className="font-normal text-lg mb-5">Logs</p>
                                <AuditTrail data={AuditTrailData} />
                            </div>
                            < div className="w-full border-[0.5px] border-black/20 mt-5 mb-5" />
                            <div className="h-full w-full">
                                <p className="font-normal text-lg mb-5">Notes</p>
                                <Chat />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
