import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import StatisticList from "./StatisticList";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: '#FFF',
        borderRadius: '10px',
        margin: '40px 33px 0 0',
        padding: '30px 25px 40px 25px',
        maxHeight: '600px',
        maxWidth: '445px',
        minWidth: '20%',
        display: 'inline-block',
        '@media (max-width:765px)': {
            display: 'block',
            margin: '20px 0',
            borderRadius: '0',
            backgroundColor: '#F8F5F5'
        }
    }
});

const SecondaryDataWrapper = ({items, filter, title}) => {
    const styles = useStyles();
    return(
        <div className={styles.wrapper}>
            <StatisticList items={items} filter={filter} title={title} isSecondary={true}/>
        </div>
    );
}

export default SecondaryDataWrapper
