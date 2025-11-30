import React from "react";
import Priceformator from "./PriceFormattor";

interface Props {
  amount?: number | undefined;
  discount?: number | undefined;
  className?: string;
}

const Priceview = ({ amount, className, discount }: Props) => {
  return (
    <div className="flex items-center text-gray-600 gap-2 ">
      <del><Priceformator amount={amount} className={className} /></del>
      {amount && discount && (
        <Priceformator amount={discount} className={`text-leniant ${className}`} />
      )}
    </div>
  );
};

export default Priceview;
