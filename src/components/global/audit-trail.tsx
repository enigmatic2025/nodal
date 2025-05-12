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
        <div className="h-full">
            <div className="grid grid-cols-1 gap-y-5">
                {data.map((entry) => (
                    <div key={entry.id} className="flex text-[0.8rem] items-center gap-x-5 p-1">
                        <div className="flex-1 border-r-1 border-black/20 border-dashed">
                            <p className="font-semibold w-[90%]">{entry.label}</p>
                            <p className="text-[#6581FF] mt-1">
                                {entry.user}
                            </p>
                        </div>
                        <p className="text-gray-400">
                            {entry.timestamp}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}