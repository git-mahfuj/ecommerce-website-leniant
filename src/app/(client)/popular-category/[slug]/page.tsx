import React from "react";
import { Category} from "../../../../../sanity.types";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getProductsCategory } from "@/sanity/query";
import PopularProductsList from "@/components/PopularProductsList";

const PopularPageSlug = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const PopularCategoryItems = await getProductsCategory(6)

  return (
    <div className="mt-6">
      <Container >
        <Title className="text-lg px-4 lg:text-2xl lg:text-center">
          Products by Category : <span className="text-leniant">{slug && slug}</span>
        </Title>
        <div className="lg:px-5">
        <PopularProductsList popularcategory={PopularCategoryItems} slug={slug}/>
        </div>
      </Container>
    </div>
  );
};

export default PopularPageSlug;
