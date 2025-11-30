import React from "react";
import { Title } from "../ui/text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface Props {
  selectedPrice: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const Pricelist = ({ selectedPrice, setSelectedPrice }: Props) => {
  const PriceValue = [
    {
      price: "Under 1000",
      value: "0-1000",
    },
    {
      price: "BDT1000-BDT1200",
      value: "1000-1200",
    },
    {
      price: "BDT1200-BDT1500",
      value: "1200-1500",
    },

    {
      price: "BDT1500-BDT1700",
      value: "1500-1700",
    },
    {
      price: "BDT1700-BDT1900",
      value: "1700-1900",
    },
  ];
  console.log(selectedPrice);
  return (
    <div>
      <Title className="text-lg px-4 mt-3">Price Range</Title>
      <div className="px-4 mt-2 w-[400px]">
        <RadioGroup value={selectedPrice || ""}>
          {PriceValue.map((i) => (
            <div
              key={i.price}
              className="flex items-center gap-1 group"
              id={i.value}
              onClick={() => setSelectedPrice(i.value as string)}
            >
              <RadioGroupItem
                value={i.value as string}
                className="cursor-pointer"
              ></RadioGroupItem>
              <label
                htmlFor=""
                className={` font-medium group-hover:text-leniant hovereffect cursor-pointer ${selectedPrice === i.value ? "text-leniant" : ""}`}
              >
                {i.price}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default Pricelist;
