import { useState } from "react";

function Noproduct(){
  const [productlist,setProduct] = useState([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Headphones" },
      { id: 4, name: "Keyboard" },
      { id: 5, name: "Mouse" }
    ]);
  
  
    return(
      <div>
        {productlist.length >0 ? <ul>{productlist.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul> : <h1>No Product Available</h1>}
        
      </div>
    );
  }

export default Noproduct;