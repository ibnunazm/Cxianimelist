"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {

  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    let keyword = searchRef.current.value;

    if(!keyword) return;

    if(event.key === "Enter" || event.type === "click"){
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Anime"
        className="px-2 md:h-[35px] h-[30px] my-auto md:w-[400px] w-full rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-[3px] end-1.5" onClick={handleSearch}>
        <MagnifyingGlass size={28} className="hover:text-indigo-500"/>
      </button>
    </div>
  );
};

export default InputSearch;


