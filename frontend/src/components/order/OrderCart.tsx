/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { sampleProducts } from "../sampleData/SampleData";
import { RiDeleteBin6Line } from "react-icons/ri";
import OrderSummary from "../common/OrderSummary";
import Image from "next/image";

type Props = {};

const OrderCart = (props: Props) => {
  return (
    <>
      <div className="flex justify-between mx-20 mt-10">
        {/* Checkout Section */}
        <div className="w-2/3">
          <h3 className="text-3xl mb-10">Checkout</h3>
          <div className="flex mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Products
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"></h3>
          </div>

          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-2/5">
                {/* Product */}
                <div className="w-20">
                  <Image
                    width={100}
                    height={100}
                    className="h-24"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <div className="flex flex-col  ml-4 flex-grow">
                  <span className="font-bold text-sm">{product.name}</span>

                  <span className="font-semibold text-gray-500 text-xs mt-2">
                    Size: {product.size}
                  </span>
                </div>
              </div>

              <span className="text-center w-1/5 font-semibold text-sm">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={product.quantity}
                  readOnly
                />

                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>

              <span className="text-center w-1/5 font-semibold text-sm">
                ${(product.price * product.quantity).toFixed(2)}
              </span>

              <span className="flex justify-center w-1/5 cursor-pointer">
                <RiDeleteBin6Line color="red" size={25} />
              </span>
            </div>
          ))}
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default OrderCart;
