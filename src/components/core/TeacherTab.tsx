import { TabsProps } from "@/types";
import React from "react";



const TeacherTab = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`w-full border-l-4 px-4 py-2 text-left ${
            activeTab === tab
              ? "border-green-600 bg-primary text-white"
              : "border-transparent hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

export default TeacherTab;
