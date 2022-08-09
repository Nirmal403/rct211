import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useEffect } from "react";
import PinInput from "./PinInput";

const Pin = ({ length, setOtp }) => {
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const [inputData] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    inputData[index] = e.target.value;
    // console.log(inputData)

    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(inputData.join(""));
  };

  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputData[index] = e.target.value;
    // console.log(inputData)
    setOtp(inputData.join(""));
  };

  const handlePasteContent = (e) => {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);
    data.forEach((item, index) => {
      inputData[index] = item;

      inputRef.current[index].value = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  //   useEffect(() => {
  //     // console.log(inputRef);
  //   });

  // console.log(inputRef);
  return (
    <div onPaste={handlePasteContent}>
      {inputBoxLength.map((_, index) => {
        return (
          <PinInput
            ref={(HTMLElement) => {
              inputRef.current[index] = HTMLElement;
            }}
            key={index}
            singleInputHandler={(e) => changeHandler(e, index)}
            onBackspaceHandler={(e) => handleBackspace(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  setOtp: PropTypes.func,
};
