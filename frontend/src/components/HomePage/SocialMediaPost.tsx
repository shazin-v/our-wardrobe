import React from "react";
import { socialpost } from "../sampleData/SampleData";

type Props = {};

const SocialMediaPost = (props: Props) => {
  return (
    <div className="py-20">
      <h2 className="text-center">Our instagram stories</h2>
      <div className="flex justify-around gap-4">
        {socialpost.map((post, index) => (
          <div
            key={index}
            className="relative group w-64 h-64 overflow-hidden rounded-lg"
          >
            {/* Image Box */}
            <div className="w-full h-full">
              <img
                src={post.img}
                alt={post.name}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay */}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              {/* Social Media Icon */}
              <post.icon size={40} className="text-white" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaPost;
