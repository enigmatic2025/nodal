import { ActionsData } from "@/data/actions-data"

export function ActionsTable() {
    return (
        <div className="flex-grow min-h-[590px] min-w-[600px] border-[0.5px] border-black/20 rounded-md pb-5 pl-5 pr-5 overflow-auto">
            <div className="sticky top-0 grid grid-cols-5 gap-x-5 bg-white z-10 py-3 text-gray-500 font-semibold">
                <div>Status</div>
                <div>Process</div>
                <div>Description</div>
                <div>Due Date</div>
                <div>Audit Trail</div>
            </div>
            <div className="flex flex-col text-[0.9rem]">
                {
                    ActionsData.map((item, index) => (
                        <div key={index} className="grid grid-cols-5 min-h-12 items-center gap-x-5 hover:bg-black/2 border-b-[0.5px] border-black/20 cursor-pointer">
                            <div>
                                <div className={`
                                    ${item.status === "In Progress" ? "bg-blue-500" : ""}
                                    ${item.status === "Complete" ? "bg-green-400" : ""}
                                    ${item.status === "Cancelled" ? "bg-gray-200" : ""}
                                    w-3
                                    h-full
                                    aspect-square
                                    rounded-full
                                    `} />
                                    {item.status}
                            </div>
                            <div className="font-semibold">
                                {item.process}
                            </div>
                            <div>
                                {item.description}
                            </div>
                            <div>
                                {item.duedate.toLocaleDateString()}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
