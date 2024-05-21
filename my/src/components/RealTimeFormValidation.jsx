import { useRef, useState } from "react";

function RealTimeFormValidation() {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  function handleValidation() {
    setIsValid(inputRef.current.value.length >= 6);
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter at least 6 characters"
        style={{ borderColor: isValid ? "green" : "red" }}
        onChange={handleValidation}
      />
      {isValid ?(<p>input valid</p>) :(<p>input must contain at least 6 characters</p>)}
    </div>
  );
}
export default RealTimeFormValidation;
