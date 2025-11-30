interface headerdata {
  id: number;
  title: string;
  path: string;
}

export const headerData: headerdata[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Categories",
    path: "/popular-category/sharee-collection",
  },
  {
    id: 5,
    title: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
  },
  {
    id: 4,
    title: "About Us",
    path: "/about",
  },
];

export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Order procedure", href: "/order-procedure" },
  { title: "Delivery Rules", href: "/delivery-rules" },
  { title: "Return Policy", href: "/return-policy" },
];
export const categoriesData = [
  { title: "Terms and Conditions", href: "/terms-condition" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];
export const CategoryType = [
  { title: "Sharee Collection", value: "sharee collection" },
  { title: "Salowar Kameez", value: "salowar kameez" },
  { title: "Fashionable Shal", value: "fashionable shal" },
  { title: "Stylish Scarf", value: "stylish scarf" },
  { title: "Western Set", value: "western set" },
  { title: "Eid Collection", value: "eid collection" },
];

