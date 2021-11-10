export default function greyGraph(state = {
        name: 'wholesaleSales',
        formattedName: 'Wholesale Sales',
    }, {type}){
        switch(type){            
            case 'GREY_RETAIL_SALES':
                return {
                    ...state,
                    name: 'retailSales',
                    formattedName: 'Retail Sales',
                }
            case 'GREY_WHOLESALE_SALES':
                return {
                    ...state,
                    name: 'wholesaleSales',
                    formattedName: 'Wholesale Sales',
                } 
            case 'GREY_UNITS_SOLD':
                return {
                    ...state,
                    name: 'unitsSold',
                    formattedName: 'Units Sold',
                }
            case 'GREY_RETAILER_MARGIN':
                return {
                    ...state,
                    name: 'retailerMargin',
                    formattedName: 'Retailer Margin',
                }
            default:
                return state;
        }
}