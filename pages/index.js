import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";
import useWindowWidth from "../hooks/useWindowWidth";

const Home = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const getAdjustedValue = (value) => {
    if (0 <= value && value < 6) {
      return 0;
    } else if (6 <= value && value < 18) {
      return 12;
    } else if (18 <= value && value < 30) {
      return 24;
    } else if (30 <= value && value < 42) {
      return 36;
    } else if (42 <= value && value <= 55) {
      return 48;
    } else if (55 <= value && value <= 63) {
      return 63;
    }
  };
  const handleOnChange = (e) => {
    setSliderValue(e.target.value);
  };
  const handleOnMouseUp = (e) => {
    setSliderValue(getAdjustedValue(e.target.value));
  };
  const router = useRouter();
  const [keyword, setKeyword] = useState(() => "");
  const getPageSize = (sliderValue) => {
    if (0 <= sliderValue && sliderValue < 6) {
      return 3;
    } else if (6 <= sliderValue && sliderValue < 18) {
      return 6;
    } else if (18 <= sliderValue && sliderValue < 30) {
      return 9;
    } else if (30 <= sliderValue && sliderValue < 42) {
      return 12;
    } else if (42 <= sliderValue && sliderValue <= 55) {
      return 15;
    } else if (55 <= sliderValue && sliderValue <= 63) {
      return 50;
    }
  };
  const search = async (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams({
      page: 1,
      pageSize: getPageSize(sliderValue),
      keyword,
    });
    const url = `/results?${queryString}`;
    router.push(url);
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
  const windowWidth = useWindowWidth();
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
                {getPageSize(sliderValue)}
              </span>
              <span className="text-base leading-normal">results</span>
            </p>
            <div className="flex flex-col gap-[18px]">
              <input
                type="range"
                value={sliderValue}
                min={0}
                max={63}
                onMouseUp={(e) => handleOnMouseUp(e)}
                onChange={(e) => handleOnChange(e)}
                className="relative z-10 h-2 w-[100%] cursor-pointer rounded-full bg-white bg-opacity-50"
              ></input>
              <ul className="-ml-0.5 flex gap-[115px]">
                <li className="w-5 text-center">3</li>
                <li className="w-5 text-center">6</li>
                <li className="w-5 text-center">9</li>
                <li className="w-5 text-center">12</li>
                <li className="w-5 text-center">15</li>
                <li className="ml-auto w-5 text-center">50</li>
              </ul>
            </div>
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
