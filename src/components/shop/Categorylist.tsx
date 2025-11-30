import React from "react";
import { Category } from "../../../sanity.types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Title } from "../ui/text";
import { set } from "sanity";

interface Props {
  categories: Category[];
  selectedCategories: string | null;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string | null>>;
}

const Categorylist = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  console.log(selectedCategories);
  return (
    <div>
      <Title className="text-lg px-5 mt-4">Products Category</Title>
      <div className="w-[400px]">
        <RadioGroup className="mt-2 px-4" value={selectedCategories || ""}>
          {categories?.map((i) => (
            <div
              key={i._id}
              className="flex items-center gap-1 cursor-pointer group"
              onClick={() => setSelectedCategories(i.slug?.current as string)}
            >
              <RadioGroupItem
                className="translate-y-0.5"
                id={i?.slug?.current}
                value={i.slug?.current as string}
              ></RadioGroupItem>
              <label className={`${selectedCategories === i.slug?.current ? "text-leniant":""} font-medium hovereffect cursor-pointer group-hover:text-leniant`}>
                {i.name}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default Categorylist;
