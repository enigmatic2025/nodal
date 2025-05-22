import { UserAvatar } from "../global/user-avatar"

interface Note {
    id: number;
    text: string;
    user: string;
    timestamp: string;
    fromMe?: boolean;
    reactions: { name: string; count: number }[]
}

export function Conversations() {

    return (
        <div className="pt-5 pb-5">
            <h2 className="text-md font-semibold mb-3">Conversations</h2>
            <div className="flex flex-col w-100 gap-y-2">
                <div className="flex h-fit gap-x-2 border rounded-md  p-1">
                    <UserAvatar user={{ name: "John Smith", image: undefined }} />
                    <p className="font-semibold text-sm">John Smith</p>
                    <p className="font-semibold text-sm">John Smith</p>

                </div>
                <div className="flex h-fit border rounded-md p-1">
                    <UserAvatar user={{ name: "John Smith", image: undefined }} />
                </div>
                <div className="flex h-fit border rounded-md p-1">
                    <UserAvatar user={{ name: "John Smith", image: undefined }} />
                </div>
                <div className="flex h-fit border rounded-md p-1">
                    <UserAvatar user={{ name: "John Smith", image: undefined }} />
                </div>
            </div>
        </div>
    )
}