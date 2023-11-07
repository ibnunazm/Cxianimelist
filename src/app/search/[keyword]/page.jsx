"use client";

import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeListScroller";
import Header from "@/components/AnimeListSwiper/Header";
import Pagination from "@/components/Utilities/Pagination";
import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchAnime = await getAnimeResponse(
        "anime",
        `q=${decodedKeyword}&page=${page}`
      );
      setSearchAnime(searchAnime);
    };
    fetchData();
  }, [page, decodedKeyword]);

  return (
    <>
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header title={`Search for ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
      <Pagination
        page={page}
        lastPage={searchAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
