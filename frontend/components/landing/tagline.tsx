import Image from "next/image";
import taglineImg from "@/public/images/tagline.webp";

export default function Tagline() {
  return (
    <section>
      <div className="flex w-full flex-col items-center gap-10 text-center md:gap-16 lg:flex-row-reverse xl:gap-[125px]">
        <div className="h-[300px] w-full overflow-hidden rounded-md lg:h-[588px] lg:w-[540px] xl:shrink-0">
          <Image
            src={taglineImg}
            alt=""
            className="h-full w-full flex-1 scale-110 object-none object-[20%_15%] grayscale md:scale-[120%] md:object-[-20%_15%] lg:scale-[150%] lg:object-[25%_-100%] xl:scale-[175%] xl:object-[0%_-120%]"
          />
        </div>
        <div className="flex flex-col items-center gap-8 md:w-5/6 lg:text-start">
          <h1 className="text-[28px] leading-[100%] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-11 md:tracking-[1.43px]">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="w-[99%] leading-[25px] tracking-[0px] opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
