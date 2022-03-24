import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";

const Result = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-light w-20">
        <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
          <Navitems />
        </div>
      </div>
      <div className="h-screen overflow-auto">
        {windowWidth >= 1440 ? <Sidebar friendsDatas={friendsDatas} /> : ""}
      </div>
    </div>
  );
};

export default Result;
