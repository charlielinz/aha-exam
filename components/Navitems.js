import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import icon from "../public/fa-solid_pencil-ruler.svg";

const Navitems = () => {
  const router = useRouter();
  const getSVGClassName = (path) => {
    if (router.asPath === path) {
      return "";
    } else if (router.asPath === "/result" && path === "/") {
      return "";
    } else {
      return "opacity-40";
    }
  };
  const getTextClassName = (path) => {
    if (router.asPath === path) {
      return "";
    } else if (router.asPath === "/result" && path === "/") {
      return "";
    } else {
      return "invisible";
    }
  };
  return (
    <>
      <p className="text-[13px] font-bold leading-[15px] tracking-tighter bg-gradient-to-r from-[#FF5C01] to-[#FFD25F] text-transparent bg-clip-text">
        <Link href="/">LOGO</Link>
      </p>
      <div className="flex flex-col gap-[22px] items-center">
        <Link href="/">
          <div className="flex flex-col cursor-pointer">
            <Image src={icon} className={`w-6 h-6 ${getSVGClassName("/")}`} />
            <p
              className={`text-xs leading-[18px] tracking-wide ${getTextClassName(
                "/"
              )}`}
            >
              Home
            </p>
          </div>
        </Link>
        <Link href="/tag">
          <div className="flex flex-col cursor-pointer">
            <Image
              src={icon}
              className={`w-6 h-6 ${getSVGClassName("/tag")}`}
            />
            <p
              className={`text-xs leading-[18px] tracking-wide ${getTextClassName(
                "/tag"
              )}`}
            >
              Tags
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navitems;
