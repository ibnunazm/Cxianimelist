import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <div className="bg-slate-200">
      <div className="pt-4 px-4">
        <h1 className="text-slate-800 lg:text-2xl md:text-xl sm:text-xl text-lg font-bold">
          {anime.data.title} - {anime.data.year}
        </h1>
      </div>
      <div className="flex justify-center items-center py-4 w-full h-full">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
      <div className="pt-4 px-4 flex gap-2 text-slate-800 overflow-x-auto">
        <div className="w-32 flex flex-col justify-center items-center rounded border-2 border-slate-800 px-4 py-2 md:text-lg sm:text-md text-sm">
          <h3>RANK</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-slate-800 px-8 py-2 md:text-lg sm:text-md text-sm">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-slate-800 px-8 py-2 md:text-lg sm:text-md text-sm">
          <h3>MEMBERS</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-slate-800 px-8 py-2 md:text-lg sm:text-md text-sm">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-slate-800 px-8 py-2 md:text-lg sm:text-md text-sm">
          <h3>Popularity</h3>
          <p>{anime.data.popularity}</p>
        </div>
      </div>
      
      <div className="flex lg:flex-nowrap flex-wrap text-slate-800 w-full">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={300}
          height={420}
          className="w-10/12 max-w-[500px] max-h-[700px] min-h-[400px] min-w-[300px] px-4 pt-6 h-auto mx-auto rounded-xl"
        />
        <div className="flex flex-col w-full gap-4 px-6 py-6">
          <p className="lg:text-xl md:text-lg sm:text-md text-sm w-full text-left font-bold">Synopsis :</p>
          <p className="lg:text-xl md:text-lg sm:text-md text-sm w-full text-justify">
            {anime.data.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
