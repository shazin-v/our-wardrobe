import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testmonial } from "../sampleData/SampleData"; // Assuming this is the correct path to sample data


const Testimonial = () => {
  return (
    <div className="py-20">
      <div className="flex justify-around items-center mb-8">
        <h2 className="text-2xl font-semibold">What our Customers Say</h2>
        <div className="flex  gap-2">
          <IoIosArrowRoundBack size={25} className="bg-[#f6f6f6] p-1 rounded-full cursor-pointer" />
          <IoIosArrowRoundForward size={25} className="bg-[#131118] text-white p-1 rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testmonial.map((item, key) => (
          <div key={key} className="p-6 border rounded-lg shadow-lg bg-white">
            <p className="text-gray-600 mb-4">{item.review}</p>
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
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
  );
};

export default Testimonial;
