const Button = ({ text }) => {
  return (
    <div className="w-[335px] bg-white hover:bg-default rounded py-[13px] px-4 hover:border-[1px] hover:border-solid hover:border-white text-default hover:text-white font-bold text-sm leading-[14px] text-center">
      {text}
    </div>
  );
};

export default Button;
