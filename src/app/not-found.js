"use client"

import { FileSearch } from "@phosphor-icons/react";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto w-full min-h-screen flex justify-center items-center pb-28 bg-slate-200 overflow-hidden">
      <div className="flex justify-center items-center flex-col gap-6">
        <FileSearch size={110} className="text-slate-800"/>
        <div className="md:text-2xl sm:text-lg text-md font-bold text-slate-800">404 | This page could not be found.</div>
        <Link href="/" className="md:text-2xl sm:text-lg text-md font-bold bg-slate-800 text-slate-200 py-2 px-6 rounded-xl">Back to Anime List</Link>
      </div>
    </div>
  );
};

export default NotFound;
