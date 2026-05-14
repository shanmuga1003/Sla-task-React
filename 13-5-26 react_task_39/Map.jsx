import { useState } from "react";

function Map(){
  const [productlist,setProduct] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" },
    { id: 5, name: "Mouse" },
  ]);


  return(
    <div>
      <ul>{
        productlist.map((item) => <li key={item.id}>{item.name}</li>)
    }
      </ul>
    </div>
  );
}

export default Map;