"use client";
import { useState } from "react";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

export default function page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    {
      title: "2022",
      content: [
        { description: "This is the first section of 2022." },
        { description: "This is the second section of 2022." },
        { description: "This is the third section of 2022." },
      ],
    },
    {
      title: "2021",
      content: [
        { description: "This is the first section of 2021." },
        { description: "This is the second section of 2021." },
        { description: "This is the third section of 2021." },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Cover
        heading="Published Articles"
        title="Published Articles"
        subTitle="Research"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full pt-10 pb-5 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            Published <span className="text-primary">Articles</span>
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <Image
              src="/bubt-footer-logo.png"
              alt="bubt logo"
              width={30}
              height={30}
              priority
            />
            <div className="h-[2px] w-24 bg-black/80" />
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div
                className="flex cursor-pointer items-center justify-between bg-primary px-4 py-3"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                {activeIndex === index ? (
                  <Minus className="h-5 w-5 text-white" />
                ) : (
                  <Plus className="h-5 w-5 text-white" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50 px-4 py-4">
                  {item.content.map((contentItem, contentIndex) => (
                    <div
                      key={contentIndex}
                      className="mb-3 flex items-center gap-1"
                    >
                      <h4 className="text-sm font-semibold text-gray-800">
                        {contentIndex + 1} .
                      </h4>
                      <p className="text-sm text-gray-700">
                        {contentItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
