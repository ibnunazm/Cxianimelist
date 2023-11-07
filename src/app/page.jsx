import AnimeListSwiper from "@/components/AnimeListSwiper";
import Header from "@/components/AnimeListSwiper/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce} from "../libs/api-libs";
import AnimeListScroller from "@/components/AnimeListScroller";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  // recommendationAnime = { data: recommendationAnime.slice(1, 50) };
  recommendationAnime = reproduce(recommendationAnime, 50);

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
        <div className="pb-2 bg-slate-600">
          <div className="relative px-4 overflow-hidden bg-slate-300 max-h-[1429px]">
            <AnimeListScroller api={recommendationAnime} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
