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
    color: '$sophia',
    '&:hover': {
        color: '$ava',
        backgroundColor: '$charlotte',
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
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
    listStyle: 'none',
    color: '$charllotte',
    '&:hover': {
        color: '$charlotte',
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
});
export const UlMenu = styled('ul', {
    display: 'block',
    zIndex: '1000',
    minWidth: '10rem',
    padding: '.5rem 0',
    fontSize: '1rem',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '.25rem',
    cursor: 'pointer',
});
export const Collapsible = styled('button', {
    color: '$sophia',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    fontSize: '1rem',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    padding: '.25rem 1.3rem',
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
        color: '$ava',
        fontWeight: '600',
        backgroundColor: '$charlotte',
    },
    '&[aria-expanded="true"]:before': {
        transform: 'rotate(90deg)',
    },
    '&:hover': {
        color: '$ava',
        backgroundColor: '$charlotte',
    },
    '&:only-child': {
        padding: '50px',
    }
});
export const Nav = styled('nav', {
    width: '256px',
    // backgroundColor: 'rgb(58, 72, 100)',
    backgroundColor: '$olivia',
    // backgroundImage: 'linear-gradient(to bottom, #386769, #2D3142)',
    // backgroundImage: 'url(nova-logo-mb.png)',
    backgroundPosition: '50%',
    // opacity: '80%',
    display: 'flex !important',
    flexDirection: 'column !important',
    flexShrink: '0 !important',
    padding: '1rem !important',
    color: '#fff !important',
    '> a': {
        display: 'flex',
        '&:hover': {
            color: '$sophia',
            backgroundColor: 'transparent',
        },
    },
    margin: '.5em .0em 0em .5em',
    borderRadius: '5px 5px 0px 0px',
});