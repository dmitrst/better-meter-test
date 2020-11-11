import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import '../../assets/analytics-page.css';
import PrimaryDataWrapper from "../data/PrimaryDataWrapper";
import SecondaryDataWrapper from "../data/SecondaryDataWrapper";
import DatePicker from "../filters/DatePicker";
import SitesFilter from "../filters/SitesFilter";
import EventFilter from "../filters/EventFilter";
import DateFilter from "../filters/DateFilter";
import AddSecondaryDataWrapper from "../data/AddSecondaryDataWrapper";
import Copyright from "../Copyright";

const useStyles = makeStyles({
    wrapper: {
        maxWidth: '90%',
        margin: 'auto',
        '@media (max-width:765px)': {
            maxWidth: '100%'
        }
    },
    pageHeader: {
        padding: '70px 0 80px 0',
        '@media (max-width:765px)': {
            padding: '74px 15px 30px',
        },
    },
    menuItem: {
        display: 'inline-block',
    },
    pageTitle: {
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
        fontSize: '36px',
        width: '50%',
        verticalAlign: 'top',
    },
    filters: {
        width: '50%',
        '@media (max-width:765px)': {
            display: 'none'
        }
    },
    formControl: {
        minWidth: 180,
        marginRight: 50,
    },
    filterOpened: {
        background: '#0C172E',
    },
    listTitle: {
        color: '#fff',
    },
    datePickerControl: {
      verticalAlign: 'bottom',
    },
});

const getRand = () => {
    return Math.floor(Math.random() * Math.floor(999999)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const activeSites = [
    {
        name: 'GL',
        title: 'Glyphy',
        value: getRand(),
        backgroundColor: '#FF9900',
        color: '#FFFFFF'
    },
    {
        name: 'DS',
        title: 'DesignStripe',
        value: getRand(),
        backgroundColor: '#127BF5',
        color: '#FFFFFF'
    },
    {
        name: 'GL',
        title: 'DesignValley',
        value: getRand(),
        backgroundColor: '#F73859',
        color: '#FFFFFF'
    },
    {
        name: 'DK',
        title: 'Neueubel',
        value: getRand(),
        backgroundColor: '#3DDDAA',
        color: '#FFFFFF'
    },
    {
        name: 'DS',
        title: 'Last Year',
        value: getRand(),
        backgroundColor: '#127BF5',
        color: '#FFFFFF'
    }
];
const visitedSites = [
    {
        name: 'DK',
        title: 'Drawkit',
        value: getRand(),
        backgroundColor: '#3DDDAA',
        color: '#FFFFFF'
    },
    {
        name: '4/10',
        title: 'Yesterday',
        value: getRand(),
        backgroundColor: '#FAF8F3',
        color: '#000000'
    },
    {
        name: '1-7',
        title: 'Last Week',
        value: getRand(),
        backgroundColor: '#E6F5FA',
        color: '#000000'
    },
    {
        name: 'SEP',
        title: 'Last Month',
        value: getRand(),
        backgroundColor: '#F0F4FF',
        color: '#000000'
    },
    {
        name: '2019',
        title: 'Last Year',
        value: getRand(),
        backgroundColor: '#EFFCF0',
        color: '#000000'
    }
];
const topEvents = [
    {
        name: '5/10',
        title: 'Today',
        value: getRand(),
        backgroundColor: '#FF9900',
        color: '#FFFFFF'
    },
    {
        name: '4/10',
        title: 'Yesterday',
        value: getRand(),
        backgroundColor: '#FAF8F3',
        color: '#000000'
    },
    {
        name: '1-7',
        title: 'Last Week',
        value: getRand(),
        backgroundColor: '#E6F5FA',
        color: '#000000'
    },
    {
        name: 'SEP',
        title: 'Last Month',
        value: getRand(),
        backgroundColor: '#F0F4FF',
        color: '#000000'
    },
    {
        name: '2019',
        title: 'Last Year',
        value: getRand(),
        backgroundColor: '#EFFCF0',
        color: '#000000'
    }
];


const AnalyticsPage = () => {
    const styles = useStyles();
    return(
        <div className={styles.wrapper}>
            <div className={styles.pageHeader}>
                <div className={clsx(styles.menuItem, styles.pageTitle)}>
                    Analytics
                </div>
                <div className={clsx(styles.menuItem, styles.filters)}>
                    <SitesFilter/>
                    <EventFilter/>
                    <DatePicker/>
                </div>
            </div>
            <PrimaryDataWrapper/>
            <SecondaryDataWrapper items={activeSites} filter={<SitesFilter/>} title='Most Active Sites'/>
            <SecondaryDataWrapper items={visitedSites} filter={<DateFilter/>} title='Most Visited Sites'/>
            <SecondaryDataWrapper items={topEvents} filter={<EventFilter/>} title='Top Events'/>
            <AddSecondaryDataWrapper />
            <Copyright />
        </div>
    );
};

export default AnalyticsPage
