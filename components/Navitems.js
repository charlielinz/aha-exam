import Image from "next/image";
import icon from "../public/fa-solid_pencil-ruler.svg";

const Navitems = () => {
  return (
    <>
      <p className="text-[13px] font-bold leading-[15px] tracking-tighter bg-gradient-to-r from-[#FF5C01] to-[#FFD25F] text-transparent bg-clip-text">
        LOGO
      </p>
      <div className="flex flex-col gap-[22px] items-center">
        <div className="flex flex-col">
          <Image src={icon} className="w-6 h-6" />
          <p className="text-xs leading-[18px] tracking-wide">Home</p>
        </div>
        <div className="flex flex-col">
          <Image src={icon} className="w-6 h-6" />
          <p className="text-xs leading-[18px] tracking-wide">Tags</p>
        </div>
      </div>
    </>
  );
};

export default Navitems;
