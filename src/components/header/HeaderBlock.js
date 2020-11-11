import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
    header: {
        background: '#101010',
        clear: 'both',
        '@media (max-width:765px)': {
            position: 'fixed',
            width: '100%',
            zIndex: 10
        }
    },
    logoBlock: {
        display: 'inline-block',
        color: '#fff',
        padding: '17px 30px',
        '@media (max-width:765px)': {
            color: '#fff',
            display: 'inline-block',
            padding: '11px 0',
            maxWidth: '148px',
            marginLeft: '100px',
        }
    },
    logo: {
        verticalAlign: 'middle',
        '@media (max-width:765px)': {
            maxWidth: '148px',
        },
    },
    headerMenu: {
        display: 'inline-block',
        float: 'right',
        color: '#fff',
    },
    headerMenuItem: {
        display: 'inline-block',
        boxShadow: '-1px 0px 0px #333333',
        padding: '15px 20px',
        verticalAlign: 'middle',
        textAlign: 'center',
        '@media (max-width:765px)': {
            boxShadow: 'none',
            padding: '7px'
        },
    },
    headerUserMenuItem: {
        display: 'inline-block',
        boxShadow: '-1px 0px 0px #333333',
        padding: '12px 20px',
        verticalAlign: 'middle',
        textAlign: 'center',
        '@media (max-width:765px)': {
            boxShadow: 'none',
            padding: '7px'
        },
    },
    avatar: {
        borderRadius: '100%',
        marginRight: '10px',
        verticalAlign: 'middle',
        '@media (max-width:765px)': {
            maxWidth: '30px',
        },
    },
    userName: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal',
        '@media (max-width:765px)': {
            display: 'none',
        },
    },
    expand: {
        verticalAlign: 'middle',
        margin: '0 5px',
        '@media (max-width:765px)': {
            display: 'none',
        },
    },
    hideOnMobile: {
        '@media (max-width:765px)': {
            display: 'none',
        },
    },
    notificationsWrapper: {
        display: 'inline-flex'
    },
    notifications: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '17px',
        height: '17px',
        backgroundColor: 'red',
        color: '#FFFFFF',
        borderRadius: '50%',
        marginLeft: '-10px',
        fontSize: '12px',
        border: '3px solid #101010'
    },
});

const HeaderBlock = () => {
    const styles = useStyles();
    return (
        <div className={styles.header}>
            <div className={styles.logoBlock}>
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="BetterMeter"/>
            </div>
            <div className={styles.headerMenu}>
                <div className={clsx(styles.headerMenuItem, styles.hideOnMobile)}>
                    <SearchIcon />
                </div>
                <div className={clsx(styles.headerMenuItem, styles.notificationsWrapper)}>
                    <NotificationsIcon />
                    <div className={styles.notifications}>9</div>
                </div>
                <div className={styles.headerUserMenuItem}>
                    <img className={styles.avatar} src={process.env.PUBLIC_URL + '/avatar.png'} alt="BetterMeter"/>
                    <span  className={styles.userName}>Adrian Villa</span>
                    <ExpandMoreIcon className={styles.expand} />
                </div>
            </div>
        </div>
    );
}

export default HeaderBlock
