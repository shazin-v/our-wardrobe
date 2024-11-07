import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testmonial } from "../sampleData/SampleData";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-20 mt-10 bg-[#fafafb]">
      <div className="container w-5/6 mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">What Our Customers Say</h2>
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              className="bg-[#f6f6f6] p-2 rounded-full hover:bg-gray-200"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
            <button
              aria-label="Next testimonial"
              className="bg-[#131118] text-white p-2 rounded-full hover:bg-gray-800"
            >
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testmonial.map((item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-start justify-between border rounded-lg shadow-md hover:shadow-lg transition-shadow"

            >
              <p className="text-gray-700 mb-4">{item.review}</p>
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={`Photo of ${item.name}`}
                  width={100}
                  height={100} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h6 className="font-semibold">{item.name}</h6>
                  <p className="text-sm text-gray-500">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
