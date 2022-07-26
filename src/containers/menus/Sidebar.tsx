import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { Submenu } from './Submenu';
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../../services/service.token"
import { styled } from '@stitches/react';

const Nav = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '4rem',
    backgroundColor: 'White',
    borderBottom: '1px solid #e0e3e7',
});

const SidebarNav = styled('div', {
    width: '256px',
    height: '100vh',
    backgroundColor: '#3c4b64',
    position: 'fixed',
    top: 0,
    transition: '350ms',
    variants: {
        sidebar: {
            true: { left: '0' },
            false: { left: '-100%' },
        },
    },
});

const NavIcon = styled(Link, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '5rem',
    fontSize: '1.125rem',
    marginLeft: '2rem',
});

const SidebarWrap = styled('div');

export const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#b1b7c1' }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
                {getUserName()}
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};