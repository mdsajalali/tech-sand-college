"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";

type DataItem = {
  id: number;
  type: string;
  description: string;
  remarks: string;
};

const dataSets: Record<string, DataItem[]> = {
  "35": [
    { id: 1, type: "ICT Cell", description: "Yes", remarks: "-" },
    {
      id: 2,
      type: "Total Number of computers for students",
      description: "455",
      remarks: "Active",
    },
  ],
  "36": [
    {
      id: 3,
      type: "Total Number of computers for Teachers",
      description: "94",
      remarks: "Active",
    },
    {
      id: 4,
      type: "Total Number of computers for Non-Academic Administrative",
      description: "65",
      remarks: "Active",
    },
  ],
  "37": [
    {
      id: 5,
      type: "Network Connectivity",
      description: "Yes",
      remarks: "Active",
    },
    {
      id: 6,
      type: "Total Bandwidth Using",
      description: "100 Mbps",
      remarks: "Active",
    },
  ],
  all: [
    { id: 1, type: "ICT Cell", description: "Yes", remarks: "-" },
    {
      id: 2,
      type: "Total Number of computers for students",
      description: "455",
      remarks: "Active",
    },
    {
      id: 3,
      type: "Total Number of computers for Teachers",
      description: "94",
      remarks: "Active",
    },
    {
      id: 4,
      type: "Total Number of computers for Non-Academic Administrative",
      description: "65",
      remarks: "Active",
    },
    {
      id: 5,
      type: "Network Connectivity",
      description: "Yes",
      remarks: "Active",
    },
    {
      id: 6,
      type: "Total Bandwidth Using",
      description: "100 Mbps",
      remarks: "Active",
    },
  ],
};

export default function page() {
  const [activeData, setActiveData] = useState<string>("all");
  const [activeButton, setActiveButton] = useState<string>("all");

  const handleButtonClick = (key: string) => {
    setActiveData(key);
    setActiveButton(key);
  };
  return (
    <>
      <Cover
        heading="Capstone Projects"
        title="Capstone Projects"
        subTitle="Research"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full pb-5 pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            All Capstone <span className="text-primary">Projects:</span>
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

        <div className="mb-10 flex w-full max-w-6xl flex-col gap-6 lg:flex-row">
          <div className="flex flex-wrap gap-4 lg:flex-col">
            {["all", "35", "36", "37"].map((key) => (
              <button
                key={key}
                onClick={() => handleButtonClick(key)}
                className={`w-full rounded-lg px-4 py-2 font-semibold transition lg:w-auto ${
                  activeButton === key
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {key === "all" ? "All" : `Intake ${key}`}
              </button>
            ))}
          </div>

          {/* Table Display */}
          <div className="flex-1 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-200 text-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">SL NO.</th>
                  <th className="px-4 py-2 text-left">Type of Equipment</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {dataSets[activeData].map((item, index) => (
                  <tr key={item.id} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.type}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}
