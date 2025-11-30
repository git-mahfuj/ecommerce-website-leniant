import { sanityFetch } from "../lib/live";
import { SINGLE_PAGE_PRODUCTS } from "./query";

const getProductsCategory = async (quantity: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;

    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });

    return data ?? [];
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

const getSingleProducts = async (slug : string) => {
  try {
    const product = await sanityFetch({
      query: SINGLE_PAGE_PRODUCTS,
      params: {
        slug,
      },
    });

    return product?.data || null;
  } catch (error) {
    console.log("Error while fetching data", error);
    return null;
  }
};

export { getProductsCategory, getSingleProducts };
