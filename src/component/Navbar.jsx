import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Global/cartContext';

const Navbar = ({cartToggle}) => {

  const {shoppingCart} = useContext(cartContext);
  return (
 <nav>
   <ul className='left'>
    <li>
    <Link to="/">GOLDEN SHOP</Link>
    </li>
    </ul>
    <ul className='right'>
    {/* <li>
<Link to="cart">
  <span className='shoppingcart'>
  <i className="fas fa-cart-shopping"></i>
  <span className='cartcount'>{qty}</span>
  </span>
</Link>
    </li> */}
        <li onClick={cartToggle}><Link to="/cart"><span className="dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link></li>

    </ul>
</nav>
  )
}


export default Navbar