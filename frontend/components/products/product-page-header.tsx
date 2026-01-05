export default function ProductPageHeader({ title }: { title: string }) {
  return (
    <div className="bg-foreground flex h-[92px] items-center justify-center text-white uppercase lg:h-[239px]">
      <h1 className="text-h4">{title}</h1>
    </div>
  );
}
