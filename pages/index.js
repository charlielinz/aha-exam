import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";
import useWindowWidth from "../hooks/useWindowWidth";

const Home = () => {
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const [keyword, setKeyword] = useState(() => "");
  const [pageSize, setPageSize] = useState(3);
  const handleSliderChange = (e) => {
    e.preventDefault();
    setPageSize(e.target.value);
  };
  const search = async (e) => {
    e.preventDefault();
    router.push(`/result?page=1&pageSize=${pageSize}&keyword=${keyword}`);
  };
  const [users, setUsers] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users/");
      const users = await res.json();
      setUsers(users.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex h-screen">
        <div className="w-20 bg-light">
          <div className="absolute top-[37px] left-6 flex max-w-fit flex-col gap-[43px]">
            <Navitems />
          </div>
        </div>
        <form
          onSubmit={search}
          className="mx-auto mt-[34px] mb-[87px] flex max-w-[725px] flex-col gap-[30px]"
        >
          <section>
            <p className="my-5 text-2xl leading-9">Search</p>
            <input
              placeholder="Keyword"
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              required
              className="box-border h-[60px] w-[725px] rounded-md border-[3px] border-solid border-white border-opacity-50 bg-default pl-[18px] placeholder:text-[14px] placeholder:leading-[21px] focus:border-tutor focus:outline-none"
            ></input>
          </section>
          <section className="flex flex-col gap-5 border-y-[1px] border-white border-opacity-10 py-[30px]">
            <p className="text-2xl leading-9"># Of Results Per Page</p>
            <p className="space-x-[10px]">
              <span className="text-5xl font-bold leading-normal">
                {pageSize}
              </span>
              <span className="text-base leading-normal">results</span>
            </p>
            <input
              type="range"
              defaultValue={3}
              min={3}
              max={50}
              onChange={(e) => handleSliderChange(e)}
              className="relative z-10 h-2 w-[100%] rounded-full"
            ></input>
          </section>
          <section className="mt-auto">
            <button
              type="submit"
              className="w-[335px] rounded bg-white py-[13px] px-4 text-center text-sm font-bold leading-[14px] text-default hover:border-[1px] hover:border-solid hover:border-white hover:bg-default hover:text-white"
            >
              SEARCH
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
