import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    wrapper: {

        backgroundColor: '#FFF',
        verticalAlign: 'top',
        borderRadius: '10px',
        margin: '40px 0 0 0',
        padding: '30px 25px 40px 25px',
        height: '565px',
        maxWidth: '445px',
        minWidth: '20%',
        display: 'inline-block',
        position: 'relative',
        '@media (max-width:765px)': {
            display: 'block',
            margin: '20px 0',
            borderRadius: '0',
            backgroundColor: '#F8F5F5'
        }
    },
    plus: {
        position: 'absolute',
        top: '50%',
        left: '33%',
        cursor: 'pointer',

        '& > svg': {
            fontSize: '122px'
        }
    }
});

const AddSecondaryDataWrapper = () => {
    const styles = useStyles();
    return(
        <div className={styles.wrapper}>
            <span className={styles.plus}>
                <AddIcon />
            </span>
        </div>
    );
}

export default AddSecondaryDataWrapper