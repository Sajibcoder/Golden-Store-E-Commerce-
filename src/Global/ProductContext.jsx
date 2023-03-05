import React, {createContext, useState} from 'react'
import bag1 from "../Photos/bag1.webp"
import bag2 from "../Photos/bag2.webp"
import bag3 from "../Photos/bag3.webp"
import bag4 from "../Photos/bag4.webp"
import bag5 from "../Photos/bag5.webp"
import bag6 from "../Photos/bag6.webp"
import bag7 from "../Photos/bag7.webp"
import bag8 from "../Photos/bag8.webp"
import bag9 from "../Photos/bag9.webp"
import bag10 from "../Photos/bag10.webp"
import bag11 from "../Photos/bag11.webp"
import bag12 from "../Photos/bag12.webp"



export const ProductContext= createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {id: 1, name: 'Women Sling Bag', price: 20, image: bag1},
{id: 2, name: 'Women Cotton Bag', price: 8, image: bag2},
    {id: 3, name: 'Women Leather Bag', price: 16, image: bag3},
  {id: 4, name: 'Women Tote Bag', price: 6, image: bag4},
    {id: 5, name: 'Stylish Hand Bag', price: 5, image: bag5},
    {id: 6, name: 'Office Hand Bag', price: 19, image: bag6},
{id: 7, name: ' Synthetic Bag', price: 22, image: bag7},
    {id: 8, name: 'Special Leather Bag', price: 26, image: bag8},
  {id: 9, name: 'Chery Hand Bag', price: 8, image: bag9},
    {id: 10, name: 'Women Bride Bag', price: 5, image: bag10},
    {id: 11, name: 'Women Bride Bag', price: 5, image: bag11},
    {id: 12, name: 'Women Bride Bag', price: 5, image: bag12},
  ])
  return (
    <ProductContext.Provider value={{products: [...products]}}>
     {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider