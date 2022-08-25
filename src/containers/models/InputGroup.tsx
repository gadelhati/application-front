import { stitches } from "./globalStyles";
// import { styled } from "@stitches/react";

const { styled } = stitches;

export const InputGroup = styled('div', {
    margin: '0.2em',
    marginLeft: '1em',
    paddingRight: '1em',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    width: '100%',
});
export const InputGroupText = styled('span', {
    '&:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
    },
    '&:not(:last-child)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderRight: 'none',
    },
    borderRadius: '.2rem',
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    display: 'flex',
    alignItems: 'center',
    // padding: '.375rem .75rem',
    // fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundColor: '#e9ecef',
    border: '1px solid #ced4da',
});
export const InputGroupInput = styled('input', {
    '&:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
    },
    '&:not(:last-child)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        // borderRight: 'none',
    },
    borderRadius: '.2rem',
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: '0',
    display: 'block',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    appearance: 'none',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    margin: '0',
    fontFamily: 'inherit',
    variants: {
        isInvalid: {
            true:    {
                borderColor: '#dc3545',
            },
        }
    }
});
