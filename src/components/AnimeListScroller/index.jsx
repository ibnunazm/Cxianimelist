"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeListScroller = ({ api }) => {
  const truncateTitle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 20) + "...";
    }
    return title;
  };

  return (
    <div className="pb-2 bg-slate-600">
      <div className="relative px-4 overflow-hidden bg-slate-300">
        <div className="pt-2 pb-5 flex flex-wrap gap-y-5 gap-x-3 justify-center items-center bg-slate-300">
          {api.data?.map((data) => (
            <div key={data.mal_id} className="">
              <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
                <div className="shadow-2xl rounded-lg hover:scale-105 hover:font-semibold">
                  <div className="md:w-[250px] sm:w-[210px] w-[150px] h-cover md:min-h-[300px] min-h-[100px]">
                    <Image
                      src={data.images.webp.image_url}
                      alt={data.images.jpg.image_url}
                      width={300}
                      height={420}
                      className="w-full md:h-[350px] sm:h-[300px] h-[210px] object-cover border-2 border-slate-200 rounded-t-lg"
                    />
                  </div>
                  <div className="bg-slate-200 rounded-b-lg h-cover md:min-h-[95px] min-h-[50px] md:w-[250px] sm:w-[210px] w-[150px] flex flex-wrap justify-center items-center">
                    <h3 className="text-black md:text-md text-xs text-center px-3 py-1">
                      {truncateTitle(data.title)}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeListScroller;
