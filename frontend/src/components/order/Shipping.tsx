/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import OrderSummary from "../common/OrderSummary";
import Chain from "../common/Chain";
import SavedOrders from "./SavedOrders";
import NewAddress from "./NewAddress";


const Shipping = () => {
  return (
    <>
      <div className="flex justify-between mx-20 mt-10">
        <div className="w-2/3">
          <h3 className="text-3xl mb-10">Shipping Address</h3>
          <Chain />
          <SavedOrders />
          <NewAddress />
        </div>

        <OrderSummary />
      </div>
    </>
  );
};

export default Shipping;
