import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import '../../assets/analytics-page.css';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
    wrapper: {
        maxWidth: '90%',
        margin: 'auto',
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
});

const EventFilter = () => {
    const [event, setEvent] = React.useState('All');
    const handleChangeEvent = (e) => {
        setEvent(e.target.value);
    };

    const styles = useStyles();
    return(
        <FormControl className={styles.formControl}>
            <InputLabel id="event-select-label">Events:</InputLabel>
            <Select
                labelId="event-select-label"
                id="event-select"
                value={event}
                onChange={handleChangeEvent}
            >
                <MenuItem className={styles.listTitle} value={''}>Event: <ExpandMoreIcon className={styles.listExpand} /></MenuItem>
                <MenuItem value={'All'}>
                    <span className="listItemValueActive">All</span>
                </MenuItem>
                <MenuItem value={'Today'}>
                    <span className="listItemValue">Today</span>
                </MenuItem>
                <MenuItem value={'Yesterday'}>
                    <span className="listItemValue">Yesterday</span>
                </MenuItem>
                <MenuItem value={'Last Week'}>
                    <span className="listItemValue">Last Week</span>
                </MenuItem>
                <MenuItem value={'Last Month'}>
                    <span className="listItemValue">Last Month</span>
                </MenuItem>
                <MenuItem value={'Last Year'}>
                    <span className="listItemValue">Last Year</span>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default EventFilter