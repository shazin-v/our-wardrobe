/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";

type Props = {};

const SavedOrders = (props: Props) => {
  return (
    <>
      <div className="border-b-2 pb-10">
        <h2>Select a delivery address</h2>
        <p>
          Is the address you&apos;d like to use displayed below? If so, click
          the corresponding &quot;Deliver to this address&quot; button. Or you
          can enter a new delivery address.
        </p>

        <div className="flex gap-10">
          {/* TODO: impliment maping of address */}
          <div className="bg-[#fafafb] w-1/3">
            <div className="flex justify-between">
              <h3>John Doe</h3>
              <input type="checkbox" name="" id="" className="accent-black" />
            </div>
            <p>Springfield, IL 62701</p>
            <div className="flex justify-around">
              <button className="flex bg-[#f1f1f3] text-black px-5 p-2 mt-5 rounded-lg">
                <MdOutlineDeleteOutline />
                Edit
              </button>
              <button className="flex bg-[#faecec] text-[#fe8a7d] px-5 p-2 mt-5 rounded-lg">
                <TbEdit />
                Delete
              </button>
            </div>
          </div>
        </div>

        <button className="bg-black text-white px-5 p-2 mt-5 rounded-lg">
          Deliver here
        </button>
      </div>
    </>
  );
};

export default SavedOrders;
