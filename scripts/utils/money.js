export function formatCurrency(priceCentes){
    return (Math.round(priceCentes)/100).toFixed(2);
}

export default formatCurrency;