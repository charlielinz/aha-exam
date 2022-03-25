import { useState, useEffect } from "react";
import Navitems from "../components/Navitems";

const Tag = () => {
  const [tags, setTags] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/tags");
      const tags = await res.json();
      setTags(tags);
    };
    fetchData();
  });
  return (
    <>
      <div className="flex h-screen">
        <div className="h-screen w-20 bg-light">
          <div className="absolute top-[37px] left-6 flex max-w-fit flex-col gap-[43px]">
            <Navitems />
          </div>
        </div>
        <div className="mx-auto mt-20 overflow-auto">
          <p className="sticky top-0 mb-3 bg-home pb-3 text-3xl leading-[45px] tracking-[0.25px]">
            Tags
          </p>
          <div className="grid grid-cols-5 gap-x-6 gap-y-9">
            {tags.map((tag, index) => (
              <div className="flex flex-col" key={index}>
                <div className="mb-2.5 flex h-[150px] w-[150px] rounded-[10px] bg-white bg-opacity-5">
                  <div className="mx-2.5 mb-3.5 self-end truncate rounded-lg border-4 border-white py-[7px] px-[14px] text-2xl font-bold leading-9">
                    {tag.name}
                  </div>
                </div>
                <p className="max-w-[150px] truncate text-[14.9px] leading-[22.35px] tracking-[0.14px]">
                  {tag.name}
                </p>
                <p className="space-x text-[11.17px] leading-[16.76px] tracking-[0.37px] text-[#B2B2B2]">
                  {tag.count} Results
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tag;
