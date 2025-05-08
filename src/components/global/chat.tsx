"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { Button } from "./button";

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

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "auto" });
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [notes]);

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
        <div className="flex flex-col h-full border-[0.5px] border-black/20 rounded-md overflow-hidden">
            
            {/* Messages */}
            <div ref={scrollRef} className="flex-1 px-2 py-2 overflow-y-auto space-y-2 bg-white">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className={`max-w-[75%] p-2 rounded-2xl break-words ${note.fromMe
                            ? "ml-auto bg-[#6581FF] text-white"
                            : "mr-auto bg-black/5 text-black"
                            }`}
                    >
                        <span className={`${note.fromMe
                            ? "hidden"
                            : "text-[#6581FF]"
                            }
                            block
                            text-xs
                            mb-1
                            text-left
                            `}
                        >{note.user}</span>
                        <p className="text-sm">{note.text}</p>
                        <span className={`${note.fromMe
                            ? "text-white"
                            : "text-gray-400"
                            }
                            block
                            text-xs
                            mt-1
                            text-right
                            `}
                        >{note.timestamp}</span>
                    </div>
                ))}
            </div>

            {/* Input bar */}
            <div className="px-4 py-2 bg-white border-[0.5px] border-black/20 flex items-center space-x-2">
                <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={onKey}
                    rows={1}
                    className="flex-1 resize-none rounded-lg border border-black/20 p-2 text-sm focus:outline-none"
                    placeholder="Add a note..."
                />
                <Button onClick={sendNote}>
                    Send
                </Button>
            </div>
        </div>
    )
}