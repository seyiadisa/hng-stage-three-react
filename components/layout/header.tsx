"use client";

import { useEffect, useState } from "react";
import { useIsTablet } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const HeaderWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <AppHeader />;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export default function AppHeader({ className }: { className?: string }) {
  const isTabOrMobile = useIsTablet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className={cn("bg-foreground w-screen", className)}>
      {isTabOrMobile ? (
        <>
          <header className="flex items-center justify-between gap-[42px] border-b border-white/[.104] px-6 py-8 md:mx-10 md:justify-start md:px-0 lg:py-9">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
              className={cn(
                "flex items-center md:flex-1"
                // isMenuOpen && "invisible"
              )}
            >
              <Link href="/" className="">
                <Image
                  src="/svg/audiophile.svg"
                  width={143}
                  height={25}
                  alt="Audiophile"
                />
              </Link>
            </div>
            <Image
              src="/svg/shopping-cart.svg"
              width={23}
              height={20}
              alt="My Cart"
            />
          </header>
          <div
            className={cn(
              "fixed inset-x-0 top-[90px] z-100 h-[calc(100vh-90px)] bg-black px-6 py-14 text-white opacity-0 transition-opacity duration-300 ease-in-out md:px-10",
              isMenuOpen ? "opacity-100" : "pointer-events-none"
            )}
          >
            <nav>
              <ul className="text-subtitle *:hover:text-primary flex flex-col items-center gap-8 tracking-[2px]">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <header className="mx-[165px] flex items-center justify-between border-b border-white/20 py-9">
          <Link href="/" className="">
            <Image
              src="/svg/audiophile.svg"
              width={143}
              height={25}
              alt="Audiophile"
            />
          </Link>
          <nav>
            <ul className="text-background text-subtitle *:hover:text-primary flex items-center gap-8 tracking-[2px]">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Image
            src="/svg/shopping-cart.svg"
            width={23}
            height={20}
            alt="My Cart"
          />
        </header>
      )}
    </div>
  );
}
