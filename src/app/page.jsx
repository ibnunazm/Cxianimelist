import AnimeList from "@/components/AnimeListSwiper";
import Header from "@/components/AnimeListSwiper/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "");

  return (
    <>
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header
          title={"Most Popular"}
          linkHref={"/popular"}
          linkTitle={"View More"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header
          title={"All Anime"}
          linkHref={"/popular"}
          linkTitle={"View More"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
