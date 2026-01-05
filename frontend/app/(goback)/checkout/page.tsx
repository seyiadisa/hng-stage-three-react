import CheckoutForm from "@/components/checkout/form";
import CheckoutSummary from "@/components/checkout/summary";

export default function Checkout() {
  return (
    <main className="mb-[97px] flex flex-col items-stretch gap-8 md:mb-[116px] xl:flex-row xl:items-start xl:justify-center xl:gap-[30px]">
      <section className="rounded-md bg-white p-6 pb-8 md:px-7 md:pt-[30px] lg:px-12 lg:pt-[54px] lg:pb-12 xl:flex-2">
        <h1 className="text-h4 md:text-h3 mb-8 md:mb-[41px]">Checkout</h1>
        <div className="w-full">
          <CheckoutForm />
        </div>
      </section>
      <section className="rounded-md bg-white px-6 py-8 md:px-[33px] xl:flex-1">
        <h1 className="text-h4 mb-8">Summary</h1>
        <CheckoutSummary />
      </section>
    </main>
  );
}
