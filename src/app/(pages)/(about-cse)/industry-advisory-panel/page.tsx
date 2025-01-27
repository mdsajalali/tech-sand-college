import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover
        heading="Industry Advisory Panel"
        title="Industry Advisory Panel"
        subTitle="About CSE"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="mx-auto max-w-[860px] py-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            Industry <span className="text-primary">Advisory Panel:</span>
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
          <div>
            <p className="py-5 text-justify">
              Our department recently established an industrial advisory panel.
              Experienced personnel from selected industries are involved in
              this panel, and evaluate students’ current abilities, and then
              provide feedback and suggestions that would help improve their
              knowledge in the field. Supporting documents for this matter has
              been included in the Appendix 10.A. Details of the industry
              advisory panel has been stated below:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                <thead>
                  <tr className="bg-teal-500 text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                      Sl No.
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                      Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                      Designation
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                      Organization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100 hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Mr. Ajmat Iqbal
                    </td>
                    <td className="border border-gray-300 px-4 py-2">CEO</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Reve SystemS Ltd.
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Mr. Mahmud Hossain
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Managing Director
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Millennium Information Solution Limited
                    </td>
                  </tr>
                  <tr className="bg-gray-100 hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Mr. Mahbub Zaman
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Managing Director
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      DataSoft Ltd.
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Mr. Sabbir Ahmed
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Managing Director
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Devnet Ltd.
                    </td>
                  </tr>
                  <tr className="bg-gray-100 hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Mr. Shohorab Ahmed Chowdhury
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Managing Director
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Synesis IT Ltd.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
