import { useState } from "react";

function Filterbox(){
  const [productlist,setProduct] = useState(["Laptop","Mobile","Headphones","Keyboard","Mouse","Camera"]);
  const [list,setlist] = useState([]);

  function filtertext(){
    let a = document.getElementById("fil").value;
    if (a !== ""){
    let start =[]
    let middle = []
    productlist.forEach(element => {
      if(element.toLowerCase().startsWith(a.toLowerCase())){
        start.push(element);
      }else if(element.toLowerCase().includes(a.toLowerCase())){
        middle.push(element);
      }
      setlist([...start,...middle])
    });
  }else{
    setlist([])
  }
  }

  return(
    <>
    <ul>{productlist.map((ele) => <li>{ele}</li>)}</ul>
    <input type="text" id="fil" onChange={filtertext}></input>
    <ul>{list.map(ele => <li>{ele}</li>)}</ul>
    </>
  );
}

export default Filterbox;