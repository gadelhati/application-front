import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';
import { styled } from '@stitches/react';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link, {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '3.75rem',
    fontSize: '0.965rem',
    padding: '2rem',
    textDecoration: 'none',
    color: '#b1b7c1',
    transition: '50ms',
    '&:hover': {
        color: 'White',
        backgroundColor: '#46546c',
        borderLeft: '4px solid #b1b7c1',
    },
});
const SidebarLabel = styled('span', {
    marginLeft: '1rem',
});

const DropdownLink = styled(Link, {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '3.75rem',
    fontSize: '0.965rem',
    paddingLeft: '3rem',
    textDecoration: 'none',
    color: '#b1b7c1',
    backgroundColor: '#303c50',
    transition: '50ms',
    '&:hover': {
        color: 'White',
        backgroundColor: '#3b4659',
        borderLeft: '4px solid #b1b7c1',
    },
});

export const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};