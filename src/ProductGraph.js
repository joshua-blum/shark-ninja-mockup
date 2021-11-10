import React from 'react';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line
} from 'recharts';
import {format, parseISO} from 'date-fns';
import {
    greyRetailSales,
    greyWholesaleSales,
    greyUnitsSold,
    greyRetailerMargin,
    blueRetailSales,
    blueWholesaleSales,
    blueUnitsSold,
    blueRetailerMargin
} from './actions';
import {useSelector, useDispatch} from 'react-redux';
const data = require('./stackline_frontend_assessment_data_2021.json');


export default function ProductGraph(){ 
    const dispatch = useDispatch();
    const greyGraph = useSelector((state) => state.greyGraph);
    const blueGraph = useSelector((state) => state.blueGraph);

    return (
        <>
        <h2>{blueGraph.formattedName}</h2>
        <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data[0].sales}>
                <Line type='natural' dataKey={blueGraph.name} dot={false} stroke='#44A7F6' strokeWidth={2} />
                <Line type='natural' dataKey={greyGraph.name} dot={false} stroke='#9AA6BE' strokeWidth={2} />
                <XAxis dataKey='weekEnding' axisLine={{stroke: '#e2e3e4'}} tick={{fill: '#A8B4C2'}} tickLine={false} tickFormatter={(str) => {
                    return format(parseISO(str), 'MMM').toUpperCase();
                }} interval={4} padding={{left: 30, right: 30}} />
                <YAxis hide={true} padding={{top: 50, bottom: 30}} />
                <Tooltip labelFormatter={(str) => {
                    return format(parseISO(str), 'MMMM dd yyyy')
                }}/>
            </LineChart>
        </ResponsiveContainer>
        <div className='button-list'>
        <button className='button blue' style={blueGraph.name === 'retailSales' ? {'color': '#062849'}:null} onClick={() => {dispatch(blueRetailSales())}}>Retail Sales</button>
        <button className='button blue' style={blueGraph.name === 'wholesaleSales' ? {'color': '#062849'}:null} onClick={() => {dispatch(blueWholesaleSales())}}>Wholesale Sales</button>
        <button className='button blue' style={blueGraph.name === 'unitsSold' ? {'color': '#062849'}:null} onClick={() => {dispatch(blueUnitsSold())}}>Units Sold</button>
        <button className='button blue' style={blueGraph.name === 'retailerMargin' ? {'color': '#062849'}:null} onClick={() => {dispatch(blueRetailerMargin())}}>Retailer Margin</button>
        <button className='button grey' style={greyGraph.name === 'retailSales' ? {'color':'#EFEFEF'}:null} onClick={() => dispatch(greyRetailSales())}>Retail Sales</button>
        <button className='button grey' style={greyGraph.name === 'wholesaleSales' ? {'color': '#EFEFEF'}:null} onClick={() => {dispatch(greyWholesaleSales())}}>Wholesale Sales</button>
        <button className='button grey' style={greyGraph.name === 'unitsSold' ? {'color': '#EFEFEF'}:null} onClick={() => {dispatch(greyUnitsSold())}}>Units Sold</button>
        <button className='button grey' style={greyGraph.name === 'retailerMargin' ? {'color': '#EFEFEF'}:null} onClick={() => {dispatch(greyRetailerMargin())}}>Retailer Margin</button>
        </div>
        </>
    )
}