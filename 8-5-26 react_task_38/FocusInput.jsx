import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Enter text" />

      <button onClick={handleFocus}>
        Focus
      </button>
    </>
  );
}

export default FocusInput;