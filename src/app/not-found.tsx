"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <h1 className="text-9xl font-black text-blue-500/20">404</h1>
                <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
                <p className="text-slate-400 max-w-md mx-auto">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
