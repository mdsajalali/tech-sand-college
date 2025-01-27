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
    {
      slNo: "06",
      type: "Network Connectivity",
      description: "Yes",
      remarks: "Active",
    },
    {
      slNo: "07",
      type: "Total Bandwidth Using",
      description: "100 Mbps",
      remarks: "Active",
    },
    {
      slNo: "08",
      type: "Wi-Fi (Area covered in sq. ft.)",
      description: "95000",
      remarks: "Active",
    },
    {
      slNo: "09",
      type: "Virtual Laboratory",
      description: "No",
      remarks: "-",
    },
    {
      slNo: "10",
      type: "Total number Independent Cyber Center",
      description: "No",
      remarks: "-",
    },
    {
      slNo: "11",
      type: "Wi-Fi Device",
      description: "18",
      remarks: "Active",
    },
    {
      slNo: "12",
      type: "Cisco Switch",
      description: "11",
      remarks: "Active",
    },
    { slNo: "13", type: "Router", description: "01", remarks: "Active" },
    {
      slNo: "14",
      type: "Microtik Router Board",
      description: "02",
      remarks: "Active",
    },
    {
      slNo: "15",
      type: "Server",
      description: "DB Server",
      remarks: "05",
    },
    {
      slNo: "16",
      type: "Normal Switch",
      description: "20",
      remarks: "Active",
    },
  ];

  return (
    <>
      <Cover
        heading="IT Services for Students"
        title="IT Services"
        subTitle="Resources & Facilities"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <div className="mx-auto w-full max-w-[850px] px-4 lg:px-2 xl:px-0">
        <div className="w-full pb-5 pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            <span className="text-primary">IT Services for Students:</span>
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

        <h1 className="pb-4 text-[16px]">
          The equipment required for the optimal functioning of each lab has
          been procured and are as follows:
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
