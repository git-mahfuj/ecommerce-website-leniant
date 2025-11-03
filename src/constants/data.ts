
interface headerdata {
  id: number;
  title: string;
  path: string;
}

const headerData: headerdata[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Categories",
    path: "/categories",
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact us",
  },
  {
    id: 4,
    title: "About Us",
    path: "/about us",
  },
  {
    id: 5,
    title: "Shop",
    path: "/shop",
  },
];

export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Order procedure", href: "/order" },
  { title: "Delivery Rules", href: "/delivery" },
  { title: "Return Policy", href: "/return" },
];
export const categoriesData = [
  { title: "Terms and Conditions", href: "terms" },
  { title: "Privacy Policy", href: "privacy" },
];
export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];

export { headerData};
