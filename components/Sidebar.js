import { useState } from "react";
import Image from "next/image";

const Profile = ({ users }) => {
  const [isToggle, setIsToggle] = useState(true);
  const getFilterFunc = () => {
    switch (isToggle) {
      case true:
        return () => true;
      case false:
        return (user) => user.isFollowing == true;
    }
  };
  const getUsers = () => [...users.filter(getFilterFunc(isToggle))];

  return (
    <div className="w-[375px] bg-light">
      <section className="sticky top-0 z-10 grid grid-cols-2 bg-light pt-8">
        <button
          onClick={() => setIsToggle(true)}
          className={`border-b-2 border-solid pb-3 text-center text-base font-bold tracking-[0.15px]
          ${
            isToggle
              ? "border-white"
              : "border-[#1F1F1F] text-[#929292] opacity-[87%]"
          }`}
        >
          Followers
        </button>
        <button
          onClick={() => setIsToggle(false)}
          className={`border-b-2 border-solid pb-3 text-center text-base font-bold tracking-[0.15px]
          ${
            isToggle
              ? "border-[#1F1F1F] text-[#929292] opacity-[87%]"
              : "border-white"
          }`}
        >
          Following
        </button>
      </section>
      <section className="flex flex-col gap-4 py-8 px-4">
        {getUsers().map((user, index) => (
          <div className="flex items-center gap-4" key={index}>
            <div className="h-10 w-10 rounded-[5px] border-[1px] border-white">
              {/* <Image src={user.avater} width={40} height={40} /> */}
            </div>
            <div>
              <p className="tracking-[0.15px]">{user.name}</p>
              <p className="text-sm leading-[21px] tracking-[0.25px] opacity-50">
                @{user.username}
              </p>
            </div>
            <div
              className={`ml-auto rounded-[20px] py-2 px-2.5 text-xs leading-[12px] ${
                user.isFollowing
                  ? "bg-white text-default"
                  : "border-[1px] border-white"
              }`}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
