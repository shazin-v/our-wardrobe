import React from "react";

type Props = {};

const NewAddress = (props: Props) => {
  return (
    <>
      <div className="my-10">
        <h3>Add a new address</h3>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Name"
              className="border-black rounded-lg border p-2 mb-5"
            />
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Mobile Number"
              className="border-black rounded-lg border p-2 mb-5"
            />
            <label htmlFor="">
              Flat, House no. , Building, Company, Apartment
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-black rounded-lg border p-2 mb-5"
            />
            <label htmlFor="">Area, Colony, Street, Sector, Village</label>
            <input
              type="text"
              name=""
              id=""
              className="border-black rounded-lg border p-2 mb-5"
            />
            <label htmlFor="">City</label>
            <select
              name=""
              id=""
              className="border-black rounded-lg border p-2 mb-5"
            >
              <option value="">Select City</option>
            </select>
            <label htmlFor="">Pin Code</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter Pin Code"
              className="border-black rounded-lg border p-2 mb-5"
            />
            <label htmlFor="">State</label>
            <select
              name=""
              id=""
              className="border-black rounded-lg border p-2 mb-5"
            >
              <option value="">Select State</option>
            </select>
          </div>

          <div className="gap-2 flex">
            <input type="checkbox" name="" id="" className="accent-black" />
            <label htmlFor="">use as my default address</label>
          </div>

          <button className="bg-black text-white px-5 p-2 mt-5 rounded-lg mb-5">
            Add New Address
          </button>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
