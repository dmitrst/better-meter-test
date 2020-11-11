import React, {useState, Fragment} from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import SiteChiper from "./SiteChiper";

const data = [
    {month: 'JAN', glyphy: 0, drawKit: 0, designStripe: 0, designwalley: 0, neubel: 0},
    {month: 'FEB', glyphy: 5.000, drawKit: 2.000, designStripe: 2.000, designwalley: 7.000, neubel: 3.000},
    {month: 'MAR', glyphy: 4.000, drawKit: 10.000, designStripe: 13.000, designwalley: 15.000, neubel: 3.000},
    {month: 'APR', glyphy: 6.780, drawKit: 6.780, designStripe: 2.780, designwalley: 9.780, neubel: 5.780},
    {month: 'MAY', glyphy: 3.890, drawKit: 6.890, designStripe: 4.890, designwalley: 11.890, neubel: 7.890},
    {month: 'JUN', glyphy: 6.890, drawKit: 2.890, designStripe: 7.890, designwalley: 4.890, neubel: 8.890},
    {month: 'JUL', glyphy: 12.493, drawKit: 11.493, designStripe: 2.493, designwalley: 12.493, neubel: 12.493},
    {month: 'AUG', glyphy: 4.490, drawKit: 4.490, designStripe: 8.490, designwalley: 3.490, neubel: 8.490},
    {month: 'SEP', glyphy: 6.490, drawKit: 8.490, designStripe: 6.490, designwalley: 6.490, neubel: 6.490},
    {month: 'OCT', glyphy: 5.990, drawKit: 9.990, designStripe: 9.990, designwalley: 9.990, neubel: 2.990},
    {month: 'NOV', glyphy: 5.000, drawKit: 15.000, designStripe: 1.000, designwalley: 14.000, neubel: 15.000},
    {month: 'DEC', glyphy: 13.390, drawKit: 3.390, designStripe: 13.390, designwalley: 15.390, neubel: 13.390},
];
const colors = {
    drawKit: '#3DDDAA',
    designStripe: '#1B7FF3',
    glyphy: '#FF9900',
    designwalley: '#571DFE',
    neubel: '#0C172E',
};

const useStyles = makeStyles((theme) => ({
    chipsWrapper: {
        display: 'flex'
    },
}));

export default function Chart() {
    const styles = useStyles();
    const [chart, setChart] = useState('glyphy');

    const getData = () => {
        return data.map(item => ({
            month: item.month,
            [chart]: item[chart]
        }))
    };

    const getColor = () => {
        return colors[chart] || 'red'
    };
    return (
        <Fragment>
            <div className={styles.chipsWrapper}>
                <SiteChiper label={'DrawKit'} color={colors.drawKit} active={chart === 'drawKit'} handleClick={() => {setChart('drawKit')}}/>
                <SiteChiper label={'DesignStripe'} color={colors.designStripe} active={chart === 'designStripe'} handleClick={() => {setChart('designStripe')}}/>
                <SiteChiper label={'Glyphy.io'} color={colors.glyphy} active={chart === 'glyphy'} handleClick={() => {setChart('glyphy')}}/>
                <SiteChiper label={'Designwalley.club'} color={colors.designwalley} active={chart === 'designwalley'} handleClick={() => {setChart('designwalley')}}/>
                <SiteChiper label={'Neubel'} color={colors.neubel} active={chart === 'neubel'} handleClick={() => {setChart('neubel')}}/>
            </div>
            <ResponsiveContainer width="100%" height={450}>
                <LineChart data={getData()}
                           margin={{top: 5, right: 0, left: 20, bottom: 5}}>
                    <XAxis
                        dataKey="month"
                        interval="preserveStart"
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 20, right: 40 }}/>
                    <YAxis
                        orientation={"right"}
                        axisLine={false}
                        tickLine={false}
                        tickCount={5}
                        padding={{ bottom: 10 }}
                        domain={[0, 20]}
                        unit={'k'}
                        className={styles.hideOnMobile}
                    />
                    <Tooltip
                        separator=""
                        labelStyle={{fontSize: '10px', textAlign: 'left'}}
                        labelFormatter={(label) => { return `${label} '20`}}
                        contentStyle={{ backgroundColor: 'black', borderRadius: '5px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value) => { return [value.toFixed(3), ''] }}
                    />
                    <Line type="linear" dataKey={chart} stroke={getColor()} dot={false} activeDot={{r: 5}}/>
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    );
}