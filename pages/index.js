import Navitems from "../components/Navitems";
import Input from "../components/Input";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Profile from "../components/Profile";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Home({ profiles }) {
  const profileDatas = profiles.data;
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="flex">
        <div className="bg-light w-20 h-screen">
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
        {windowWidth >= 1440 ? <Profile profileDatas={profileDatas} /> : ""}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10"
  );
  const profiles = await res.json();
  return { props: { profiles } };
};
