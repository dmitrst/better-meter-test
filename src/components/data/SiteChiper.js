import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 0,
        width: 'auto',
        alignItems: 'center',
        padding: '2px 10px 2px 5px',
        marginRight: '10px',
        borderRadius: '100px',
        backgroundColor: props => props.active ? props.color : 'transparent',
        color: props => props.active ? 'white' : 'inherit',
        transition: theme.transitions.create(['background-color', 'color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '&:hover': {
            backgroundColor: props => props.color,
            color: 'white',
            cursor: 'pointer'
        },
        '@media (max-width:765px)': {
            display: 'none'
        }
    },
    round: {
        width: '10px',
        height: '10px',
        marginRight: '5px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: props => `1px solid ${props.color}`
    },
    label: {
        fontSize: '12px',
        paddingTop: '2px'
    }
}));

const SiteChiper = (props) => {
    const {label, color, active, handleClick} = props;
    const styles = useStyles({color, active});
    return (
        <div className={styles.root} onClick={handleClick}>
            <div className={styles.round}> </div>
            <div className={styles.label}>{label}</div>
        </div>
    )
}
export default SiteChiper