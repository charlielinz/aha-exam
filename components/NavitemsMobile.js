import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import icon from "../public/fa-solid_pencil-ruler.svg";

const NavitemsMobile = () => {
  const router = useRouter();
  const getSVGClassName = (path) => {
    if (router.asPath === path) {
      return "";
    } else if (router.asPath.includes("/result") && path === "/") {
      return "";
    } else {
      return "opacity-40";
    }
  };
  const getTextClassName = (path) => {
    if (router.asPath === path) {
      return "";
    } else if (router.asPath.includes("/result") && path === "/") {
      return "";
    } else {
      return "invisible";
    }
  };
  return (
    <>
      <div className="flex h-20 items-center justify-center gap-[60px]">
        <Link href="/" passHref>
          <div className="flex cursor-pointer flex-col">
            <Image
              src={icon}
              alt="icon"
              className={`h-6 w-6 ${getSVGClassName("/")}`}
            />
            <p
              className={`text-xs leading-[18px] tracking-wide ${getTextClassName(
                "/"
              )}`}
            >
              Home
            </p>
          </div>
        </Link>
        <Link href="/tag" passHref>
          <div className="flex cursor-pointer flex-col">
            <Image
              src={icon}
              alt="icon"
              className={`h-6 w-6 ${getSVGClassName("/tag")}`}
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

export default NavitemsMobile;
