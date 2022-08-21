import { useDispatch } from 'react-redux';
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { styled } from '@stitches/react';
import logo from '../../assets/image/heraldica.png'
import icon from '../../assets/image/menuIcon.svg'

const Menu = styled('div', {
    width: '256px',
    backgroundColor: 'rgb(58, 72, 100)',
    backgroundImage: 'linear-gradient(to bottom left, rgb(58, 72, 100), rgb(86, 97, 93))',
    backgroundPosition: '50%',
    color: '#fff !important',
    padding: '1rem !important',
    flexShrink: '0 !important',
    flexDirection: 'column !important',
    display: 'flex !important',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

const MenuTitle = styled('a', {
    color: 'lightgray',
    marginBottom: '0 !important',
    marginRight: 'auto !important',
    textDecoration: 'none !important',
    alignItems: 'center !important',
    display: 'flex !important',
    flexShrink: 0,
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

const MenuItems = styled('ul', {
    marginBottom: 'auto !important',
    flexDirection: 'column !important',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
    listStyle: 'none',
    marginTop: '0',
    flexShrink: '0',
    color: '#fff !important',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

const MenuItem = styled('li', {
    flexShrink: '0',
    listStyle: 'none',
    color: '#fff !important',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    '::after, ::before': {
        boxSizing: 'border-box',
    },
    ':hover': {
        color: 'White',
        backgroundColor: 'Gray',
    },
    a: {
        background: '0 0',
        border: '0',
        borderRadius: '.25rem',
        color: 'lightgray',
        display: 'block',
        padding: '.5rem 1rem',
        textDecoration: 'none',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
        listStyle: 'none',
        fontFamily: 'var(--bs-font-sans-serif)',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
    }
});

const MenuIcon = styled('svg', {
    verticalAlign: '-.125em',
    pointerEvents: 'none',
    fill: 'currentColor',
    marginRight: '.5rem !important',
    listStyle: 'none',
    color: '#fff !important',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

const MenuProfile = styled('a', {
    
    '::after, ::before': {
        boxSizing: 'border-box',
    }
});

export const Sidebar = () => {
    const dispatch = useDispatch();
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    return (
        <Menu>
            <MenuTitle>
                <img className="mb-6 rounded-circle me-2 logo" src={logo} alt="" width="35" height="38"></img>
                <span className="fs-4">CHM</span>
            </MenuTitle>
            <hr></hr>
            <MenuItems>
                <MenuItem>
                    <a href="#/signin">
                        <MenuIcon className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></MenuIcon>Observações</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/om">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>OM</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/users">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Usários</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/researcher">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Pesquisador</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/platform">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Plataforma</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/country">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Países</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/equipment">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Equipamentos</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/manufacturer">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Fabricantes</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/institution">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Instituições</a>
                </MenuItem>
                <MenuItem>
                    <a href="#/platformCategory">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>Tipos de Plataforma</a>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};