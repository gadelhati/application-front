import { stitches } from '../../models/globalStyles'

const { styled } = stitches;

export const A = styled('a', {
    background: '0 0',
    border: '0',
    borderRadius: '.25rem',
    display: 'block',
    padding: '.5rem 1rem',
    textDecoration: 'none',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    listStyle: 'none',
    color: 'lightgray',
    '&:hover': {
        color: '#2F4F4F',
        backgroundColor: 'white',
    },
    img: {
        width: '35px',
        height: '38px',
        marginRight: '.5rem',
    },
    span: {
        fontSize: '1.5rem',
    }
});
export const AHeader = styled('a', {
    background: '0 0',
    border: '0',
    borderRadius: '.25rem',
    display: 'flex',
    padding: '.2rem .6rem',
    textDecoration: 'none',
    // transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    listStyle: 'none',
    color: 'black',
    '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
    },
});
export const Ul = styled('ul', {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
    listStyle: 'none',
    flexDirection: 'column !important',
    marginBottom: 'auto !important',
    'div > ul > li': {
        paddingLeft: '15px',
        fontSize: '90%',
    },
    'li': {
        fontSize: '100%',
    }
});
export const UlMenu = styled('ul', {
    display: 'block',
    zIndex: '1000',
    minWidth: '10rem',
    padding: '.5rem 0',
    fontSize: '1rem',
    color: '#212529',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '.25rem',
    cursor: 'pointer',
});
export const Collapsible = styled('button', {
    color: 'lightgray',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    fontSize: '1rem',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    padding: '.25rem .5rem',
    fontWeight: '600',
    backgroundColor: 'transparent',
    display: 'inline-flex !important',
    alignItems: 'center !important',
    borderRadius: '.25rem !important',
    border: '0 !important',
    '&::before': {
        width: '1.25em',
        lineHeight: '0',
        content: `'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e")'`,
        transition: 'transform .35s ease',
        transformOrigin: '.5em 50%',
    },
    '&[aria-expanded="true"]': {
        color: 'black',
        backgroundColor: 'lightwhite',
    },
    '&[aria-expanded="true"]:before': {
        transform: 'rotate(90deg)',
    },
    '&:hover': {
        color: 'black',
        backgroundColor: 'white',
    },
    '&:only-child': {
        padding: '50px',
    }
});
export const Nav = styled('nav', {
    width: '256px',
    backgroundColor: 'rgb(58, 72, 100)',
    backgroundImage: 'linear-gradient(to bottom left, rgb(58, 72, 100), rgb(86, 97, 93))',
    /* background-image: url(nova-logo-mb.png); */
    backgroundPosition: '50%',
    /* opacity: 20%; */
    display: 'flex !important',
    flexDirection: 'column !important',
    flexShrink: '0 !important',
    padding: '1rem !important',
    color: '#fff !important',
    '> a': {
        display: 'flex',
        '&:hover': {
            color: 'lightgray',
            backgroundColor: 'transparent',
        },
    }
});