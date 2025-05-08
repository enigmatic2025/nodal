import { ActionsData } from "@/data/actions-data"

export function ActionsTable() {
    return (
        <div className="flex-grow min-h-[590px] min-w-[600px] border-[0.5px] border-black/20 rounded-md pb-5 pl-5 pr-5 overflow-auto">
            <div className="sticky top-0 grid grid-cols-5 gap-x-5 bg-white z-10 py-3 text-black font-semibold">
                <div>STATUS</div>
                <div>PROCESS</div>
                <div>DESCRIPTION</div>
                <div>DUE DATE</div>
                <div>AUDIT TRAIL</div>
            </div>
            <div className="flex flex-col text-[0.9rem]">
                {
                    ActionsData.map((item, index) => (
                        <div key={index} className="grid grid-cols-5 min-h-12 items-center gap-x-5 hover:bg-black/2 border-b-[0.5px] border-black/20 cursor-pointer">
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
                                    font-semibold
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
