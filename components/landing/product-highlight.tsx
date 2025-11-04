import highlightImg from "@/public/images/speaker-highlight.webp";
import tableImg from "@/public/images/speaker-table.webp";
import earphonesImg from "@/public/images/earphones-highlight.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProductHighlights() {
  return (
    <section>
      <div className="flex w-full flex-col gap-6 md:gap-8">
        <section className="bg-primary flex h-[600px] flex-col items-center justify-center gap-8 overflow-hidden rounded-md text-white md:h-[720px] md:gap-16 lg:h-[560px] lg:flex-row lg:justify-between lg:px-10 xl:px-[95px]">
          <div className="relative h-[207px] w-[172px] md:h-[237px] md:w-[197px] lg:top-[20%] lg:left-[5%] lg:h-[493px] lg:w-[410px]">
            <Image
              src={highlightImg}
              alt="Zx9 Speaker Product Image"
              className="relative z-20"
            />

            <div className="innermost absolute top-1/2 left-1/2 z-0 size-[279px] -translate-1/2 bg-[url(/svg/zx9-speaker-circle.svg)] bg-cover opacity-[20.21%] md:size-[472px]" />
            <div className="inner absolute top-1/2 left-1/2 z-0 size-80 -translate-1/2 bg-[url(/svg/zx9-speaker-circle.svg)] bg-cover opacity-[20.21%] md:size-[542px]" />
            <div className="outer absolute top-1/2 left-1/2 z-0 size-[558px] -translate-1/2 bg-[url(/svg/zx9-speaker-circle.svg)] bg-cover opacity-[20.21%] md:size-[944px]" />
          </div>
          <div className="flex flex-col items-center gap-6 px-6 text-center leading-[25px] tracking-[0px] *:z-20 lg:basis-2/5 lg:items-start lg:text-start">
            <h1 className="w-4/5 text-[36px] leading-10 font-bold tracking-[1.29px] uppercase md:w-1/2 md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              Zx9 Speaker
            </h1>
            <p className="opacity-75 md:w-1/2 lg:w-full">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button className="w-fit bg-black hover:bg-[#4C4C4C] md:mt-4">
              <Link href="/product/zx9">See Product</Link>
            </Button>
          </div>
        </section>

        <section className="bg-primary-foreground relative flex h-80 items-center">
          <div className="absolute h-full w-full overflow-hidden rounded-md">
            <Image
              src={tableImg}
              alt=""
              className="h-full w-full scale-x-[-1.2] scale-y-[1.2] object-cover object-[110%_center] grayscale md:scale-x-[-1.05] md:scale-y-[1.05] md:object-[0%_85%] lg:scale-x-[-1] lg:scale-y-[1] lg:object-[0%_90%]"
            />
          </div>
          {/* <div className="absolute h-full w-full rounded-md bg-black opacity-15" /> */}
          <div className="relative z-50 flex flex-col gap-8 px-6 md:px-[62px] lg:px-[95px]">
            <h1 className="text-[28px] leading-[100%] font-bold tracking-[2px] uppercase">
              Zx7 Speaker
            </h1>
            <Button variant={"outline"} className="bg-transparent">
              <Link href="/product/zx7">See Product</Link>
            </Button>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-6 *:h-[200px] md:flex-row md:gap-3 md:*:h-80 lg:gap-[30px]">
          <div className="h-full w-full shrink-0 overflow-hidden rounded-md md:basis-1/2">
            <Image
              src={earphonesImg}
              alt="YX1 Earphones Product Image"
              className="h-full w-full scale-120 object-cover grayscale"
            />
          </div>
          <div className="bg-primary-foreground flex w-full flex-col justify-center gap-8 rounded-md px-6 *:w-fit md:h-full md:basis-1/2 md:justify-center md:px-10 xl:px-[95px]">
            <h1 className="text-[28px] leading-[100%] font-bold tracking-[2px] uppercase">
              YX1 Earphones
            </h1>
            <Button variant={"outline"} className="bg-primary-foreground">
              <Link href="/product/yx1">See Product</Link>
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
