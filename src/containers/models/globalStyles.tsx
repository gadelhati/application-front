import { createStitches } from "@stitches/react";

export const stitches = createStitches({
    media: {
        bp1: "(min-width: 320px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1200px)",
    },
    theme: {
        colors: {
            letterColor: '#A1E0B0',
            letterBackgroudColor: '#06532F',
            letterColorHover: 'forestGreen',
            letterBackgroudColorHover: '#559741',
            subLetterColor: '#3A587B',
            subLetterBackgroudColor: '#ACC8E5',
            subLetterColorHover: '#124010',
            subLetterBackgroudColorHover: '#CBE8CC',
            squareTop: '#084735',
            squareBottom: '#1F4439',

            primary: '#57A0E5',
            secondary: '#9C9C9C',
            success: '#46A749',
            info: '#4C85C6',
            warning: '#CEBA33',
            danger: '#B63E3E',
            light: '#CBD4E0',
            dark: '#444444',

            one: '#2F3E46',
            two: '#354F52',
            three: '#52796F',
            four: '#84A98C',
            five: '#CAD2C5',
            
            one1: '#2F3E46',
            two1: '#354F52',
            three1: '#52796F',
            four1: '#84A98C',
            five1: '#CAD2C5',
            six1: '#FFFFFF',

            back: 'LightGray',

            head: '#E2E3E5',
            title: '#36304A',
            odd: '#F2F2F2',
            even: '#FFFFFF',
            selected: '#ECECEC',
            line: '#CED4DA',
            button: '#6C757D',
            blueButton: '#0D6EFD',
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

// export const darkTheme = stitches.createTheme({
//     colors: {
//         bg: "$darkJungleGreen",
//         fg: "$fluorescentBlue",
//     }
// });

// export const funkyTheme = stitches.createTheme({
//     colors: {
//         bg: "$darkKhaki",
//         fg: "$darkSlateBlue",
//     }
// });