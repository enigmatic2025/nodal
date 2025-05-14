import { ActionsTable } from "@/components/dashboard/actions-table"
import HeaderBar from "@/components/global/navigation/header-bar"

export default function Dashboard() {
    return (
        <div className="flex flex-col h-[99vh] w-full text-black bg-white rounded-md shadow-sm p-5 overflow-y-auto">
            <HeaderBar label={"Dashboard"} />
            <div className="pt-5 pb-5">
                <h2 className="text-md font-semibold mb-3">Quick Access</h2>
                <div className="w-100 grid grid-cols-2 gap-5">
                    <div className="flex flex-col hover:shadow-sm h-50 w-50 border-[0.5px] border-black/20 rounded-md cursor-pointer p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6581FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-plus-icon lucide-package-plus"><path d="M16 16h6" /><path d="M19 13v6" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></svg>
                        <p className="text-[1.1rem] font-semibold mt-auto">Create Action</p>
                        <p className="h-[3lh] text-[0.8rem] font-normal text-gray-500">Build a custom action for an individual, team, or department.</p>
                    </div>
                    <div className="flex flex-col hover:shadow-sm h-50 w-50 border-[0.5px] border-black/20 rounded-md cursor-pointer p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6581FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        <p className="text-[1.1rem] font-semibold mt-auto">Export Data</p>
                        <p className="h-[3lh] text-[0.8rem] font-normal text-gray-500">Generate a file containing your data, ready for download.</p>
                    </div>
                    <div className="flex flex-col hover:shadow-sm h-50 w-50 border-[0.5px] border-black/20 rounded-md cursor-pointer p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6581FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks-icon lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
                        <p className="text-[1.1rem] font-semibold mt-auto">Action Pool</p>
                        <p className="h-[3lh] text-[0.8rem] font-normal text-gray-500">Openly unassigned actions. Help your colleagues or seek help.</p>
                    </div>
                    <div className="flex flex-col hover:shadow-sm h-50 w-50 border-[0.5px] border-black/20 rounded-md cursor-pointer p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6581FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-binoculars-icon lucide-binoculars"><path d="M10 10h4" /><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" /><path d="M 22 16 L 2 16" /><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" /><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" /></svg>
                        <p className="text-[1.1rem] font-semibold mt-auto">Track Process</p>
                        <p className="h-[3lh] text-[0.8rem] font-normal text-gray-500">View a specific process audit trail, initiation to completion.</p>
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-5">

            </div>
            <h2 className="text-md font-semibold mb-3">Recent Actions</h2>
            <ActionsTable />
        </div>
    )
}