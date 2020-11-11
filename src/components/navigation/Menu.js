import React from "react";
import clsx from 'clsx'
import {makeStyles} from "@material-ui/core/styles";
import SettingsIcon from '@material-ui/icons/Settings';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GroupIcon from '@material-ui/icons/Group';
import TvIcon from '@material-ui/icons/Tv';
import PieChartIcon from '@material-ui/icons/PieChart';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LanguageIcon from '@material-ui/icons/Language';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
    menuBlock: {
        backgroundColor: '#fff',
        '@media (max-width:765px)': {
            display: 'none'
        }
    },
    menu: {
        margin: 0,
        padding: '0 4px',
        listStyle: 'none',
    },
    menuItem: {
        display: 'inline-block',
        padding: '20px',
        fontFamily: 'DM Sans',
        fontSize: '18px',
        color: '#1A2437',
        boxShadow: '1px 0px 0px #E5E5E5',
        cursor: 'pointer',
    },
    menuItemActive: {
        background: '#F8F5F5',
    },
    menuItemIcon: {
        verticalAlign: 'bottom',
        color: '#1A2437',
        marginRight: '12px',
    },
});

const Menu = () => {
    const styles = useStyles();
    return (
        <div className={styles.menuBlock}>
            <ul className={styles.menu}>
                <li className={clsx(styles.menuItem, styles.menuItemActive)}>
                    <DashboardIcon className={styles.menuItemIcon} />
                    <span>Dashboard</span>
                </li>
                <li className={styles.menuItem}>
                    <LanguageIcon className={styles.menuItemIcon} />
                    <span>Sites</span>
                </li>
                <li className={styles.menuItem}>
                    <FilterNoneIcon className={styles.menuItemIcon} />
                    <span>Campaigns</span>
                </li>
                <li className={styles.menuItem}>
                    <PieChartIcon className={styles.menuItemIcon} />
                    <span>Analytics</span>
                </li>
                <li className={styles.menuItem}>
                    <TvIcon className={styles.menuItemIcon} />
                    <span>Live View</span>
                </li>
                <li className={styles.menuItem}>
                    <GroupIcon className={styles.menuItemIcon} />
                    <span>Users</span>
                </li>
                <li className={styles.menuItem}>
                    <BusinessCenterIcon className={styles.menuItemIcon} />
                    <span>Organizations</span>
                </li>
                <li className={styles.menuItem}>
                    <SettingsIcon className={styles.menuItemIcon} />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    );
}

export default Menu