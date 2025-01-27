"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navItems";

export default function NavSlider() {
  return (
    <Sheet>
      <SheetTrigger className="flex-center-center size-[38px] rounded-md border border-primary bg-white px-2 text-black">
        <Menu className="size-[18px] md:size-5" />
      </SheetTrigger>

      <SheetContent
        className="max-h-screen overflow-y-auto bg-white"
        id="custom-scrollbar"
        side="left"
      >
        <Link href="/" className="relative mb-8 block h-7 w-28 lg:h-7 lg:w-36">
          <Image
            fill
            src="/bubt_header_logo.png"
            alt="brand logo"
            className="size-full"
          />
        </Link>
        <Accordion type="single" collapsible>
          <Link href="/">
            <span className="leading-12 text-[11px] text-xs font-semibold uppercase hover:opacity-85 2xl:text-xs">
              Home
            </span>
          </Link>
          {navItems?.map((navItem, index) => (
            <div key={index}>
              <AccordionItem className="border-none" value={navItem.title}>
                <AccordionTrigger className="border-none">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase">
                      {navItem.title} {/* Corrected to title */}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="w-full">
                    {navItem.submenu.map((item, index) => (
                      <li key={index} className="my-3 w-full px-3">
                        <Link
                          className="block w-full text-xs hover:font-medium hover:text-black"
                          href={item.link}
                        >
                          {item.label} {/* Correctly display submenu label */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}

          <div className="mt-2 flex flex-col gap-5">
            <Link href="/alumni">
              <span className="leading-12 text-[11px] text-xs font-semibold uppercase hover:opacity-85 2xl:text-xs">
                Alumni
              </span>
            </Link>
            <Link href="/gallery">
              <span className="leading-12 text-[11px] text-xs font-semibold uppercase hover:opacity-85 2xl:text-xs">
                Gallery
              </span>
            </Link>
            <Link href="/contact">
              <span className="leading-12 text-[11px] text-xs font-semibold uppercase hover:opacity-85 2xl:text-xs">
                Contact
              </span>
            </Link>
          </div>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
