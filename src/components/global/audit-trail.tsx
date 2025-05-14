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
        <div className="flex flex-col h-full text-[0.8rem]">
            <div className="h-full">
                <div className="grid grid-cols-1 gap-y-5 p-5">
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
                            <div className="flex-1 rounded-md">
                                <p className="w-[90%]">{entry.label}</p>
                                <p className="text-[#6581FF] font-semibold mt-2">User: <span className="text-black font-semibold">{entry.user}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}