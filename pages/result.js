import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth";
import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";

const Result = () => {
  const router = useRouter();
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
  }, [setUsers]);
  useEffect(() => {
    const fetchData = async () => {
      const keyword = `keyword=${router.query.keyword}`;
      const res = await fetch(`/api/users/${keyword}`);
      const results = await res.json();
      setResults(results.data);
    };
    fetchData();
  }, [setResults, router.query.keyword]);
  return (
    <div className="flex h-screen">
      <div className="bg-light w-20">
        <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
          <Navitems />
        </div>
      </div>
      <div className="mx-auto mt-[92px] overflow-auto">
        <p className="sticky top-0 bg-home pb-3 mb-3 text-3xl leading-[45px] tracking-[0.25px]">
          Results
        </p>
        <div className="grid grid-cols-3 gap-[34px]">
          {results.map((result, index) => (
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
          ))}
        </div>
      </div>
      <div className="h-screen overflow-auto">
        {windowWidth >= 1440 ? <Sidebar users={users} /> : ""}
      </div>
    </div>
  );
};

export default Result;
