/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                cinzel: ['var(--font-cinzel)']
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            maxWidth: {
                '8xl': '1440px'
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
            },
            colors: {
                customGreen: '#0e5447'
            },
            backgroundColor: {
                customBackground: '#b8e0d5'
            },
            keyframes: theme => ({
                fadeIn: {
                    'from': { opacity: '0'},
                    'to' : { opacity: '1'}
                },
            })
        },
    },
    plugins: [
        
    ],
};
