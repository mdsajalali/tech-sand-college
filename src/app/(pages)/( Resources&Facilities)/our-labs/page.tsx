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
    {
      slNo: "03",
      type: "Total Number of computers for Teachers",
      description: "94",
      remarks: "Active",
    },
    {
      slNo: "04",
      type: "Total Number of computers for Non-Academic Administrative",
      description: "65",
      remarks: "Active",
    },
    {
      slNo: "05",
      type: "Total Number of computers",
      description: "614",
      remarks: "Active",
    },
  ];

  return (
    <>
      <Cover
        heading="Our Labs"
        title="Labs"
        subTitle="Resources & Facilities"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <div className="mx-auto w-full max-w-[850px] px-4 lg:px-2 xl:px-0">
        <div className="w-full pb-5 pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            <span className="text-primary">Lab Facilities:</span>
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

        <h1 className="pb-4 text-[16px] text-gray-700">
          Our laboratories are big enough to ensure the availability of
          computers for every student. Internet facilities are always available
          so that students can find necessary documents and references
          immediately and access their data while learning. Specifications of
          the computers are up-to-date to meet the demands of current
          situations. We have a networking laboratory, a microprocessor
          laboratory, an Android development laboratory, and a robotics
          laboratory. Apart from these, 2 computer labs are always open for
          students for learning and sharing educational documents or looking up
          any kind of research material. Every lab is configured with the latest
          hardware and contains colored printers. Each lab is assigned with an
          IT attendant who is able to troubleshoot and assist with other
          computer-related issues students might be facing. Our university is
          currently working on expanding our existing field laboratory approach.
        </h1>
        <h1 className="pb-4 text-[16px] text-gray-700">
          As practical knowledge is imperative to any educational program, we
          have a number of labs tailor made to a particular specialization with
          appropriate equipment, software and systems already present.
        </h1>

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
      </div>
    </>
  );
}
