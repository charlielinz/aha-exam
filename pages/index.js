import Navitems from "../components/Navitems";

export default function Home() {
  return (
    <>
      <div className="bg-sidebar w-20 h-screen">
        <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
          <Navitems />
        </div>
      </div>
    </>
  );
}
