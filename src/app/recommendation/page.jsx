"use client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeListScroller";
import { getNestedAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [recommendationAnime, setRecommendationAnime] = useState([]);

  const fetchData = async () => {
    let recommendationAnime = await getNestedAnimeResponse(
      "recommendations/anime",
      "entry"
    );
    recommendationAnime = { data: recommendationAnime.slice(1, 200) };
    setRecommendationAnime(recommendationAnime);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <HeaderMenu title={`Recommendation Anime`} />
      <div className="pb-2 bg-slate-600">
        <div className="relative px-4 overflow-hidden bg-slate-300 max-h-[8035px]">
          <AnimeList api={recommendationAnime} />
        </div>
      </div>
    </>
  );
};

export default Page;
