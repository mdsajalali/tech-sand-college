"use client";
import Cover from "@/components/shared/Cover";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Alumni Details",
    content: "This is the Alumni Details section.",
  },
  {
    id: 2,
    label: "AD HOC COMMITTEE",
    content: "This is the AD HOC COMMITTEE section.",
  },
  {
    id: 3,
    label: "Alumni Activity",
    content: "This is the Alumni Activity section.",
  },
];

export default function Alumni() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Cover
        heading="Alumni of CSE"
        title="Alumni"
        mainTitle="home"
        titleLink="/"
      />
      <div className="mx-auto max-w-5xl p-4">
        <div className="py-10">
          <h1 className="text-center text-2xl font-medium uppercase md:text-4xl">
            CSE Alumni Association
          </h1>
        </div>
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center border-b md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-semibold sm:text-base ${
                activeTab === tab.id
                  ? "border-b-2 border-teal-600 text-teal-600"
                  : "text-gray-600 hover:text-teal-500"
              } transition-all focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-10 mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"} text-gray-700`}
            >
              <p className="text-base sm:text-lg">{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
