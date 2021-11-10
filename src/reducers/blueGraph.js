export default function blueGraph (state = {
    name: 'retailSales',
    formattedName: 'Retail Sales',
}, {type}){
    switch(type){            
        case 'BLUE_RETAIL_SALES':
            return {
                ...state,
                name: 'retailSales',
                formattedName: 'Retail Sales',
            }
        case 'BLUE_WHOLESALE_SALES':
            return {
                ...state,
                name: 'wholesaleSales',
                formattedName: 'Wholesale Sales',
            } 
        case 'BLUE_UNITS_SOLD':
            return {
                ...state,
                name: 'unitsSold',
                formattedName: 'Units Sold',
            }
        case 'BLUE_RETAILER_MARGIN':
            return {
                ...state,
                name: 'retailerMargin',
                formattedName: 'Retailer Margin',
            }
        default:
            return state;
    }
}