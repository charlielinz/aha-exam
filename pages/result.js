import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";
import arrowLeft from "../public/arrow-left.png";

const Result = () => {
  const router = useRouter();
  const keyword = router.query.keyword;
  const windowWidth = useWindowWidth();
  const [users, setUsers] = useState(() => []);
  const [results, setResults] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users");
      const users = await res.json();
      setUsers(users.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const queryString = new URLSearchParams({ ...router.query, page: 1 });
      const url = `/api/users?${queryString}`;
      const res = await fetch(url);
      const results = await res.json();
      setResults(results.data);
    };
    fetchData();
  }, [router.query.keyword]);
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="hidden shrink-0 w-20 bg-light sm:block">
        <div className="absolute top-[37px] left-6 flex max-w-fit flex-col gap-[43px]">
          <Navitems />
        </div>
      </div>
      <div className="sm:hidden flex mx-auto w-full px-8 pt-4 pb-8 gap-5 text-2xl leading-9">
          <span className="pt-0.5 cursor-pointer">
            <Link href="/" passHref>
              <Image src={arrowLeft} width={13} height={21.7} />
            </Link>
          </span>
          <p>Home Page</p>
        </div>
      <div className="relative mx-auto w-full sm:mt-[92px] sm:overflow-auto px-8">
        <p className="sticky top-0 mb-3 bg-home pb-3 text-3xl leading-[45px] tracking-[0.25px]">
          <span className="hidden sm:block absolute -left-8 z-10 cursor-pointer">
            <Link href="/" passHref>
              <Image src={arrowLeft} width={13} height={21.7} />
            </Link>
          </span>
          <span>Results</span>
        </p>
        <div className="grid md:min-w-[500px] lg:min-w-[725px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[34px] pb-12">
          {results.length ? (
            results.map((result, index) => (
              <div key={index}>
                <div className="mb-3 h-[146px] w-full sm:w-[219px] bg-white">
                  {/* <Image src={result.avatar} /> */}
                </div>
                <p className="max-w-[150px] truncate text-[14.9px] leading-[22.35px] tracking-[0.14px]">
                  {result.name}
                </p>
                <p className="space-x text-[11.17px] leading-[16.76px] tracking-[0.37px] text-[#B2B2B2]">
                  by {result.username}
                </p>
              </div>
            ))
          ) : (
            <div>No results of keyword: {keyword}</div>
          )}
        </div>
      </div>
      <div className="h-screen overflow-auto">
        {windowWidth >= 1440 ? <Sidebar users={users} /> : ""}
      </div>
    </div>
  );
};

export default Result;
