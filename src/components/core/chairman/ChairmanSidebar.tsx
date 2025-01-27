import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChairmanSidebar() {
  const menuItems = [
    {
      text: "OBE - Outcome Based Education",
      image: "/gob.png",
      link: "/obe",
    },
    { text: "AML-LAB", image: "/aml2.png", link: "/research-field" },
    { text: "Research Area", image: "/ra1.png", link: "/research-field" },
    {
      text: "Published Article",
      image: "/pa.png",
      link: "/published-articles",
    },
    {
      text: "Capstone Projects",
      image: "/cp1.png",
      link: "/capstone-project",
    },
    {
      text: "CSE Office of Communication",
      image: "/com.png",
      link: "/cse-news",
    },
  ];

  return (
    <div className="space-y-4">
      {menuItems.map((item, index) => (
        <Link
          href={item?.link}
          key={index}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary bg-white p-1 text-gray-700 shadow-sm duration-300 hover:bg-primary hover:text-white"
        >
          <Image src={item.image} alt={item.text} width={40} height={40} />
          <p className="text-[16px] font-medium">{item.text}</p>
        </Link>
      ))}
    </div>
  );
}
