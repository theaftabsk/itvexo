"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
            >
                <h1 className="text-4xl font-bold text-white">Something went wrong!</h1>
                <p className="text-slate-400 max-w-md mx-auto font-mono text-sm bg-black/50 p-4 rounded-xl border border-white/10">
                    {error.message || "An unexpected error occurred."}
                </p>
                <button
                    onClick={() => reset()}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                    Try again
                </button>
            </motion.div>
        </div>
    );
}
