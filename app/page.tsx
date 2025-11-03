import Banner from "@/components/landing/banner";
import ProductHighlights from "@/components/landing/product-highlight";
import ProductSections from "@/components/landing/product-sections";
import Tagline from "@/components/landing/tagline";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mt-[92px] px-6 md:mt-[148px] md:px-10 lg:mt-[200px] lg:px-[120px] xl:px-[165px]">
        <ProductSections />
      </div>
      <div className="mt-[120px] px-6 md:mt-24 md:px-10 lg:mt-[168px] lg:px-[120px] xl:px-[165px]">
        <ProductHighlights />
      </div>
      <div className="my-[120px] px-6 md:my-24 md:px-10 lg:my-[200px] lg:px-[120px] xl:px-[165px]">
        <Tagline />
      </div>
    </>
  );
}
