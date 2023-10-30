"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)

    }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Anime"
        className="px-2 h-[35px] my-auto md:w-[400px] w-full rounded"
        ref={searchRef}
      />
      <button className="absolute top-[3px] end-1.5" onClick={handleSearch}>
        <MagnifyingGlass size={28}/>
      </button>
    </div>
  );
};

export default InputSearch;
