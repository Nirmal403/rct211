import React, { forwardRef } from "react";

const PinInput = forwardRef(({ singleInputHandler, 
    onBackspaceHandler }, ref) => {
    const handleKeyUp =(e)=>{
       if(e.keyCode===8 && !e.target.value){
        onBackspaceHandler(e);
       }
       else{
        singleInputHandler(e);
       }
    }
  
    return (
    <input ref={ref} maxLength={1}
    onKeyUp={handleKeyUp}
    // onChange={(e) => singleInputHandler(e)} 
     />
  );
});

export default PinInput;
