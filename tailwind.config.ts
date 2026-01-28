import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
                outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
            },
            colors: {
                indigo: {
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                },
                cyan: {
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                },
                purple: {
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                },
            },
            animation: {
                'gradient-x': 'gradient-x 20s ease infinite',
                'gradient-xy': 'gradient-xy 25s ease infinite',
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
                'mesh-float': 'mesh-float 20s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'gradient-xy': {
                    '0%, 100%': { 'background-position': '0% 0%' },
                    '25%': { 'background-position': '100% 0%' },
                    '50%': { 'background-position': '100% 100%' },
                    '75%': { 'background-position': '0% 100%' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))' },
                    '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.5))' },
                },
                'mesh-float': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(2%, -2%) scale(1.05)' },
                    '50%': { transform: 'translate(-2%, 2%) scale(1)' },
                    '75%': { transform: 'translate(2%, 2%) scale(1.05)' },
                },
                'shimmer': {
                    '0%': { 'background-position': '-200% 0' },
                    '100%': { 'background-position': '200% 0' },
                },
            },
            backgroundSize: {
                '200': '200% 200%',
                '300': '300% 300%',
            },
            backdropBlur: {
                xs: '2px',
                '3xl': '64px',
                '4xl': '96px',
            },
        },
    },
    plugins: [],
};
export default config;
