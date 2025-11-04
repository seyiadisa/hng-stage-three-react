import { Button } from "@/components/ui/button";
import AppHeader from "@/components/layout/header";
import bannerImg from "@/public/images/banner.webp";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative flex h-[600px] w-screen flex-col items-center justify-between bg-[#191919] md:h-[729px] lg:items-start lg:overflow-hidden"
    >
      <div className="absolute z-0 h-full w-full overflow-hidden mix-blend-lighten lg:top-3/5 lg:right-[15px] lg:size-auto lg:-translate-y-1/2 xl:right-[165px]">
        <Image
          src={bannerImg}
          alt=""
          className="h-full w-full scale-[155%] object-contain object-[center_80%] md:scale-100 md:object-cover md:object-[center_30%] lg:object-center xl:scale-[135%]"
        />
      </div>
      <div className="absolute z-10 h-full w-full bg-[#191919] opacity-75 lg:opacity-0" />

      <AppHeader className="z-50 bg-transparent" />

      <div className="z-30 flex w-4/5 grow flex-col items-center justify-center text-center text-white md:w-[45%] lg:w-3/5 lg:items-start lg:px-[165px] lg:text-start">
        <h1 className="text-overline mb-4 text-white/[.4964] md:mb-6">
          NEW PRODUCT
        </h1>
        <h2 className="md:text-h1 text-4xl leading-10 font-bold tracking-[1.29px] uppercase">
          XX99 Mark II HeadphoneS
        </h2>
        <p className="mt-6 mb-7 opacity-75 md:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button asChild>
          <Link href="/product/xx99ii">See Product</Link>
        </Button>
      </div>
    </section>
  );
}
