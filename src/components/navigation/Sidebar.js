import React from 'react';
import '../../assets/slider.css';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
    return (
        <Menu>
            <span className="menu-item">Dashboard</span>
            <span className="menu-item">Sites</span>
            <span className="menu-item">Campaigns</span>
            <span className="menu-item">Analytics</span>
            <span className="menu-item">Live View</span>
        </Menu>
    );
};

export default Sidebar