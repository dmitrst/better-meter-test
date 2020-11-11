import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    list: {
      listStyle: 'none',
        padding: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E5E5E5',
        padding: '15px 0',
    },
    circle: {
        zIndex: 1,
        width: 30,
        height: 30,
        borderRadius: '100%',
        border: '3px solid #FFF',
        fontSize: '11px',
        color: '#FFF',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleValue: {
        verticalAlign: 'sub',
    },
    circleEmoji: {
        zIndex: 0,
        marginLeft: '-20px',
        fontSize: '18px'
    },
    titleValue: {
        fontFamily: 'DM Sans',
        fontWeight: '500',
        fontSize: '20px',
        color: '#000000',
    },
    data: {
        fontFamily: 'DM Mono',
        float: 'right',
        padding: '10px 0',
        fontWeight: '500',
        fontSize: '24px',
        textAlign: 'right',
        color: '#000000',
    },
    seeAllBlock: {
        textAlign: 'right',
        marginTop: '80px',
    },
    seeAll: {
        fontSize: '16px',
        color: '#84868A',
    },
    cardTitle: {
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    filterBlock: {
      margin: '30px 0 30px',
    },
    itemInfo: {
      display: 'flex',
      alignItems: 'center'
    }
});

const Arrows = () => {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3333 7.66667L7.66667 1L1 7.66667M14.3333 17L7.66667 10.3333L1 17" stroke="#08A90E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const StatisticList = ({items = [], filter = null, title = '', isSecondary = false}) => {
    const styles = useStyles();
    const options = ['Edit', 'Refresh'];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
            {isSecondary &&
                <div>
                    <span className={styles.cardTitle}>{title}</span>
                    <span style={{'float': 'right'}}>
                      <IconButton
                        style={{padding: 0}}
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        className={'white'}
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                      >
                        {options.map((option) => (
                          <MenuItem key={option} disabled={option === 'Edit'} onClick={handleClose}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </span>
                    <div className={styles.filterBlock}>
                        {filter}
                    </div>
                </div>
            }
            <ul className={styles.list}>
                {items.map((item) =>
                    <li key={item.value} className={styles.listItem}>
                        <div className={styles.itemInfo}>
                            <span className={styles.circle} style={{'color': item.color,  'backgroundColor': item.backgroundColor, 'marginRight': '10px'}}>
                                <span className={styles.circleValue}>{item.name}</span>
                            </span>
                            {!!item.emoji &&
                            <span className={clsx(styles.circle, styles.circleEmoji)} style={{'backgroundColor': item.emojiColor}}>
                                <span className={styles.circleValue}>{item.emoji === 'arrows' ? (<Arrows />) : item.emoji}</span>
                            </span>
                            }
                            {!!item.title && <span className={styles.titleValue}>{item.title}</span>}
                        </div>

                        <span className={styles.data}>{item.value}</span>
                    </li>
                )}
            </ul>
            {!isSecondary &&
            <div className={styles.seeAllBlock}>
                <span className={styles.seeAll}>
                    See all
                    <ChevronRightIcon style={{'verticalAlign': 'sub'}} fontSize="small"/>
                </span>
            </div>
            }
        </>
    );
};

export default StatisticList
