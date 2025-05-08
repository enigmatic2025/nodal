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
        <div className="h-full overflow-auto">
            <div className="grid grid-cols-1 gap-y-10">
                {data.map((entry) => (
                    <div key={entry.id} className="flex items-center gap-x-5">
                        <div className="flex-1 border-r-1 border-black/20 border-dashed">
                            <p className="font-semibold w-[90%]">{entry.label}</p>
                            <p className="text-xs text-[#6581FF] mt-1">
                                {entry.user}
                            </p>
                        </div>
                        <p className="text-xs text-gray-500">
                            {entry.timestamp}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}