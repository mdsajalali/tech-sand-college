"use client";

import Link from "next/link";
import NavItemsDropdown from "../core/nav/NavItemsDropdown";
import Container from "./Container";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/navItems";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 hidden bg-primary py-4 text-white shadow-lg xl:block">
      <Container>
        <div className="flex items-center justify-between gap-5 xl:gap-7">
          <Link href="/">
            <span className="leading-12 mt-1 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Home
            </span>
          </Link>
          {navItems?.map((item, idx) => (
            <NavItemsDropdown
              key={idx}
              item={item}
              trigger={
                <div className="flex gap-1">
                  <span className="leading-12 mt-1 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
                    {item.title}
                  </span>
                  <div className="relative flex size-5 items-center">
                    <ChevronDown size={15} />
                  </div>
                </div>
              }
            />
          ))}
          <Link href="/alumni">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Alumni
            </span>
          </Link>
          <Link href="/gallery">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Gallery
            </span>
          </Link>
          <Link href="/contact">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Contact
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
