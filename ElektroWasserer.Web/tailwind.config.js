/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./Views/**/*.{cshtml,js}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    50: "#fbffe7",
                    100: "#f4ffc1",
                    200: "#eeff86",
                    300: "#ecff41",
                    400: "#f2ff0d",
                    500: "#ffff00",
                    600: "#d1bf00",
                    700: "#a68b02",
                    800: "#896c0a",
                    900: "#74580f",
                    950: "#443004"
                },
                'darkgray': {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#454545",
                    900: "#3d3d3d",
                    950: "#1a1a1a"
                }
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                'bounce-slow': 'bounce 5000ms infinite',
                fade: 'fadeIn .5s ease-in-out',
            }
        }
    },
    plugins: [],
}