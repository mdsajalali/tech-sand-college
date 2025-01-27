import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";

export default function page() {
  const data = [
    { slNo: "01", type: "ICT Cell", description: "Yes", remarks: "-" },
    {
      slNo: "02",
      type: "Total Number of computers for students",
      description: "455",
      remarks: "Active",
    },
  ];

  return (
    <>
      <Cover
        heading="Career Guidance Office"
        title="Career Guidance"
        subTitle="Resources & Facilities"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full  pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            BUBT <span className="text-primary">Career Guidance:</span>
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

        <div className="p-4">
          <h1 className="mb-4 text-2xl font-semibold">
            Career Guidance Office of BUBT
          </h1>
          <p className="mb-4 text-sm text-gray-700">
            Bangladesh, as a developing nation, experiences one of the most
            unemployed countries in the world. Getting a suitable job or
            building the right career in the expected way is now-a-days very
            difficult due to the number one quandary, the unemployment problem.
            Emphasis has been placed on building skilled human resources by
            undertaking job-oriented academic programs, arranging internships,
            job placement, workshops, and facilitating opportunities to study
            abroad for higher education. Without imparting qualitative education
            and proper counseling, a fresh graduate may lose the right way to
            approach in getting a better livelihood and building a healthier
            career.
          </p>
          <p className="mb-4 text-sm text-gray-700">
            BUBT has made an attempt to analyze the importance of educating
            students through various missions of professional development
            activities by establishing the Career Guidance Office.
          </p>
          <p className="mb-4 text-sm text-gray-700">
            Career Guidance Office of Bangladesh University of Business and
            Technology (BUBT) empowers its students in relation to develop their
            careers by providing necessary career guidance services.
          </p>

          <h2 className="mb-4 text-xl font-semibold">
            The activities stated below are the major focus areas of Career
            Guidance Office of BUBT:
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Career Guidance</li>
            <li>Internship Placement</li>
            <li>Job Search & Job Placement</li>
            <li>Career Events & Photo Gallery</li>
            <li>Career Guidance Office Contact</li>
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table className="mb-10 min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-primary">
                <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                  SL NO.
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                  Type of The Equipment
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                  Description
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {item.slNo}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {item.type}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {item.description}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {item.remarks}
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
