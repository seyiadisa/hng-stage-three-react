import { StaticImageData } from "next/image";

export type Product = {
  isNew: boolean;
  name: string;
  image: StaticImageData;
  price: number;
  details: string;
  features: string;
  inTheBox: {
    [key: string]: number;
  };
};

export type Products = {
  [key: string]: Product;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
};

export type Cart = CartItem[];
