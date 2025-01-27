import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChairmanSidebar() {
  const menuItems = [
    {
      text: "Science Group",
      image: "/gob.png",
      link: "/obe",
    },
    { text: "Arts Group", image: "/aml2.png", link: "/research-field" },
    { text: "Commerce Group", image: "/ra1.png", link: "/research-field" },
    {
      text: "Extracurricular Activities",
      image: "/pa.png",
      link: "/published-articles",
    },
    {
      text: "Research and Development",
      image: "/cp1.png",
      link: "/capstone-project",
    },
    {
      text: "Office of Communication",
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
