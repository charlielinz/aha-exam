import { useState, useEffect } from "react";
import Link from "next/link";
import Navitems from "../components/Navitems";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import useWindowWidth from "../hooks/useWindowWidth";

const Home = () => {
  const windowWidth = useWindowWidth();
  const search = async (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    const res = await fetch(
      `https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=${keyword}`
    );
    const searchResults = await res.json();
  };
  const [users, setUsers] = useState(() => []);
  useEffect(async () => {
    const res = await fetch("/api/users");
    const users = await res.json();
    setUsers(users.data);
  });
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-light w-20">
          <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
            <Navitems />
          </div>
        </div>
        <form
          onSubmit={search}
          className="flex flex-col gap-[30px] max-w-[725px] mx-auto mt-[34px] mb-[87px]"
        >
          <section>
            <p className="text-2xl leading-9 my-5">Search</p>
            <input
              placeholder="Keyword"
              type="text"
              id="keyword"
              name="keyword"
              required
              className="box-border w-[725px] h-[60px] bg-default rounded-md pl-[18px] border-[3px] border-solid border-white focus:border-tutor focus:outline-none border-opacity-50 placeholder:text-[14px] placeholder:leading-[21px]"
            ></input>
          </section>
          <section className="flex flex-col gap-5 py-[30px] border-y-[1px] border-white border-opacity-10">
            <p className="text-2xl leading-9"># Of Results Per Page</p>
            <p className="space-x-[10px]">
              <span className="font-bold text-5xl leading-normal">30</span>
              <span className="text-base leading-normal">results</span>
            </p>
            <Slider />
          </section>
          <section className="mt-auto">
            <button
              type="submit"
              className="w-[335px] bg-white hover:bg-default rounded py-[13px] px-4 hover:border-[1px] hover:border-solid hover:border-white text-default hover:text-white font-bold text-sm leading-[14px] text-center"
            >
              <Link href="/result">SEARCH</Link>
            </button>
          </section>
        </form>
        <div className="h-screen overflow-auto">
          {windowWidth >= 1440 ? <Sidebar users={users} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
