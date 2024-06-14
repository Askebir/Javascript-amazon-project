import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadCart, loadProductsFetch} from '../data/cart.js'
//import '../data/cart-class.js'
//import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";

 async function loadPage(){

    try{
        //throw 'error1';
        
    await loadProductsFetch();

    const value = await new Promise((resolve, reject)=>{
           loadCart(() =>{
                resolve('value');
           })
       })

    }catch(error){
        console.log('Unexpected error, please try again later.')

    }




    renderOrderSummary()
   renderPaymentSummary()



}
loadPage()
/* Promise.all([
     loadProductsFetch(),
    new Promise((resolve)=>{
            loadCart(() =>{
                 resolve();
            })
        })

]).then(() =>{
    console.log(values)
    renderOrderSummary()
   renderPaymentSummary()


})
 */



/* new Promise((resolve)=>{
    loadProducts(() =>{
        resolve('value1');
    }).then((value) => {
        console.log(value)


        return 
    }).then(()=>{
        renderOrderSummary()
        renderPaymentSummary()


    })

}) */

/* loadProducts(()=>{
loadCart(()=>{
    renderOrderSummary()
    renderPaymentSummary()

})
 

});
*/