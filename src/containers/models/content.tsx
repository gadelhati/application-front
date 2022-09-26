import { styled } from '@stitches/react';

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    /* justify-content: 'space-between', */
    alignItems: 'stretch',
    flexGrow: '1',
    overflow: 'auto',
    /* background-color: 'yellow', */
    /* width: '80vw', */
    padding: '10px',
    /* margin: '10px', */
    /* border: '6px solid white', */
});

export const Article = styled('article', {
    padding: '0.6em',
    backgroundColor: 'rgb(252, 246, 246)',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',/* offset-x | offset-y | blur-radius | spread-radius | color */
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
    // width: '50%',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const Col = styled('div', {
    flex: '1 0 0%',
    width: '100%',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});