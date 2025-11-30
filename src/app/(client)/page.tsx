import Categories from "@/components/Categories";
import Container from "@/components/Container";
import Homebanner from "@/components/Homebanner";
import PopularCategoryItems from "@/components/PopularCategory";
import Image from "next/image";
import { getProductsCategory } from "@/sanity/query";


export default async function Home() {
  const productCategory = await getProductsCategory(6)
  console.log(productCategory)
  return (
   <div className="mt-12">
    <Container className="min-h-screen lg:w-[80%] mx-auto">
      <Homebanner/>
      <Categories/>
      <PopularCategoryItems productCategory={productCategory}/>
    </Container>
   </div>
  );
}
