"use client";

import { useIsTablet } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <AppHeader />;
};

export default function AppHeader({ className }: { className?: string }) {
  const isTabOrMobile = useIsTablet();

  return (
    <div className={cn("bg-foreground w-screen", className)}>
      {isTabOrMobile ? (
        <header className="flex items-center justify-between gap-[42px] border-b border-white/[.104] px-6 py-8 md:mx-10 md:justify-start md:px-0">
          <Image src="/svg/menu.svg" width={16} height={15} alt="" />
          <div className="flex items-center md:flex-1">
            <Link href="/" className="">
              <Image
                src="/svg/audiophile.svg"
                width={143}
                height={25}
                alt="Audiophile text"
              />
            </Link>
          </div>
          <Image src="/svg/shopping-cart.svg" width={23} height={20} alt="" />
        </header>
      ) : (
        <header className="mx-[165px] flex items-center justify-between border-b border-white/20 py-9">
          <Link href="/" className="">
            <Image
              src="/svg/audiophile.svg"
              width={143}
              height={25}
              alt="Audiophile text"
            />
          </Link>
          <nav>
            <ul className="text-background *:hover:text-primary flex items-center gap-8 text-sm leading-6 font-bold tracking-[2px] uppercase">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/headphones">Headphones</Link>
              </li>
              <li>
                <Link href="/speakers">Speakers</Link>
              </li>
              <li>
                <Link href="/earphones">Earphones</Link>
              </li>
            </ul>
          </nav>
          <Image src="/svg/shopping-cart.svg" width={23} height={20} alt="" />
        </header>
      )}
    </div>
  );
}
