import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function Page() {
     const notices = [
       {
         date: "April 16, 2021, 2:06 a.m.",
         notice: "CSE Day Bimester Section Wise Routine",
         pdfLink: "/bimester-section-wise-routine.pdf",
       },
       {
         date: "April 16, 2021, 2:06 a.m.",
         notice: "CSE Day Trimester Section Wise Routine",
         pdfLink: "/trimester-section-wise-routine.pdf",
       },
     ];
  return (
    <>
      <Cover
        heading="CSE Class Routine"
        title="All Class Routine"
        subTitle="Student"
        mainTitle="Home"
        titleLink="/"
      />
      <Container>
        <div className="pt-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            CSE All <span className="text-primary">Class Routine:</span>
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
        <div className="overflow-x-auto pb-10 pt-5">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-md">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase text-white">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase text-white">
                  Notice
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase text-white">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {notices.map((notice, index) => (
                <tr key={index} className="odd:bg-gray-50 hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {notice.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {notice.notice}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    <a
                      href={notice.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
