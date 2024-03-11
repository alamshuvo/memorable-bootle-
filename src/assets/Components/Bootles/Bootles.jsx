import { useEffect, useState } from "react";
import Bootle from "../Bootle/Bootle";
import './Bootles.css'


const Bootles = () => {
    const [bootles,setBootles]=useState([])
   useEffect(()=>{
    fetch('bootle.json')
    .then(res=>res.json())
    .then(data=> setBootles(data))
},[])
    return (
        <div>
            <h3>Bootles Here : {bootles.length}</h3>
          <div className="single-bottle-container">
          {
            bootles.map(bootle=><Bootle
                 key={bootle.id} 
                 bootle={bootle}>
                    
                 </Bootle>)
           }
          </div>
           
        </div>
    );
};

export default Bootles;