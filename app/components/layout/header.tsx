"use client";

import { useIsTablet } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
  const isTab = useIsTablet();

  return (
    <div className="bg-foreground w-screen">
      {isTab ? (
        <header className="flex items-center justify-between md:justify-start gap-[42px] px-6 py-8 md:px-0 md:mx-10 border-b border-white/[.104]">
          <Image src="/svg/menu.svg" width={16} height={15} alt="" />
          <div className="md:flex-1 flex items-center">
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
        <header className="flex items-center justify-between py-9 border-b border-white/20 mx-40">
          <Link href="/" className="">
            <Image
              src="/svg/audiophile.svg"
              width={143}
              height={25}
              alt="Audiophile text"
            />
          </Link>
          <nav>
            <ul className="flex items-center text-sm uppercase text-background gap-8 font-bold leading-6 tracking-[2px] *:hover:text-primary">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Headphones</Link>
              </li>
              <li>
                <Link href="/contact">Speakers</Link>
              </li>
              <li>
                <Link href="/contact">Earphones</Link>
              </li>
            </ul>
          </nav>
          <Image src="/svg/shopping-cart.svg" width={23} height={20} alt="" />
        </header>
      )}
    </div>
  );
}
