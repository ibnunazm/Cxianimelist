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
      <AnimeList api={recommendationAnime} />
    </>
  );
};

export default Page;
