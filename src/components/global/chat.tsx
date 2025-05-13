"use client"

import { useState, useRef, KeyboardEvent } from "react"
import { UserAvatar } from "./user-avatar";

interface Note {
    id: number;
    text: string;
    user: string;
    timestamp: string;
    fromMe?: boolean;
}

export function Chat() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [draft, setDraft] = useState("");
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, text: "Hey team, remember the deploy is at 2 PM.", user: "Jeff Nemmers", timestamp: "10:00 AM", fromMe: false },
        { id: 2, text: "Got it – prepping the release branch now.", user: "Anthony Flores", timestamp: "10:02 AM", fromMe: true },
        { id: 3, text: "FYI, the new feature flag is toggled on staging.", user: "Priya Patel", timestamp: "10:05 AM", fromMe: false },
        { id: 4, text: "Nice, let me run the smoke tests after lunch.", user: "Anthony Flores", timestamp: "10:07 AM", fromMe: true },
        { id: 5, text: "Tests passed on staging, no regressions found.", user: "Anthony Flores", timestamp: "12:30 PM", fromMe: true },
        { id: 6, text: "Great! Let’s schedule the prod deploy for 3 PM.", user: "Jeff Nemmers", timestamp: "12:32 PM", fromMe: false },
        { id: 7, text: "Sounds good. I’ll handle the rollout steps.", user: "Priya Patel", timestamp: "12:35 PM", fromMe: false },
        { id: 8, text: "Heads up: database migration script is ready.", user: "Anthony Flores", timestamp: "2:15 PM", fromMe: true },
        { id: 9, text: "👍 I’ll monitor for errors and confirm when done.", user: "Jeff Nemmers", timestamp: "2:16 PM", fromMe: false },
    ]);
    const suggestions = [
        "Need clarification on this step.",
        "Waiting on response from others.",
        "Will follow up tomorrow. 🙏",
        "My part is done! 🥳",
    ];

    const sendNote = () => {
        if (!draft.trim()) return;
        setNotes((prev) => [
            ...prev,
            { id: Date.now(), text: draft.trim(), user: "Anthony Flores", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), fromMe: true },
        ]);
        setDraft("");
    };

    const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendNote();
        }
    };

    return (
        <div className="flex flex-col h-full w-full">
            {/* Input bar */}
            <div className="flex flex-col gap-y-1 items-start mb-10">
                <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={onKey}
                    rows={4}
                    className="flex rounded-md border-1 w-full border-[#6581FF] p-2 resize-none focus:outline-none mb-2"
                    placeholder="Add a note..."
                />
                <div className="flex w-full gap-2">
                    {suggestions.map((text, idx) => (
                        <div
                            key={idx}
                            onClick={() => setDraft(text)}
                            className="flex justify-center items-center text-center bg-[#6581FF]/5 border-1 border-[#6581FF] text-[#6581FF] rounded-full w-full text-xs p-1 cursor-pointer"
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-5 bg-white">
                {notes
                    .sort((a, b) => b.id - a.id)
                    .map((note) => (
                        <div key={note.id} className="flex flex-row gap-x-2 w-full">
                            <UserAvatar user={{ name: note.user, image: undefined }} />
                            <div
                                key={note.id}
                                className={"w-full rounded-md break-words text-[0.8rem]"}
                            >
                                <span className={"font-bold block mb-1 text-left"}>
                                    {note.user}
                                </span>
                                <p className="text-[0.8rem] mb-1">{note.text}</p>
                                <span className={"text-gray-400 mb-1 block text-right"}>
                                    {note.timestamp}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}