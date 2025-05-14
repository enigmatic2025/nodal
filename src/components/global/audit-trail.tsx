interface AuditEntry {
    id: number;
    label: string;
    user: string;
    timestamp?: string;
}

interface AuditTrailData {
    data: AuditEntry[]
}

export function AuditTrail({ data }: AuditTrailData) {
    return (
        <div className="h-full text-[0.8rem]">
            <div className="flex items-center gap-x-2 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                Audit trail enables you to follow the process flow from start to finish.
            </div>
            <div className="h-full overflow-y-auto">
                <div className="grid grid-cols-1 gap-y-5 rounded-md p-5">
                    {data.map((entry, index) => (
                        <div key={entry.id} className="relative flex items-center gap-x-5 p-1">
                            {/* ID and timestamp */}
                            <p className="text-gray-400">
                                ID: {entry.id}
                                <br />
                                {entry.timestamp}
                            </p>
                            {/* Timeline marker and line */}
                            <div className="flex flex-col items-center h-full relative z-10">
                                <div className="flex justify-center items-center h-3 aspect-square bg-[#6581FF] rounded-full z-20">
                                    <div className="h-1.5 aspect-square bg-white rounded-full z-20" />
                                </div>

                                {/* Only render the dashed line if not the last entry */}
                                {index !== data.length - 1 && (
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-[calc(100%+20px)] border-l border-dashed border-black/20 z-0" />
                                )}
                            </div>

                            {/* Label and user */}
                            <div className="flex-1 border border-[#6581FF] border-dashed rounded-md p-1">
                                <p className="w-[90%]">{entry.label}</p>
                                <p className="mt-1">{entry.user}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}