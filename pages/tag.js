import { useState, useEffect } from "react";
import Navitems from "../components/Navitems";

const Tag = () => {
  const [tags, setTags] = useState(() => []);
  useEffect(async () => {
    const res = await fetch("/api/tags");
    const tags = await res.json();
    setTags(tags);
  });
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-light w-20 h-screen">
          <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
            <Navitems />
          </div>
        </div>
        <div className="mx-auto mt-20 overflow-auto">
          <p className="sticky top-0 bg-home text-3xl leading-[45px] tracking-[0.25px] pb-3 mb-3">Tags</p>
          <div className="grid grid-cols-5 gap-x-6 gap-y-9">
            {tags.map((tag) => (
              <div className="flex flex-col">
                <div className="flex w-[150px] h-[150px] bg-white bg-opacity-5 rounded-[10px] mb-2.5">
                  <div className="self-end truncate text-2xl leading-9 font-bold mx-2.5 mb-3.5 py-[7px] px-[14px] border-4 border-white rounded-lg">{tag.name}</div>
                </div>
                <p className="max-w-[150px] truncate text-[14.9px] leading-[22.35px] tracking-[0.14px]">
                  {tag.name}
                </p>
                <p className="space-x text-[#B2B2B2] text-[11.17px] leading-[16.76px] tracking-[0.37px]">{tag.count} Results</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tag;
