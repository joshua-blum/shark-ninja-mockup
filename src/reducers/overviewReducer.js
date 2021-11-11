const productData = require('../stackline_frontend_assessment_data_2021.json');
const initialProductState = {...productData[0]};

export default function overviewReducer(state = {...initialProductState}, {type}){
    switch(type){
        case 'PRODUCT_OVERVIEW':
            return state;
        default:
            return state;
    }
}