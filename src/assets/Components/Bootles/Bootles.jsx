import { useEffect, useState } from "react";
import Bootle from "../Bootle/Bootle";
import './Bootles.css'


const Bootles = () => {
    const [bootles,setBootles]=useState([]);
    const [shopingCart,setShopingCart]=useState([])
   useEffect(()=>{
    fetch('bootle.json')
    .then(res=>res.json())
    .then(data=> setBootles(data))
},[])
const handleAddToCart=(bootle)=>{
  console.log(bootle);
  const newShoppingCart=[...shopingCart,bootle];
  setShopingCart(newShoppingCart);

}
    return (
        <div>
            <h3>Bootles Bootle Here : {bootles.length}</h3>
            <h4>Cart: {shopingCart.length}</h4>
          <div className="single-bottle-container">
          {
            bootles.map(bootle=><Bootle
                 key={bootle.id} 
                 bootle={bootle}
                 handleAddToCart={handleAddToCart}
                 >
                    
                 </Bootle>)
           }
          </div>
           
        </div>
    );
};

export default Bootles;