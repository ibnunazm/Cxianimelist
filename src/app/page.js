import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const topAnime = await response.json();
  return (
    <>
      {/* Anime Populer */}
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header
          title={"Most Popular"}
          linkHref={"/popular"}
          linkTitle={"View More"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
