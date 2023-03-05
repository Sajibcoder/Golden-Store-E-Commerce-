export const CartReducer = (state, action)=>
{

    const {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type){

    case 'ADD_TO_CART':
        const cheak = shoppingCart.find(product => product.id === action.id);
        if(cheak){
            return state;
        } else {
            product = action.product;
            product ['qty'] = 1;
            updatedQty = qty+1;
            updatedPrice =  totalPrice + product.price; 
            return {shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
        }
        break;

        case 'DELETE_PRODUCT':
            const filtered = shoppingCart.filter(cart => cart.id !== action.id);
            product = shoppingCart.find(cart => cart.id === action.id);
            updatedPrice = totalPrice - product.price * product.qty;
            updatedQty = qty - product.qty;
            return {shoppingCart: [...filtered], totalPrice: updatedPrice, message: '', qty: updatedQty}
            break;
        
        case 'INC':
            console.log('Inc run');
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            product.qty = product.qty + 1;
            updatedQty = qty + 1;
            updatedPrice = totalPrice + product.price;
            console.log(product, totalPrice);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', qty: updatedQty}
            break;

        case 'DEC': 
        product = shoppingCart.find(product => product.id === action.id);
        index = shoppingCart.findIndex(product => product.id === action.id);
       if(product.qty > 1){
           
       product.qty = product.qty - 1;
       updatedPrice = totalPrice - product.price;
       updatedQty = qty - 1;
       shoppingCart[index] = product;
      
       return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, message: '', qty: updatedQty};
       } else {
           return {shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', qty: qty}
       }
       break;

       case 'EMPTY':
        return {shoppingCart: [], totalPrice: 0, message: '', qty: 0}
        break;

        default:
      return state;
}
}