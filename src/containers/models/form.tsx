import { styled } from '@stitches/react';

export const Button = styled('button', {
    //FLOAT-END
    float: 'right !important',
    //BTN-SM
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    borderRadius: '.2rem',
    //BTN-SUCCESS
    color: '#fff',
    backgroundColor: '#198754',
    borderColor: '#198754',
    //BTN
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    border: '1px solid transparent',
    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out';
        // color: '.15s ease-in-out',
        // backgroundColor: '.15s ease-in-out',
        // borderColor: '.15s ease-in-out',
        // boxShadow: '.15s ease-in-out',
    webkitAppearance: 'button',

    marginLeft: '13px',
    textTransform: 'none',
    margin: '0',
    // marginLeft: '0px',
    fontFamily: 'inherit',
    '::after, ::before': {
        boxSizing: 'border-box',
    },
    '[type="button"]:not(:disabled), button:not(:disabled)': {
        cursor: 'pointer',
    }
});