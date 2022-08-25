import { stitches } from "./globalStyles";

const { styled } = stitches;

export const Tooltip = styled('div', {
    position: 'relative',
    display: 'inline-block',
    borderBottom: '1px dotted black',
    '&:hover span': {
        visibility: 'visible',
    },
    span: {
        visibility: 'hidden',
        width: '120px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        padding: '5px 0',
        borderRadius: '6px',
        position: 'absolute',
        zIndex: '1',
    }
});

export const TooltipText = styled('span', {

});