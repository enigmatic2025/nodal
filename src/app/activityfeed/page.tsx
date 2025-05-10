import HeaderBar from "@/components/global/navigation/header-bar"

export default function ActivityFeed() {
    return (
        <div className="flex flex-col h-[98vh] w-full text-black bg-white rounded-md shadow-sm p-5 overflow-y-auto">
            <HeaderBar label={"Activity Feed"} />
        </div>
    )
}