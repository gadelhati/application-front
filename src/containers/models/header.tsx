import { styled } from '@stitches/react';

export const Modal = styled('div', {
    //MODAL
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1060,
    // display: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    outline: 0,
    //FADE
    transition: 'opacity .15s linear',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const ModalDialog = styled('div', {
    transform: 'none',
    // transform: 'translate(0,-50px)',
    transition: 'transform .3s ease-out',
    pointerEvents: 'none',
    // maxWidth: '500px',
    margin: '1.75rem auto',
    position: 'relative',
    width: 'auto',
    // margin: '.5rem'
    //MODAL-LG
    maxWidth: '800px',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const ModalContent = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // pointerEvents: 'auto',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.2)',
    borderRadius: '.3rem',
    outline: 0,
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const ModalHeader = styled('div', {
    display: 'flex',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1rem',
    borderBottom: '1px solid #dee2e6',
    borderTopLeftRadius: 'calc(.3rem - 1px)',
    borderTopRightRadius: 'calc(.3rem - 1px)',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const ModalBody = styled('div', {
    position: 'relative',
    flex: '1 1 auto',
    padding: '1rem',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const Title = styled('div', {
    //ALERT SECONDARY
    color: '#41464b',
    backgroundColor: '#e2e3e5',
    borderColor: '#d3d6d8',
    //ALERT
    position: 'relative',
    padding: '1rem 1rem',
    marginBottom: '1rem',
    border: '1px solid transparent',
    borderRadius: '.25rem',
    //BODY
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    bsGutterX: '1.5rem',
    bsGutterY: '0',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    marginRight: 'calc(var(--bs-gutter-x) * -.5)',
    marginLeft: 'calc(var(--bs-gutter-x) * -.5)',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const Row = styled('div', {
    bsGutterX: '1.5rem',
    bsGutterY: '0',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    marginRight: 'calc(var(--bs-gutter-x) * -.5)',
    marginLeft: 'calc(var(--bs-gutter-x) * -.5)',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const Cow = styled('div', {
    flex: '1 0 0%',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

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