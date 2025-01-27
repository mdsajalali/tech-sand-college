"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "../shared/Container";
import { Calendar } from "lucide-react";
import { NewsItem } from "@/types";



const tabs = [
  { name: "All", key: "all" },
  { name: "News", key: "news" },
  { name: "Events", key: "events" },
  { name: "Conference", key: "conference" },
  { name: "Workshop", key: "workshop" },
];

const data: Record<string, NewsItem[]> = {
  all: [
    {
      title: "ICPC Dhaka Regional 2021 - BUBT",
      date: "Mon 08 Aug 2022",
      image: "/latest_news/one.jpg",
    },
    {
      title: "CSE Admission Information",
      date: "Wed 12 Apr 2023",
      image: "/latest_news/two.jpg",
    },
    {
      title: "Cyber Security - Prospects and Challenges",
      date: "Tue 20 Oct 2020",
      image: "/latest_news/three.jpg",
    },
    {
      title: "Workshop on Engineering Problem",
      date: "Thu 16 Mar 2023",
      image: "/latest_news/four.jpeg",
    },
  ],
  news: [
    {
      title: "ICPC Dhaka Regional 2021 - BUBT",
      date: "Mon 08 Aug 2022",
      image: "/latest_news/five.jpg",
    },
  ],
  events: [
    {
      title: "CSE Admission Information",
      date: "Wed 12 Apr 2023",
      image: "/latest_news/six.jpg",
    },
  ],
  conference: [
    {
      title: "Cyber Security - Prospects and Challenges",
      date: "Tue 20 Oct 2020",
      image: "/latest_news/one.jpg",
    },
  ],
  workshop: [
    {
      title: "Workshop on Engineering Problem",
      date: "Thu 16 Mar 2023",
      image: "/latest_news/eight.jpg",
    },
  ],
};

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState<keyof typeof data>("all");

  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left section for latest news */}
          <div className="w-full md:w-2/3">
            <h1 className="text-center text-3xl font-bold md:text-left">
              Latest News & Events
            </h1>
            <div className="my-2 flex items-center justify-center gap-2 md:justify-start">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={20}
                height={20}
              />
              <div className="h-[2px] w-16 bg-black/80" />
            </div>

            <div className="mb-6 flex space-x-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`border-b-2 px-4 py-2 font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "border-teal-500 text-teal-500"
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab.key as keyof typeof data)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <AnimatePresence>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {data[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="w-full overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full rounded-t-lg object-cover"
                    />
                    <div className="flex items-center justify-between gap-2 p-4">
                      <h2 className="mb-2 text-lg font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <p className="cursor-pointer pt-4 text-center font-semibold text-red-600">
                CSE Office of Communication &gt;
              </p>
            </AnimatePresence>
          </div>

          {/* Right section for notices */}
          <div className="w-full md:w-1/3">
            <h1 className="text-center text-3xl font-bold md:text-left">
              CSE Notice Board
            </h1>
            <div className="my-2 flex items-center justify-center gap-2 md:justify-start">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={20}
                height={20}
              />
              <div className="h-[2px] w-16 bg-black/80" />
            </div>

            <div className="my-6">
              {[...Array(4)].map((_, index) => (
                <div className="my-6" key={index}>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <h1 className="text-5xl font-bold text-primary">03</h1>
                    <p className="flex-1 text-[16px] md:text-base">
                      Notice on Late Registration Application Format (For the
                      Students)
                    </p>
                  </div>

                  <div className="my-4 flex flex-col gap-6 md:flex-row">
                    <div>
                      <h2 className="text-2xl font-medium">JUN</h2>
                      <div className="h-[3px] w-12 bg-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <Calendar />
                      <p className="text-sm md:text-base">
                        June 3, 2021, 12:50 p.m.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 w-full border-b border-dashed border-primary" />
                </div>
              ))}
            </div>
            <p className="cursor-pointer text-center font-semibold text-red-600 md:text-left">
              All Notice &gt;
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
