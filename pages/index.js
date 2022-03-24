import Navitems from "../components/Navitems";
import Input from "../components/Input";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min">
        <div className="bg-sidebar w-20 h-screen">
          <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
            <Navitems />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] max-w-[725px] mx-auto mt-[34px] mb-[87px]">
          <section>
            <p className="text-2xl leading-9 my-5">Search</p>
            <Input placeholder={"Keyword"} />
          </section>
          <section className="flex flex-col gap-5 py-[30px] border-y-[1px]">
            <p className="text-2xl leading-9"># Of Results Per Page</p>
            <p className="space-x-[10px]">
              <span className="font-bold text-5xl leading-normal">30</span>
              <span className="text-base leading-normal">results</span>
            </p>
            <Slider />
          </section>
          <section className="mt-auto">
            <Button text={"SEARCH"} />
          </section>
        </div>
      </div>
    </>
  );
}
