"use client";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import { FacultyProps } from "@/types";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();

  const [facultyData, setFacultyData] = useState<FacultyProps>(null as any);

  useEffect(() => {
    if (id) {
      fetch("/faculty.json")
        .then((res) => res.json())
        .then((data) => {
          const faculty = data.find(
            (fac: any) => fac.id === parseInt(id as string),
          );
          setFacultyData(faculty);
        })
        .catch((error) => console.error("Error fetching faculty data:", error));
    }
  }, [id]);

  if (!facultyData) return <p>Loading...</p>;
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
          <div className="flex flex-col gap-4 md:flex-row">
            <img
              src={facultyData.image}
              alt={facultyData.name}
              className="h-32 w-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">{facultyData.name}</h1>
              <p>{facultyData.designation}</p>
              <p>{facultyData.department}</p>
              <p>Email: {facultyData.email}</p>
              <p>Office: {facultyData.office}</p>
              <p>Faculty Code: {facultyData.facultyCode}</p>
              <p>
                <strong>Research Area:</strong>{" "}
                {facultyData.researchArea || "N/A"}
              </p>
              <p>Profile: {facultyData.profile.join(", ")}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
