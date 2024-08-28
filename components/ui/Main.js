"use client";

import React from "react";
import { ArrowBigRight } from 'lucide-react';

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h2 className=" mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Find The Most Suitable Professor Fast and Easy
        </h2>
        <br />
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Helping you find classes with the best professor reviews much more
          efficiently
        </h2>

        <div className="container flex flex-col items-center justify-center mx-auto">
          
          <video
            width="1000"
            height="240"
            autoPlay
            loop
            muted
            preload="none"
            className="object-cover object-center w-6/7 mb-10 "
          >
            <source src="vidd.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/dashboard/findprofessor"
          >
            <div className="flex text-lg" style={{width:"200px", fontSize:"20px"}}>
              <span className="justify-center">Take Me To Demo  </span>
              <ArrowBigRight />
            </div>
          </a>
        </div>
      </div>

      <br></br>
    </section>
  );
}
