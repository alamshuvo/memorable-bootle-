
import './Bootle.css'
const Bootle = ({bootle,handleAddToCart}) => {
    console.log(bootle);
    const {name,img,price,seller,stock}=bootle
    return (
        <div className='bootle-container'>
            <h2>name: {name}</h2>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <p>Seller:{seller}</p>
            <p>Stock: {stock}</p>
            <button onClick={()=>handleAddToCart(bootle)}>Add to Cart</button>
        </div>
    );
};

export default Bootle;