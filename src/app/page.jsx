import AnimeListSwiper from "@/components/AnimeListSwiper";
import Header from "@/components/AnimeListSwiper/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";
import AnimeListScroller from "@/components/AnimeListScroller";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationAnime = reproduce(recommendationAnime, 24);

  return (
    <>
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-4 shadow-xl">
        <Header
          title={"Most Popular"}
          linkHref={"/popular"}
          linkTitle={"View More"}
        />
        <AnimeListSwiper api={topAnime} />
      </section>
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header
          title={"Recommendation"}
          linkHref={"/recommendation"}
          linkTitle={"View More"}
        />
        <AnimeListScroller api={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
