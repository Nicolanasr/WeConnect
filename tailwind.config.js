module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "primary": "#f9b90f",
                "secondary": "#36345c",
                "primary-grey": "#a59b92",
                "background-grey": "#FBFBFB",
            },
        },
        container: {
            center: true,
            screens: {
                sm: '600px',
                md: '728px',
                lg: '960px',
            },
            padding: '1rem',
        },
    },
    plugins: [],
}