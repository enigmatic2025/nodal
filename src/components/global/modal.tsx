"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, ReactNode } from "react";

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
                        className="fixed inset-0 z-50 bg-black/5 backdrop-blur-sm flex items-center justify-center p-5"
                    >
                        <div className="bg-white rounded-md h-auto w-auto p-5 relative">
                            <div
                                className="absolute top-2 right-2 text-white cursor-pointer"
                                onClick={onClose}
                            >   
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </div>
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
