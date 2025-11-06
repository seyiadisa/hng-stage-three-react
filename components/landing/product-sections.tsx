"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

import headphonesImage from "@/public/images/headphones.webp";
import speakersImage from "@/public/images/speakers.webp";
import earphonesImage from "@/public/images/earphones.webp";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

export default function ProductSections() {
  const products = [
    {
      name: "headphones",
      image: headphonesImage,
    },
    {
      name: "speakers",
      image: speakersImage,
    },
    {
      name: "earphones",
      image: earphonesImage,
    },
  ];
  return (
    <section className="pt-[52px] lg:pt-20">
      <ul className="flex w-full flex-col items-center gap-[68px] md:flex-row md:gap-2.5 lg:justify-center lg:gap-[30px]">
        {products.map((product, index) => (
          <Section key={index} product={product.name} image={product.image} />
        ))}
      </ul>
    </section>
  );
}

function Section({
  product,
  image,
}: {
  product: string;
  image: StaticImageData;
}) {
  const isTab = useIsTablet();
  const isMobile = useIsMobile();

  const isSmallScreen = isTab || isMobile;
  const scaleFactor = 0.675;

  const imgWidth = isSmallScreen ? image.width * scaleFactor : image.width;
  const imgHeight = isSmallScreen ? image.height * scaleFactor : image.height;

  return (
    <li className="bg-primary-foreground relative flex h-[165px] w-full flex-col items-center justify-end gap-4 rounded-md pb-[22px] uppercase md:flex-1 lg:h-[204px] lg:w-auto">
      <Image
        src={image}
        width={imgWidth}
        height={imgHeight}
        alt={`${product} image`}
        className="absolute top-0 -translate-y-1/2 object-contain"
      />
      <div
        style={{ width: imgWidth, top: `calc(${imgHeight / 2}px - 10px)` }}
        className="absolute h-3.5 rounded-full bg-black blur-[20px]"
      />
      <h1
        aria-label={"Shop " + product}
        className="leading-[100%] font-bold tracking-[1.07px]"
      >
        {product}
      </h1>
      <Link href={`/${product}`}>
        <Button variant={"ghost"} asChild>
          Shop
        </Button>
      </Link>
    </li>
  );
}
