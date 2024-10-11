import Image from "next/image";
import React from "react";
import { Categories } from "@/components/sampleData/SampleData";


const Cards = () => {
  return (
    <div className="flex mx-auto gap-10 justify-around">
      {Categories.map((item, key) => {
        return (
          <div key={key} className="relative h-72 w-52">
            <Image
              src={item.img}
              alt={item.type}
              layout="fill" // Ensures the image fills the parent div
              objectFit="cover" // Ensures the image covers the entire div
              className="transition-all duration-300 group-hover:scale-125"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white m-3 rounded-lg p-2">
              <h1 className="text-center">{item.type}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
