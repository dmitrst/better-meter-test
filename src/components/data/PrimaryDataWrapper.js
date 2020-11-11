import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import StatisticList from "./StatisticList";
import Chart from "./Chart";
import DataTab from "./DataTab";
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: '#FFF',
        borderRadius: '0 0 10px 10px',
        margin: 'auto',
        padding: '0 25px 30px',
        maxHeight: '600px',
        '@media (max-width:765px)': {
            display: 'none',
            width: '100%',
            padding: 0
        }
    },
    statistic: {
        display: 'inline-block',
        width: '25%',
        padding: '10px 50px',
        borderRight: '1px solid #E5E5E5',
        verticalAlign: 'top',
    },
    graphData: {
        display: 'inline-block',
        padding: '40px 35px 70px 50px',
        width: '60%',
        verticalAlign: 'top',
        position: 'relative',
        height: '100%',
        '@media (max-width:765px)': {
            width: '100%',
            padding: 0
        }
    }
});

const getRand = () => {
    return Math.floor(Math.random() * Math.floor(999999)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const items = [
    {
        name: 'GL',
        emoji: 'arrows',
        value: getRand(),
        backgroundColor: '#FF9900',
        emojiColor: '#BEEDC0'
    },
    {
        name: 'DS',
        emoji: '👍',
        value: getRand(),
        backgroundColor: '#127BF5',
        emojiColor: '#FAF8F3'
    },
    {
        name: 'GL',
        emoji: 'arrows',
        value: getRand(),
        backgroundColor: '#FF9900',
        emojiColor: '#BEEDC0'
    },
    {
        name: 'DK',
        emoji: '🔥',
        value: getRand(),
        backgroundColor: '#3DDDAA',
        emojiColor: '#FAF8F3'
    },
    {
        name: 'DS',
        emoji: '👎',
        value: getRand(),
        backgroundColor: '#127BF5',
        emojiColor: '#FAF8F3'
    },
    {
        name: 'NB',
        emoji: 'arrows',
        value: getRand(),
        backgroundColor: '#84868A',
        emojiColor: '#BEEDC0'
    }
];

const tabs = [
    {
        id: 0,
        title: 'Pageviews',
        subtitle: '223.5k',
        tooltip: 'an instance of a user visiting a particular page on a website.',
        icon: <TrendingUpOutlinedIcon />,
        chart: <Chart />
    },
    {
        id: 1,
        title: 'Unique Users',
        subtitle: '74.858',
        tooltip: 'an instance of the new unique users on a website.',
        icon: <TrendingUpOutlinedIcon />,
    },
    {
        id: 2,
        title: 'Average visit time',
        subtitle: '01:45',
        tooltip: 'an instance of an average user visiting time.',
        icon: <ScheduleOutlinedIcon />,
    },
    {
        id: 3,
        title: 'Bounce rate',
        subtitle: '25.7%',
        tooltip: 'an instance of a bounce rate.',
        icon: <TrendingUpOutlinedIcon />,
    }
];

const PrimaryDataWrapper = () => {
    const styles = useStyles();
    return(
        <>
            <div className={styles.tabs}>
                {tabs.map((tab) =>
                    <DataTab key={tab.title} item={tab}/>
                )}
            </div>
            <div className={styles.wrapper}>
                <div className={styles.statistic}>
                    <StatisticList items={items} />
                </div>
                <div className={styles.graphData}>
                    <Chart/>
                </div>
            </div>
        </>
    );
};

export default PrimaryDataWrapper
