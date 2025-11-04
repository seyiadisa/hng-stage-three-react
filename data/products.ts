import { StaticImageData } from "next/image";

import xx99Img from "@/public/images/products/headphones-1.webp";
import headphonesImg2 from "@/public/images/products/headphones-2.webp";
import headphonesImg3 from "@/public/images/products/headphones-3.webp";

type Product = {
  [key: string]: {
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
};

export const products: Product = {
  xx99: {
    isNew: true,
    name: "XX99 Mark II Headphones",
    image: xx99Img,
    price: 2999,
    details:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: {
      "Headphone Unit": 1,
      "Replacement Earcups": 2,
      "User Manual": 1,
      "3.5mm 5m Audio Cable": 1,
      "Travel Bag": 1,
    },
  },
};
