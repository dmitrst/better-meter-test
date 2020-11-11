import React, {useState} from "react";
import '../../assets/datepicker-styles.css';
import '../../assets/datepicker-default-teme.css';
import { DateRange } from 'react-date-range';
import CalendarToday from '@material-ui/icons/CalendarToday';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(() => ({
    datePickerWrapper: {
        position: props => props.isOpen ? 'absolute' : 'relative',
        top: props => props.isOpen ? '-46px' : '0',
        maxWidth: props => props.isOpen ? '279px' : '269px',
        padding: '10px 10px 0 10px',
        borderRadius: '3px',
        backgroundColor: props => props.isOpen ? 'white' : 'transparent',
        boxShadow: props => props.isOpen ? '0 1.34px 6.70px rgba(0, 0, 0, 0.15)' : 'none',
        zIndex: props => props.isOpen ? 1 : 'auto',
    },
    datePickerActuator: {
        width: props => props.isOpen ? '279px' : '269px',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#ccc',
        cursor: 'pointer',
        paddingTop: '10px',
        paddingBottom: '5px',
        borderBottom: props => props.isOpen ? 'none' :'1px solid rgba(0, 0, 0, 0.42)'
    },
    datePickerActuatorLabel: {
        display: 'flex',
        color: '#ccc'
    },
    datePickerActuatorDate: {
        display: 'flex',
        color: '#0C172E'
    },
    datePickerActuatorLabelText: {
        paddingLeft: '5px'
    },
    datePickerActuatorDateText: {
        fontWeight: 'bold'
    },
    datePickerControl: {
        verticalAlign: 'bottom',
    },
}));

const DatePicker = (props) => {
    const initialDate = new Date();
    const [isOpen, setIsOpen] = useState(false);
    const styles = useStyles({isOpen});
    const [state, setState] = useState([
        {
            startDate: initialDate,
            endDate: initialDate,
            key: 'selection'
        }
    ]);

    const getSelectedDate = () => {
        const dates = state.find(item => item.key === 'selection');
        if (Date.parse(dates.startDate) === Date.parse(dates.endDate)) {
            return moment(dates.startDate).format('MMM D YYYY')
        }
        const formattedStartDate = moment(dates.startDate).format('MMM D');
        const formattedEndDate = moment(dates.endDate).format('MMM D YYYY');
        return `${formattedStartDate} - ${formattedEndDate}`
    };

    return (
        <FormControl className={styles.datePickerControl}>
            <div className={styles.datePickerWrapper}>
                <div className={styles.datePickerActuator} onClick={() => {setIsOpen(!isOpen)}}>
                    <div className={styles.datePickerActuatorLabel}>
                        <CalendarToday fontSize="small" color="disabled"/>
                        <div className={styles.datePickerActuatorLabelText}>Date:</div>
                    </div>
                    <div className={styles.datePickerActuatorDate}>
                        <div className={styles.datePickerActuatorDateText}>{getSelectedDate()}</div>
                        <KeyboardArrowDownIcon fontSize="small"/>
                    </div>
                </div>
                {isOpen && (
                    <DateRange
                        className={'styledPickerWrapper'}
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        color={'#0C172E'}
                        rangeColors={['#0C172E']}
                        showMonthArrow={false}
                        showDateDisplay={false}
                        showMonthAndYearPickers={false}
                        showSelectionPreview={false}
                    />
                )}
            </div>
        </FormControl>
    )
};
export default DatePicker
