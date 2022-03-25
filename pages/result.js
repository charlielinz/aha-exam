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
      const keyword = router.query.keyword;
      const res = await fetch(`/api/users/keyword=${keyword}`);
      const results = await res.json();
      setResults(results.data);
    };
    fetchData();
  }, [router.query.keyword]);
  console.log(results)
  return (
    <div className="flex h-screen">
      <div className="bg-light w-20">
        <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
          <Navitems />
        </div>
      </div>
      <div className="relative mx-auto mt-[92px] px-8 overflow-auto">
        <p className="sticky top-0 bg-home pb-3 mb-3 text-3xl leading-[45px] tracking-[0.25px]">
          <span className="absolute z-10 -left-8 cursor-pointer">
            <Link href="/" passHref>
              <Image src={arrowLeft} width={13} height={21.7} />
            </Link>
          </span>
          <span>Results</span>
        </p>
        <div className="grid grid-cols-3 gap-[34px] min-w-[725px]">
          {results.length ? (
            results.map((result, index) => (
              <div key={index}>
                <div className="w-[219px] h-[146px] bg-white mb-3">
                  {/* <Image src={result.avatar} /> */}
                </div>
                <p className="max-w-[150px] truncate text-[14.9px] leading-[22.35px] tracking-[0.14px]">
                  {result.name}
                </p>
                <p className="space-x text-[#B2B2B2] text-[11.17px] leading-[16.76px] tracking-[0.37px]">
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
