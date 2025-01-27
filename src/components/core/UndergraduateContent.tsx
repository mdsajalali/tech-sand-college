"use client";
import React, { useState } from "react";
import Container from "../shared/Container";

export default function UndergraduateContent() {
  const [activeTab, setActiveTab] = useState("undergraduate-program");

  const tabs = [
    { name: "Undergraduate Program", key: "undergraduate-program" },
    { name: "Credit Hours", key: "credit-hours" },
    { name: "Program Curriculum", key: "program-curriculum" },
    { name: "Final-Year Design Project", key: "final-year-project" },
    { name: "Capstone Project", key: "capstone-project" },
  ];

  const contentMap: { [key: string]: string } = {
    "undergraduate-program":
      "The undergraduate program has a total of 154 credit hours, including 112 theory credits, 42 lab credits, and 6 credits for capstone projects.",
    "credit-hours":
      "The undergraduate program has a total of 154 credit hours, including 112 theory credits, 42 lab credits, and 6 credits for capstone projects.",
    "program-curriculum":
      "The curriculum focuses on theoretical knowledge and hands-on experience through laboratory courses and project-based learning.",
    "final-year-project":
      "The final-year design project helps students apply their learning to solve real-world problems in computer science and engineering.",
    "capstone-project":
      "The capstone project is a comprehensive assignment that allows students to showcase their technical skills and knowledge.",
  };

  return (
    <Container>
      <div className="flex min-h-screen flex-col py-10 sm:flex-row">
        {/* Sidebar */}
        <div className="w-full border-r border-gray-300 sm:w-1/4">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`cursor-pointer border-l-4 px-4 py-2 ${
                  activeTab === tab.key
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-gray-700 hover:text-primary"
                }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-full px-6 py-4 sm:w-3/4">
          <h2 className="mb-2 text-2xl font-semibold text-primary">
            {activeTab.replace(/-/g, " ").toUpperCase()}
          </h2>
          <hr className="mb-4 w-20 border-t-2 border-primary" />
          <p className="leading-relaxed text-gray-700">
            {contentMap[activeTab]}
          </p>
        </div>
      </div>
    </Container>
  );
}
