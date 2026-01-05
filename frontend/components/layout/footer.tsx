import Image from "next/image";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-foreground flex w-screen flex-col items-center justify-center text-white">
      <div className="relative flex w-4/5 flex-col items-center justify-center gap-12 pt-[52px] pb-[38px] text-center md:w-full md:items-start md:gap-8 md:px-10 md:pt-[60px] md:pb-[46px] md:text-start lg:gap-9 lg:px-[165px] lg:pt-[75px] lg:pb-12">
        <div className="bg-primary absolute top-0 left-1/2 h-1 w-[101px] -translate-x-1/2 md:left-10 md:translate-x-0 lg:left-[165px]" />

        <div className="flex w-full flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Image
            src="/svg/audiophile.svg"
            alt="Audiophile text"
            width={143}
            height={25}
          />
          <nav>
            <ul className="text-background *:hover:text-primary flex flex-col items-center gap-4 text-sm leading-6 font-bold tracking-[2px] uppercase md:flex-row md:gap-[34px]">
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
        </div>

        <div className="flex flex-col gap-12 md:gap-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-14 lg:w-[55%]">
            <p className="leading-[25px] tracking-[0px] opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <p className="invisible hidden leading-[25px] tracking-[0px] opacity-50 lg:visible lg:block">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-between lg:contents">
            <div className="flex items-center gap-4 *:transition-opacity *:duration-150 *:hover:opacity-50">
              <Link href="https://web.facebook.com/seyi.adisa.165">
                <Image
                  src="/svg/facebook.svg"
                  alt="Facebook logo"
                  width={24}
                  height={24}
                  className=""
                />
              </Link>
              <Link href="https://x.com/SeyiAdisa1">
                <Image
                  src="/svg/twitter.svg"
                  alt="Twitter logo"
                  width={24}
                  height={19.5}
                />
              </Link>
              <Link href="https://www.instagram.com/seyiadisaa/">
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram logo"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
