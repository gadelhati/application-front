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