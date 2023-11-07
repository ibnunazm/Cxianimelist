"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeListScroller = ({ api }) => {
  const truncateTitle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  return (
    <div className="pt-2 pb-5 flex flex-wrap gap-y-5 gap-x-3 justify-evenly items-center bg-slate-300">
      {api.data?.map((data) => (
        <div key={data.mal_id} className="">
          <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
            <div className="shadow-2xl rounded-lg hover:scale-105 hover:font-semibold">
              <div className="w-[250px] h-cover min-h-[300px]">
                <Image
                  src={data.images.webp.image_url}
                  alt={data.images.jpg.image_url}
                  width={300}
                  height={420}
                  className="w-full h-[350px] object-cover border-2 border-slate-200 rounded-t-lg"
                />
              </div>
              <div className="bg-slate-200 rounded-b-lg h-cover min-h-[95px] w-[250px] flex flex-wrap justify-center items-center">
                <h3 className="text-black md:text-md text-sm text-center px-3 py-1">
                  {truncateTitle(data.title)}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeListScroller;
