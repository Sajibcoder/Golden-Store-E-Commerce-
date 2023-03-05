import React, {useContext} from 'react'
import { ProductContext } from '../Global/ProductContext'
import { cartContext } from '../Global/cartContext';
import Carousel from './Carousel';
import Middle from './Middle';
import Aboutus from './Aboutus';
import Footer from './Footer';

const Product = () => {

  const {products} = useContext(ProductContext);
  const {dispatch} = useContext(cartContext);

  return (
    <div className='contain'>
      <Carousel/>
      <Middle/>
      <h1>OUR PRODUCTS <img className='img-logo' src="https://media.tenor.com/vmtIGaEmXvQAAAAi/offerte-sconto.gif"  alt="" />OFF</h1>
     
    <div className='products'>
      {products.map((product)=> (
        <div className='product' key={product.id}>
          <div className='image'>
            <img src={product.image} alt="" />
            </div>
            <div className='details'>
              <div className='name'>
                {product.name}
                </div>
                <div className='price'>
                ${product.price}.00
                </div>
              </div>
<div className='add-cart' onClick={()=> dispatch({type: 'ADD_TO_CART', id: product.id, product})}>
  ADD TO CART
</div>
{product.productStatus === 'new' ? <div className="new">New</div>: ''}
{product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
          </div>

      ))}
    </div>

    <Aboutus/>
    <Footer/>
   </div>
  )
}

export default Product