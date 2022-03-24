import { useState } from "react";
import Image from "next/image";

const Profile = ({ profileDatas }) => {
  const [isToggle, setIsToggle] = useState(true);
  const getFilterFunc = () => {
    switch (isToggle) {
      case true:
        return () => true;
      case false:
        return (profileData) => profileData.isFollowing == true;
    }
  };
  const getProfileDatas = () => [
    ...profileDatas.filter(getFilterFunc(isToggle)),
  ];

  return (
    <div className="w-[375px] h-screen bg-light">
      <section className="grid grid-cols-2 mt-8">
        <button
          onClick={() => setIsToggle(true)}
          className={`pb-3 border-b-2 border-solid text-center text-base font-bold tracking-[0.15px]
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
          className={`pb-3 border-b-2 border-solid text-center text-base font-bold tracking-[0.15px]
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
        {getProfileDatas().map((profileData, index) => (
          <div className="flex gap-4 items-center" key={index}>
            <div className="w-10 h-10 border-[1px] border-white rounded-[5px]">
              {/* <Image src={profileData.avater} width={40} height={40} /> */}
            </div>
            <div>
              <p className="tracking-[0.15px]">{profileData.name}</p>
              <p className="opacity-50 text-sm leading-[21px] tracking-[0.25px]">
                @{profileData.username}
              </p>
            </div>
            <div
              className={`ml-auto py-2 px-2.5 text-xs leading-[12px] rounded-[20px] ${
                profileData.isFollowing
                  ? "bg-white text-default"
                  : "border-[1px] border-white"
              }`}
            >
              {profileData.isFollowing ? "Following" : "Follow"}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
