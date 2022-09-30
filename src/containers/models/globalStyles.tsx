//https://fsaycon.dev/blog/react-plus-stitches-equals-awesome
//https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/

import { createStitches } from "@stitches/react";

export const stitches = createStitches({
    media: {
        bp1: "(min-width: 320px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1200px)",
    },
    theme: {
        colors: {
            // mediumSeaGreen: 'MediumSeaGreen',
            blueGreen: '#0d98ba',

            lightGray: "#CFCFCF",
            davysGray: "#4D5057",
            hookersGreen: "#4E6E5D",
            limegreen: "#4DA167",
            darkPastelGreen: "#3BC14A",
            spanishViridian: "#007f5c",
            springGreen: "#00CD66",

            // generated from coolors.co
            aliceBlue: "#F4FAFF",
            davyGrey: "#535657",

            cadetBlue: "#4F646F",
            platinum: "#DEE7E7",

            darkKhaki: "#B5BA72",
            darkSlateBlue: "#4F3500",

            preto: "#000",

            // elements
            bg: "$aliceBlue",
            fg: "$davyGrey",
            ig: "$menuItem"
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