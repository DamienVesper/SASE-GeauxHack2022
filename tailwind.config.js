module.exports = {
    mode: `jit`,
    content: [
        `./src/**/*.{js,ts,jsx,tsx}`
    ],
    prefix: `tw-`,
    theme: {
        extend: {
            colors: {
                primary: "#57acdc",
                secondary: "#1f2022",
                dimWhite: "rgba(255, 255, 255, 0.7)",
              },
              fontFamily: {
                poppins: ["Poppins", "sans-serif"],
              },
        }
    },
    plugins: []
};
