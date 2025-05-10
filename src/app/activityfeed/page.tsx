
export default function ActivityFeed() {
    return (
        <div className="flex flex-col h-[98vh] w-full text-black bg-white rounded-md shadow-sm p-5 overflow-y-auto">
            <div className="flex flex-row gap-x-5 items-center mb-5">
                <h1 className="text-2xl w-[13ch]">Activity Feed</h1>
                <textarea
                    placeholder="Search"
                    rows={1}
                    className="flex min-w-[50%] resize-none rounded-md border-2 border-[#6581FF] p-2 focus:outline-none ml-auto">
                </textarea>
                <div className="flex flex-row gap-x-5 ml-auto pr-5">
                    <div className="group flex items-center gap-x-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#6581FF] lucide lucide-message-circle-question-icon lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                        <div className="text-sm text-gray-500 group-hover:text-[#6581FF] cursor-pointer">
                            Support
                        </div>
                    </div>
                    <div className="group flex items-center gap-x-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#6581FF] lucide lucide-message-square-text-icon lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
                        <div className="text-sm text-gray-500 group-hover:text-[#6581FF] cursor-pointer">
                            Feedback
                        </div>
                    </div>
                    <div className="relative group flex items-center gap-x-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#6581FF] lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                        <div className={`
                    absolute
                    ml-3
                    mb-4
                        flex w-2 h-2 justify-center items-center 
                        aspect-square 
                        rounded-full 
                        bg-red-500
                        `}
                        />
                        <div className="text-sm text-gray-500 group-hover:text-[#6581FF] cursor-pointer">
                            Notifications
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}