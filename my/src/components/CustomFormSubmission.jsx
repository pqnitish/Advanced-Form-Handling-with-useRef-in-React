import { useRef, useState } from "react";

function CustomFormSubmission(){
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const[error,setError] = useState("");
    function handleCustomForm(e){
        e.preventDefault();
        const formData ={
            inputFeild1:inputRef1.current.value,
            inputFeild2:inputRef1.current.value,
        }
        if(formData.inputFeild1 === ""){
            setError("please fill input feild 1");
            return 
        }
    }
    return(
       <form onSubmit={handleCustomForm}>
        <input ref={inputRef1} type="text" placeholder="Feild-1"/>
        <input  ref={inputRef2} type="text" placeholder="Feild-2"/>
        {error && (<p style={{color:"red"}}>{error}</p>)}
        <button type="submit">Submit</button>

       </form>
    )
}
export default CustomFormSubmission;