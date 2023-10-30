import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
      <div className="px-4 flex gap-3">
        {api.data.map((data) => (
          <div key={data.mal_id} className="swiper-slide">
            <Link href={`${data.mal_id}`} className="cursor-pointer">
              <div className="shadow-2xl">
                <div className="w-[250px] h-cover min-h-[300px]">
                  <Image
                    src={data.images.webp.image_url}
                    alt={data.title}
                    width={300}
                    height={420}
                    className="w-full h-[350px] object-cover rounded-t-lg"
                  />
                </div>
                <div className="bg-slate-400 rounded-b-lg h-cover min-h-[95px] flex justify-center items-center">
                  <h3 className="text-black font-bold md:text-md text-sm text-center px-3 py-1">
                    {data.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  );
};

export default AnimeList;
