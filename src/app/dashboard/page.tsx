import { RecentActionFlows } from "@/components/dashboard/recent-action-flows"
import { QuickAccess } from "@/components/dashboard/quick-acess"
import HeaderBar from "@/components/global/navigation/header-bar"

export default function Dashboard() {
    return (
        <div className="flex flex-col h-[99vh] w-full text-black bg-white rounded-md shadow-sm p-5 overflow-y-auto">
            <HeaderBar label={"Dashboard"} />
            <div className="flex flex-row gap-x-20">
            <QuickAccess />
            </div>
            <h2 className="text-md font-semibold mb-3">Recent Action Flows</h2>
            <RecentActionFlows />
        </div>
    )
}