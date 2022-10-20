import { stitches } from '../../models/globalStyles'

const { styled } = stitches;

export const Nav = styled('nav', {
    width: '256px',
    // backgroundColor: 'rgb(58, 72, 100)',
    backgroundColor: '$squareColor',
    // backgroundImage: 'linear-gradient(to bottom, #386769, #2D3142)',
    // backgroundImage: 'url(nova-logo-mb.png)',
    backgroundPosition: '50%',
    padding: '1.5rem',
    color: '$letterColor',
    '> a': {
        display: 'flex',
        '&:hover': {
            color: 'letterColorHover',
            backgroundColor: 'transparent',
        },
    },
    margin: '.5em .0em 0em .5em',
    borderRadius: '5px 5px 0px 0px',
});
export const Collapsible = styled('button', {
    color: '$sophia',
    outline: '0',
    cursor: 'pointer',
    alignItems: 'center',
    display: 'inline-flex',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    borderRadius: '.25rem',
    '&:hover': {
        color: '$letterColorHover',
        backgroundColor: '$letterBackgroudColorHover',
        boxShadow: '0 0 0 .25rem rgba(229,179,189,.25)',
    },
});
export const Ul = styled('ul', {
    display: 'flex',
    paddingLeft: '0',
    listStyle: 'none',
    flexDirection: 'column',
    'div > ul > li': {
        // borderRadius: '.25rem',
        backgroundColor: '$letterBackgroudColor',
        paddingLeft: '10px',
    },
    'li > a, sdiv > ul > li > a': {
        borderRadius: '.25rem',
        display: 'block',
        padding: '.5rem .75rem',
        textDecoration: 'none',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
        color: '$letterColor',
        '&:hover': {
            color: '$letterColorHover',
            backgroundColor: '$letterBackgroudColorHover',
            boxShadow: '0 0 0 .25rem rgba(229,179,189,.25)',
        },
        img: {
            width: '35px',
            height: '38px',
            marginRight: '.5rem',
        },
        span: {
            fontSize: '1.5rem',
        }
    },
});
export const ATitle = styled('a', {
    display: 'block',
    padding: '.5rem 1rem',
    textDecoration: 'none',
    listStyle: 'none',
    color: '$letterColor',
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
export const UlMenu = styled('ul', {
    display: 'block',
    zIndex: '1000',
    minWidth: '10rem',
    padding: '.5rem 0',
    fontSize: '1rem',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '$letterColorBackground',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '.25rem',
    cursor: 'pointer',
});