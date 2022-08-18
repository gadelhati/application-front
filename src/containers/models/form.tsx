import { styled } from '@stitches/react';

export const Button = styled('button', {
    position: 'relative !important',
    float: 'right !important',
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    borderRadius: '.2rem',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    border: '1px solid transparent',
    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out';
        // color: '.15s ease-in-out',
        // backgroundColor: '.15s ease-in-out',
        // borderColor: '.15s ease-in-out',
        // boxShadow: '.15s ease-in-out',
    marginLeft: '13px',
    textTransform: 'none',
    fontFamily: 'inherit',
    // '::after, ::before': {
    //     boxSizing: 'border-box',
    // },
    span: {
        borderRadius: '50rem !important',
        backgroundColor: '#6c757d !important',
        transform: 'translate(-50%,-50%) !important',
        left: '100% !important',
        top: '0 !important',
        position: 'absolute !important',
        display: 'inline-block',
        padding: '.35em .65em',
        fontSize: '.75em',
        fontWeight: '700',
        lineHeight: '1',
        color: '#fff',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    variants: {
        color: {
            primary:    {backgroundColor: '#4285F4'},
            secondary:  {backgroundColor: '#696969'},
            success:    {backgroundColor: '#00C851'},
            info:       {backgroundColor: '#33b5e5'},
            warning:    {backgroundColor: '#ffbb33'},
            danger:     {backgroundColor: '#ff4444'},
            light:      {backgroundColor: '#F0FFFF'},
            dark:       {backgroundColor: '#000000'},
        },
        disabled: {
            true: {
                color: '#6c757d',
                backgroundColor: 'transparent',
                borderColor: '#6c757d',
                cursor: 'none',
                pointerEvents: 'none',
                opacity: '.65',
            },
            false: {
                color: '#fff',
                backgroundColor: '#198754',
                borderColor: '#198754',
                cursor: 'pointer',
            }
        }
    }
});