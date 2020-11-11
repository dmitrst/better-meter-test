import React, {Fragment} from "react";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    tab: {
        background: '#FFFFFF',
        opacity: '0.5',
        borderLeft: '1px solid #E5E5E5',
        display: 'inline-block',
        padding: '25px 65px',
        cursor: 'pointer',

        '&:first-child': {
            borderRadius: '10px 0 0 0',
            border: 'none',
            opacity: '1'
        },

        '&:last-child': {
            borderRadius: '0 10px 0 0',
        },

        '@media (max-width:765px)': {
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#F8F5F5',
            padding: '25px 35px',
            marginBottom: '2px',
            opacity: '1',

        }
    },
    tabTitle: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#84868A',

        '& > svg': {
            marginLeft: '5px',
            fontSize: '0.7rem'
        },

        '@media (max-width:765px)': {
            textAlign: 'left',
            paddingLeft: '35px',
        }
    },
    tooltip: {
        width: '175px',
        padding: '15px',
        backgroundColor: '#0C172E',

        '& > p': {
            fontFamily: 'DM Sans',
            color: '#84868A',
            fontSize: '12px',
        },

        '& > span': {
            display: 'inline-block',
            verticalAlign: 'text-bottom',
            marginLeft: '5px',
        }
    },
    tabSubTitle: {
        marginTop: '5px',
        fontFamily: 'DM Mono',
        fontWeight: '500',
        fontSize: '34px',
        color: '#000000',

        '& > svg': {
            marginRight: '10px',
        }
    },
    comparing: {
        width: 48,
        height: 24,
        borderRadius: '100px',
        fontSize: '15px',
        textAlign: 'center',
        padding: '5px 7px',
        verticalAlign: 'middle',
        marginLeft: '10px',
    },
    comparingNegative: {
        backgroundColor: '#FED1D1',
        color: '#EC0C0C',
    },
    comparingPositive: {
        backgroundColor: '#BEEDC0',
        color: '#01653B',
    },
    mobileChart: {
        display: 'none',
        '@media (max-width:765px)': {
            display: 'block',
        }
    }
});

const tooltip = (styles, item) => {
    return(
        <Tooltip classes={{ tooltip: styles.tooltip }}
                 title={
                        <>
                            <InfoOutlinedIcon fontSize={"small"} style={{'verticalAlign': 'sub'}}/>
                            <span>{item.title}</span>
                            <p>{item.tooltip}</p>
                        </>
                 } placement="top" arrow>
            <InfoOutlinedIcon fontSize="small"/>
        </Tooltip>
    );
};

const getComparing = (styles) => {
    if(Math.floor(Math.random() * Math.floor(2)) === 0) {
        return(
            <span className={clsx(styles.comparing, styles.comparingNegative)}>
                <span className={styles.circleValue}>-{Math.floor(Math.random() * Math.floor(50))}%</span>
            </span>
        );
    } else {
        return(
            <span className={clsx(styles.comparing, styles.comparingPositive)}>
                <span className={styles.circleValue}>+{Math.floor(Math.random() * Math.floor(50))}%</span>
            </span>
        );
    }
};

const DataTab = ({item}) => {
    const styles = useStyles();
    return(
        <Fragment>
            <div className={clsx(styles.tab, styles.tabActive)}>
                <div className={styles.tabTitle}>
                    {item.title}
                    {tooltip(styles, item)}
                </div>
                <div className={styles.tabSubTitle}>
                    {item.icon}
                    {item.subtitle}
                    {getComparing(styles)}
                </div>
            </div>
            {!!item.chart && (
              <div className={styles.mobileChart}>
                {item.chart}
              </div>
            )}
        </Fragment>
    );
};

export default DataTab
