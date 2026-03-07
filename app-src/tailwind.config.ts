import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    DEFAULT: "#2C7A7B",
                    50: "#E6F5F5",
                    100: "#CCEBEB",
                    200: "#99D7D7",
                    300: "#66C3C3",
                    400: "#33AFAF",
                    500: "#2C7A7B",
                    600: "#256768",
                    700: "#1E5455",
                    800: "#174142",
                    900: "#102E2F",
                },
                mint: {
                    DEFAULT: "#48BB78",
                    50: "#EBF8F0",
                    100: "#D2F0E1",
                    200: "#A5E1C3",
                    300: "#78D2A5",
                    400: "#4BC387",
                    500: "#48BB78",
                    600: "#3A9860",
                    700: "#2C7548",
                    800: "#1E5230",
                    900: "#102F18",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease-out forwards",
                "fade-in": "fadeIn 0.5s ease-out forwards",
                slide: "slide 30s linear infinite",
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
