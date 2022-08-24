import { styled } from '@stitches/react';

export const TabList = styled('button', {
    marginRight: '1rem !important',
    flexDirection: 'column !important',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    flexShrink: '0',
    pointerEvents: 'auto',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    '*, ::after, ::before': {
        boxSizing: 'border-box',
    },
});

export const Tab = styled('button', {
    background: '0 0',
    border: '0',
    borderRadius: '.25rem',
    '[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled)': {
        cursor: 'pointer',
    },
    display: 'block',
    padding: '.5rem 1rem',
    color: '#0d6efd',
    textDecoration: 'none',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    '[type="button"], [type="reset"], [type="submit"], button': {
        webkitAppearance: 'button',
    },
    textTransform: 'none',
    margin: '0',
    fontFamily: 'inherit',
    fontSssize: 'inherit',
    lineHeight: 'inherit',
    flexShrink: '0',
    listStyle: 'none',
    pointerEvents: 'auto',
    fontWeight: '400',
    '*, ::after, ::before': {
        boxSizing: 'border-box',
    },
});