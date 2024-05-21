import { useRef } from "react";

function DynamicFormInputFocus() {
  const useRefInput1 = useRef(null);
  const useRefInput2 = useRef(null);
  const useRefInput3 = useRef(null);
  function handleInputFocus(e, ref) {
    if (e.key === "Tab") {
      e.preventDefault();
      ref.current.focus();
    }
  }
  return (
    <div>
      <input
        ref={useRefInput1}
        type="text"
        placeholder="Feild-1"
        onKeyDown={(e) => handleInputFocus(e, useRefInput2)}
      />
      <input
        ref={useRefInput2}
        type="text"
        placeholder="Feild-2"
        onKeyDown={(e) => handleInputFocus(e, useRefInput3)}
      />
      <input
        ref={useRefInput3}
        type="text"
        placeholder="Feild-3"
        onKeyDown={(e) => handleInputFocus(e, useRefInput1)}
      />
    </div>
  );
}
export default DynamicFormInputFocus;
