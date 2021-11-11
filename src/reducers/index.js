import greyGraph from './greyGraph';
import blueGraph from './blueGraph';
import overviewReducer from './overviewReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    greyGraph: greyGraph,
    blueGraph: blueGraph,
    overview: overviewReducer
})

export default rootReducer;