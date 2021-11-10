import greyGraph from './greyGraph';
import blueGraph from './blueGraph';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    greyGraph: greyGraph,
    blueGraph: blueGraph
})

export default rootReducer;