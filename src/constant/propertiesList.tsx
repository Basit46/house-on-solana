import prop1 from "../assets/prop1.jpg";
import plan1 from "../assets/plan1.png";
import prop2 from "../assets/prop2.jpg";
import plan2 from "../assets/plan2.png";
import prop3 from "../assets/prop3.jpg";
import plan3 from "../assets/plan3.png";
import prop4 from "../assets/prop4.jpg";
import plan4 from "../assets/plan4.png";

export type propertyType = {
  id: number;
  name: string;
  desc: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  img: string;
  plan: string;
};

export const properties: propertyType[] = [
  {
    id: 1,
    name: "The Kubrick",
    desc: "Modern Prairie homes are characterized by their horizontal lines, low-pitched roofs, and integration with the surrounding landscape. They often have wide, overhanging eaves, and may incorporate elements such as cantilevered balconies and large windows to bring in natural light. In modern versions of the style, materials such as glass, steel, and concrete may be used alongside traditional wood and brick. Modern prairie style homes often emphasize open, flowing floor plans and a connection to nature.",
    address: "Plan 1269A, Arizona, USA",
    price: 100,
    bedrooms: 3,
    bathrooms: 3,
    area: 2117,
    img: prop1,
    plan: plan1,
  },
  {
    id: 2,
    name: "The Riverholme",
    desc: "This home is typical of the cottage style. In modern usage, a cottage is usually a modest, often cozy dwelling, typically in a rural or semi-rural location. However there are cottage-style dwellings in cities, and in places such as Canada the term exists with no connotations of size at all (cf. vicarage or hermitage). In the United Kingdom the term cottage also tends to denote rural dwellings of traditional build, although it can also be applied to dwellings of modern construction which are designed to resemble traditional ones.",
    address: "Plan 2230H, Arizona, USA",
    price: 120,
    bedrooms: 4,
    bathrooms: 3,
    area: 2577,
    img: prop2,
    plan: plan2,
  },
  {
    id: 3,
    name: "The Bernadino",
    desc: "For the best one story homes, you can’t miss the Bernadino. This home’s single-level layout gives you all the luxuries you could dream of wrapped in a beautiful modern farmhouse package. The front porch, with its stately pillars, will welcome guests to your home. It’s also the perfect place to hang lots of colorful baskets of flowers in the summer. With a couple of comfortable chairs, this is a front porch where you can enjoy afternoon coffee with the neighbors.",
    address: "Plan 1259, Arizona, USA",
    price: 80,
    bedrooms: 3,
    bathrooms: 3,
    area: 2495,
    img: prop3,
    plan: plan3,
  },
  {
    id: 4,
    name: "Vux Caprica",
    desc: "Modern Prairie homes are characterized by their horizontal lines, low-pitched roofs, and integration with the surrounding landscape. They often have wide, overhanging eaves, and may incorporate elements such as cantilevered balconies and large windows to bring in natural light. In modern versions of the style, materials such as glass, steel, and concrete may be used alongside traditional wood and brick. Modern prairie style homes often emphasize open, flowing floor plans and a connection to nature.",
    address: "Plan 1242, Arizona, USA",
    price: 70,
    bedrooms: 3,
    bathrooms: 3,
    area: 2479,
    img: prop4,
    plan: plan4,
  },
];
