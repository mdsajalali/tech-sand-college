import { FacultyProps } from "@/types";
import Link from "next/link";

export default function FacultyCard({ faculty }: { faculty: FacultyProps }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-300 p-4 md:flex-row">
      {/* TODO: Image use */}
      <img
        src={faculty.image}
        alt={faculty.name}
        className="h-24 w-24 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{faculty.name}</h3>
        <p>{faculty.designation}</p>
        <p>{faculty.department}</p>
        <p>Faculty Code: {faculty.facultyCode}</p>
        <p>
          <strong>Research Area:</strong> {faculty.researchArea || "N/A"}
        </p>
        <Link href={`/faculty/${faculty.id}`} className="text-blue-500">
          View Details &raquo;
        </Link>
      </div>
    </div>
  );
}
