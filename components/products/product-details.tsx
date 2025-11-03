import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ProductDetails({
  name,
  image,
  isNew = false,
  isReverse = false,
  children,
}: {
  name: string;
  image: string | StaticImageData;
  isNew?: boolean;
  isReverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-between gap-8 text-center md:gap-[52px] lg:gap-20 lg:text-start xl:gap-[125px]",
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="bg-primary-foreground relative flex h-[352px] w-full shrink-0 items-center justify-center overflow-hidden rounded-md px-[70px] py-[41px] lg:h-[456px] lg:w-[440px] lg:py-[68px] xl:h-[560px] xl:w-[540px]">
        <Image
          src={image}
          alt={`${name} product image`}
          className="h-full w-full object-contain"
        />
        <div className="absolute bottom-[50px] h-3.5 w-[165px] rounded-full bg-black blur-[20px]" />
      </div>

      <div className="flex w-full flex-col items-center lg:items-start">
        {isNew ? (
          <>
            <h1 className="text-overline text-primary">New Product</h1>
            <h2 className="text-h4 my-6 md:mt-4 md:mb-8 lg:w-4/5">{name}</h2>
          </>
        ) : (
          <h1 className="text-h4 mb-6 md:mb-8 lg:w-4/5">{name}</h1>
        )}
        <p className="text-body mb-6 w-11/12 opacity-50 md:w-5/6 lg:mb-10 lg:w-full">
          {children}
        </p>
        <Button>See Product</Button>
      </div>
    </section>
  );
}
