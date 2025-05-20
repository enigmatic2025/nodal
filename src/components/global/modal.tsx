"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, ReactNode } from "react";
import { Button } from "./button";

export const Modal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}) => {
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`; // prevents layout shift
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/5 backdrop-blur-sm flex items-center justify-center p-5"
                    >
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className="bg-white rounded-md h-auto w-auto p-3 relative"
                        >
                            {children}
                            <div
                                className="flex justify-center items-center mt-5 cursor-pointer"
                                onClick={onClose}
                            >
                                <Button>Close</Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
