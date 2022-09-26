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