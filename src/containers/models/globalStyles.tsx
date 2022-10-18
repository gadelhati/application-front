import { createStitches } from "@stitches/react";

export const stitches = createStitches({
    media: {
        bp1: "(min-width: 320px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1200px)",
    },
    theme: {
        colors: {
            richBalckFOGRA29: '#0D1B2A',
            oxfordBlue: '#1B263B',
            bdazzledBlue: '#415A77',
            shadowBlue: '#778DA9',
            platinum: '#E0E1DD',

            // elements
            olivia: '$richBalckFOGRA29',
            emma: '$oxfordBlue',
            ava: '$bdazzledBlue',
            charlotte: '$shadowBlue',
            sophia: '$platinum',
        },
        space: {
            xxs: "0.422rem",
            xs: "0.563rem",
            sm: "0.75rem",
            rg: "1rem",
            md: "1.33rem",
            lg: "1.77rem",
            xl: "2.369rem",
            xxl: "3.157rem",
        },
        fontSizes: {
            xxs: "0.422rem",
            xs: "0.563rem",
            sm: "0.75rem",
            rg: "1rem",
            md: "1.33rem",
            lg: "1.77rem",
            xl: "2.369rem",
            xxl: "3.157rem",
        },
    },
})

const injectGlobalStyles = stitches.globalCss({
    "*": { boxSizing: "border-box", fontFamily: "inherit", flexShrink: 0 },
    "*:after": { boxSizing: "border-box", fontFamily: "inherit" },
    "*:before": { boxSizing: "border-box", fontFamily: "inherit" },
    body: { margin: 0, padding: 0, minHeight: '100vh' },
    h1: { margin: 0 },
    html: { height: '-webkit-fill-available' },
    main: {
        display: 'flex',
        flexWrap: ',nowrap',
        height: '100vh',
        maxHeight: '100vh',
        overflowX: 'auto',
        overflowY: 'hidden',
    }
})

injectGlobalStyles()

export const darkTheme = stitches.createTheme({
    colors: {
        bg: "$darkJungleGreen",
        fg: "$fluorescentBlue",
    }
});

export const funkyTheme = stitches.createTheme({
    colors: {
        bg: "$darkKhaki",
        fg: "$darkSlateBlue",
    }
});