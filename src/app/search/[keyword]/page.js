import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
const { keyword } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();
  return (
    <>
      {/* Anime Populer */}
      <section className="bg-slate-300 pt-4 relative overflow-x-hidden border-b-slate-800 border-b-2 shadow-xl">
        <Header
          title={`Search for ${keyword}...`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
