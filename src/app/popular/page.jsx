"use client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeListScroller";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse(
      "top/anime",
      `page=${page}&limit=24`
    );
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Most Popular Anime #${page}`} />
      <div className="pb-2 bg-slate-600">
        <div className="relative px-4 overflow-hidden bg-slate-300 max-h-[1429px]">
          <AnimeList api={topAnime} />
        </div>
      </div>
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
