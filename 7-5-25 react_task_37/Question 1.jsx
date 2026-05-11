import { useState } from "react";
function Livetext(){
  const [text,setText] = useState("");

  return(
    <>
      <h1>Live Preview : <span id="p">{text}</span></h1>
      <br></br>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  );
  
}

export default Livetext;