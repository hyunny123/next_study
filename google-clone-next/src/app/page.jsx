import Image from "next/image";
import React from "react";
import { TbHomeSearch } from "react-icons/tb";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />
      {/* body */}
      <div className="flex flex-col items-center">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
      </div>
      <HomeSearch />
      {/* footer */}
    </>
  );
}
