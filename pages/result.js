import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import Navitems from "../components/Navitems";
import Sidebar from "../components/Sidebar";

const Result = () => {
  const windowWidth = useWindowWidth();
  const [users, setUsers] = useState(() => []);
  useEffect(async () => {
    const res = await fetch("/api/users");
    const users = await res.json();
    setUsers(users.data);
  });
  return (
    <div className="flex h-screen">
      <div className="bg-light w-20">
        <div className="absolute flex flex-col gap-[43px] max-w-fit top-[37px] left-6">
          <Navitems />
        </div>
      </div>
      <div className="h-screen ml-auto overflow-auto">
        {windowWidth >= 1440 ? <Sidebar users={users} /> : ""}
      </div>
    </div>
  );
};

export default Result;
