"use client";

import FacultyCard from "@/components/core/faculty/FacultyCard";
import TabFilter from "@/components/core/faculty/TabFilter";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import { FacultyProps } from "@/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [facultyData, setFacultyData] = useState([]);
  const [activeTab, setActiveTab] = useState<string>("All");

  useEffect(() => {
    fetch("/faculty.json")
      .then((res) => res.json())
      .then((data) => setFacultyData(data))
      .catch((error) => console.error("Error fetching faculty data:", error));
  }, []);

  const tabs = [
    "All",
    "Professors",
    "Associate Professors",
    "Assistant Professors",
    "Lecturers",
  ];

  //   TODO: Tabs based data filter

  const filteredFaculty: FacultyProps[] =
    activeTab === "All"
      ? facultyData
      : facultyData.filter(
          (faculty: FacultyProps) => faculty.role === activeTab,
        );

  return (
    <>
      <Cover
        heading="Faculty Members"
        title="Faculty"
        subTitle="People"
        subTitleLink="/graduate-program"
        mainTitle="Home"
        titleLink="/"
      />

      <Container>
        <div className="p-4">
          <TabFilter
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="grid gap-4">
            {filteredFaculty.map((faculty: FacultyProps) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
