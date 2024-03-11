
import './Bootle.css'
const Bootle = ({bootle}) => {
    console.log(bootle);
    const {name,img,price,seller,stock}=bootle
    return (
        <div className='bootle-container'>
            <h2>name: {name}</h2>
            <img src={img} alt="" srcset="" />
            <p>Price : ${price}</p>
            <p>Seller:{seller}</p>
            <p>Stock: {stock}</p>
        </div>
    );
};

export default Bootle;