/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/index.html",
      "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                // ### Primary
                clr_orange: {
                    bright: "hsl(31, 77%, 52%)",
                },
                clr_cyan: {
                    dark: "hsl(184, 100%, 22%)",
                    very_dark: "hsl(179, 100%, 13%)",
                },
                // ### Neutral
                clr_white: {
                    transparent: "hsla(0, 0%, 100%, 0.75)", // paragraphs
                },
                clr_gray: {
                    very_light: "hsl(0, 0%, 95%)", // background, headings, buttons
                },
            },

            fontFamily: {
                display: '"Lexend Deca", sans-serif',
                accent: '"Big Shoulders Display", sans-serif',
            },

            spacing: {
                '62': "15.5",
            },
        },
    },
    plugins: [],
};

