export const orders = JSON.parse(localstorage.getItem('orders')) || [];

export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}