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

const SitesFilter = () => {
    const [site, setSite] = React.useState('Gliphy.io');

    const handleChangeSite = (e) => {
        setSite(e.target.value);
    };

    const styles = useStyles();
    return(
        <FormControl className={styles.formControl}>
            <InputLabel id="sites-select-label">Sites:</InputLabel>
            <Select
                labelId="sites-select-label"
                id="sites-select"
                value={site}
                onChange={handleChangeSite}
            >
                <MenuItem className={styles.listTitle} value={''}>Sites: <ExpandMoreIcon className={styles.listExpand} /></MenuItem>
                <MenuItem value={'DrawKit.io'}>
                    <span className="listItemValue">DrawKit.io</span>
                </MenuItem>
                <MenuItem value={'DesignStripe'}>
                    <span className="listItemValue">DesignStripe</span>
                </MenuItem>
                <MenuItem value={'Gliphy.io'}>
                    <span className="listItemValueActive">Gliphy.io</span>
                </MenuItem>
                <MenuItem value={'Designvalley.club'}>
                    <span className="listItemValue">Designvalley.club</span>
                </MenuItem>
                <MenuItem value={'Neubel'}>
                    <span className="listItemValue">Neubel</span>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default SitesFilter