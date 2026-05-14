import { useState } from "react";
import "./Hover.css";

function ConditionalClass() {

  const [hovered, setHovered] = useState(null);

  const products = ["Laptop", "Mobile", "Mouse"];

  return (
    <ul>
      {products.map((item, index) => (
        <li
          key={index}

          className={
            hovered === index ? "highlight" : "normal"
          }

          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ConditionalClass;