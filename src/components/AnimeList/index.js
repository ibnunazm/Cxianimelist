"use client"

import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && api.data.length > 0) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 20,
      });

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, [api.data]);

  const truncateTitle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 30) + '...';
    }
    return title;
  };

  return (
    <div ref={swiperRef} className="swiper-container relative px-4 overflow-hidden">
      <div className="pt-2 pb-5 flex swiper-wrapper bg-slate-300">
        {api.data.map((data) => (
          <div key={data.mal_id} className="swiper-slide">
            <Link href={`${data.mal_id}`} className="cursor-pointer">
              <div className="shadow-2xl rounded-lg hover:scale-105 hover:font-semibold">
                <div className="w-[250px] h-cover min-h-[300px]">
                  <Image
                    src={data.images.webp.image_url}
                    alt={truncateTitle(data.title)}
                    width={300}
                    height={420}
                    className="w-full h-[350px] object-cover border-2 border-slate-200 rounded-t-lg"
                  />
                </div>
                <div className="bg-slate-200 rounded-b-lg h-cover min-h-[95px] flex justify-center items-center">
                  <h3 className="text-black md:text-md text-sm text-center px-3 py-1">
                    {truncateTitle(data.title)}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
