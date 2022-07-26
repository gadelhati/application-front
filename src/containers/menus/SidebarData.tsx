import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <AiOutlineUser />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Auth',
        path: '/auth',
        icon: <FaOpencart />
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiOutlineHistory />
    },
    {
        title: 'OM',
        path: '/om',
        icon: <FaCog />
    },
    {
        title: 'Observation',
        path: '/observation',
        icon: <FaCog />
    },
    {
        title: 'Observation CoreUI',
        path: '/observationcoreui',
        icon: <FaCog />
    },
    {
        title: 'Observation Item',
        path: '/observationitem',
        icon: <FaCog />
    }
];
