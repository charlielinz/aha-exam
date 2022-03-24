import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="box-border w-[725px] h-[60px] bg-default rounded-md pl-[18px] border-[3px] border-solid border-white focus:border-tutor focus:outline-none border-opacity-50 placeholder:text-[14px] placeholder:leading-[21px]"
    ></input>
  );
};

export default Input;
