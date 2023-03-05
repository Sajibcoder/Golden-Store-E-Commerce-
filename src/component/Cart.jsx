
import React, {useContext} from "react"
import StripeCheckout from "react-stripe-checkout"
import {cartContext} from "../Global/cartContext"

   
const Cart =()=> {

  const { dispatch, shoppingCart, totalPrice, qty } = useContext(cartContext);

  const handleToken = (token) => {

    
  };

  return (
    <div className="cartContainer">
      <div className="cartDetails">
        {shoppingCart.length ? shoppingCart.map(product => (
          <div className="cart" key={product.id}>
            <span className="cartImage"><img src={product.image} alt="" />
              <span className="imageCount">{product.qty}</span>
            </span>
            <span className="cartProductName">{product.name}</span>
            <span className="cartProductPrice">${product.price}.00</span>
            <span className="inc" onClick={() => dispatch({ type: 'INC', id: product.id })}><i className="fas fa-plus"></i></span>
            <span className="productQuantity">{product.qty}</span>
            <span className="dec" onClick={() => dispatch({ type: 'DEC', id: product.id })}><i className="fas fa-minus"></i></span>
            <span className="productTotalPrice">${product.qty * product.price}.00</span>
            <button onClick={() => dispatch({ type: 'DELETE_PRODUCT', id: product.id })} className="deleteCart"><i className="fas fa-trash-alt"></i></button>
          </div>
        )) : 'Yourr Cart is currently empty!'}

      </div>
      {shoppingCart.length ? <div className="cartSummary">
        <div className="summary">
          <h3>Order Summary</h3>
          <div className="totalItems">
            <div className="items">Total Items</div>
            <div className="itemsCount">{qty}.00</div>
          </div>
          <div className="totalPriceSection">
            <div className="justTitle">Total Price</div>
            <div className="itemsPrice">${totalPrice}.00</div>
          </div>
          <div className="stripSection">
            <StripeCheckout
              stripeKey="pk_test_51MeglKSIchqUraKNYBjKQTIkXHwtAsesrzNIVuVUGJE085IrfG8giCEnaTuvwSjm09pzMUzD1bMe0aooVlmSUwPZ00js8h0tQr"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={totalPrice * 100}
              name="all products in the cart" />
          </div>
        </div></div>
        : ''}


    </div>
  );
}

export default Cart;
