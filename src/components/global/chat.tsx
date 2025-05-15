"use client"

import { useState, useRef, KeyboardEvent } from "react"
import { UserAvatar } from "./user-avatar";

interface Note {
    id: number;
    text: string;
    user: string;
    timestamp: string;
    fromMe?: boolean;
    reactions: { name: string; count: number }[]
}

export function Chat() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [draft, setDraft] = useState("");
    const [emojiOpen, setEmojiOpen] = useState<number | null>(null);
    const [noteSort, setNoteSort] = useState<string>("Descending");
    const [notes, setNotes] = useState<Note[]>([
        {
            id: 1,
            text: "Hey team, remember the deploy is at 2 PM.",
            user: "Jeff Nemmers",
            timestamp: "10:00 AM",
            fromMe: false,
            reactions: [{ name: "like", count: 1 }]
        },
        {
            id: 2,
            text: "Got it – prepping the release branch now.",
            user: "Anthony Flores",
            timestamp: "10:02 AM",
            fromMe: true,
            reactions: [{ name: "love", count: 2 }, { name: "celebrate", count: 1 }]
        },
        {
            id: 3,
            text: "FYI, the new feature flag is toggled on staging.",
            user: "Priya Patel",
            timestamp: "10:05 AM",
            fromMe: false,
            reactions: []
        },
        {
            id: 4,
            text: "Nice, let me run the smoke tests after lunch.",
            user: "Anthony Flores",
            timestamp: "10:07 AM",
            fromMe: true,
            reactions: [{ name: "funny", count: 1 }]
        },
        {
            id: 5,
            text: "Tests passed on staging, no regressions found.",
            user: "Anthony Flores",
            timestamp: "12:30 PM",
            fromMe: true,
            reactions: []
        },
        {
            id: 6,
            text: "Great! Let’s schedule the prod deploy for 3 PM.",
            user: "Jeff Nemmers",
            timestamp: "12:32 PM",
            fromMe: false,
            reactions: []
        },
        {
            id: 7,
            text: "Sounds good. I’ll handle the rollout steps.",
            user: "Priya Patel",
            timestamp: "12:35 PM",
            fromMe: false,
            reactions: []
        },
        {
            id: 8,
            text: "Heads up: database migration script is ready.",
            user: "Anthony Flores",
            timestamp: "2:15 PM",
            fromMe: true,
            reactions: []
        },
        {
            id: 9,
            text: "👍 I’ll monitor for errors and confirm when done.",
            user: "Jeff Nemmers",
            timestamp: "2:16 PM",
            fromMe: false,
            reactions: [{ name: "like", count: 2 }, { name: "thankful", count: 1 }]
        }
    ]);
    const emojis = [
        { name: "like", icon: "👍" },
        { name: "love", icon: "❤️" },
        { name: "funny", icon: "😂" },
        { name: "surprised", icon: "😮" },
        { name: "thankful", icon: "🙏" },
        { name: "celebrate", icon: "🎉" },
    ];

    const sendNote = () => {
        if (!draft.trim()) return;
        setNotes((prev) => [
            ...prev,
            { id: Date.now(), text: draft.trim(), user: "Anthony Flores", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), fromMe: true, reactions: [] },
        ]);
        setDraft("");
    };

    const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendNote();
        }
    };

    const handleReaction = (noteId: number, emojiName: string) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => {
                if (note.id !== noteId) return note;

                const existing = note.reactions.find((r) => r.name === emojiName);

                let updatedReactions;

                if (existing) {
                    updatedReactions = note.reactions.map((r) =>
                        r.name === emojiName ? { ...r, count: r.count + 1 } : r
                    );
                } else {
                    updatedReactions = [...note.reactions, { name: emojiName, count: 1 }];
                }

                setEmojiOpen(null);

                return { ...note, reactions: updatedReactions };
            })
        );
    };

    return (
        <div className="flex flex-col h-full w-full rounded-md text-[0.8rem] p-1">
            {/* Input bar */}
            <div className="flex flex-col gap-y-1 items-start mb-2">
                <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={onKey}
                    rows={4}
                    className="flex rounded-md border text-sm w-full border-[#6581FF] p-2 resize-none focus:outline-none"
                    placeholder="Add a note..."
                />
            </div>
            {/* Notes count */}
            <div className="flex items-center gap-x-1 mb-2">
                <p className="font-semibold">Notes</p>
                <div className="flex justify-center items-center h-5 aspect-square text-white rounded-full bg-[#6581FF] p-2">{notes.length}</div>
                
                {/* Notes Sort */}
                <div onClick={() => { setNoteSort(noteSort === "Descending" ? "Ascending" : "Descending") }} className="flex items-center gap-x-1 hover:text-[#6581FF] ml-auto cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-up-icon lucide-arrow-down-up"><path d="m3 16 4 4 4-4" /><path d="M7 20V4" /><path d="m21 8-4-4-4 4" /><path d="M17 4v16" /></svg>
                    <span className="text-gray-500">{noteSort}</span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-black/10 mb-2"/>


            {/* Notes */}
            <div ref={scrollRef} className="flex-1 space-y-5 rounded-md p-2 overflow-y-auto">
                {notes
                    .sort((a, b) => noteSort === "Descending" ? b.id - a.id : a.id - b.id)
                    .map((note) => (
                        <div key={note.id} className="flex flex-row gap-x-2 w-full">
                            <UserAvatar user={{ name: note.user, image: undefined }} />
                            <div
                                key={note.id}
                                className={"w-full rounded-md break-words"}
                            >
                                <span className={"font-bold block mb-1 text-left"}>
                                    {note.user}
                                </span>
                                <p className="mb-1">{note.text}</p>
                                <span className={"text-gray-400 block text-right"}>
                                    {note.timestamp}
                                </span>

                                {/*Emojis*/}
                                <div
                                    className="flex gap-5 flex-row items-center cursor-pointer"
                                >
                                    <svg
                                        onClick={() => setEmojiOpen(emojiOpen === note.id ? null : note.id)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-smile-plus-icon"
                                    >
                                        <path d="M22 11v1a10 10 0 1 1-9-10" />
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                        <line x1="9" x2="9.01" y1="9" y2="9" />
                                        <line x1="15" x2="15.01" y1="9" y2="9" />
                                        <path d="M16 5h6" />
                                        <path d="M19 2v6" />
                                    </svg>

                                    <div
                                        className={`
                                            flex gap-5 transition-all duration-100
                                            ${emojiOpen === note.id ? "opacity-100" : "opacity-0"}
                                            `}
                                    >
                                        {emojis.map((emoji) => (
                                            <div
                                                key={emoji.name}
                                                className="cursor-pointer text-lg"
                                                onClick={() => handleReaction(note.id, emoji.name)}
                                            >
                                                {emoji.icon}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className={`
                                            flex gap-2 ml-auto
                                            ${note.reactions.length > 0 ? "block" : "invisible"}
                                            `}
                                    >
                                        {note.reactions.map((reaction) => {
                                            const emoji = emojis.find((e) => e.name === reaction.name);

                                            return (
                                                <div
                                                    key={reaction.name}
                                                    className="cursor-pointer text-xl"
                                                >
                                                    {emoji?.icon}
                                                    <span className="text-gray-400 text-sm ml-1">{reaction.count}</span>
                                                </div>
                                            );

                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}