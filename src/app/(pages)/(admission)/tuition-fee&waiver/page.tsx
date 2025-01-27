import Cover from "@/components/shared/Cover";
import React from "react";

export default function page() {
  return (
    <>
      <Cover
        heading="Tuition Fee & Waiver"
        title="Tuition Fee & Waiver"
        subTitle="Admission"
        subTitleLink="admission-information"
        mainTitle="Home"
        titleLink="/"
      />
      <div>
        <h1 className="pt-10 text-center text-2xl font-medium md:text-3xl">
          Tuition Fees of B.Sc. in CSE
        </h1>
        <div className="flex items-center justify-center bg-gray-50 pb-10">
          <div className="w-full max-w-2xl rounded-lg bg-white p-5 shadow-lg">
            {/* Regular Program Heading */}
            <h2 className="mb-6 rounded bg-primary py-2 text-center text-2xl font-semibold text-white">
              Regular Program
            </h2>

            {/* Table with Content */}
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Total Credits
                  </td>
                  <td className="px-4 py-2 text-gray-900">150</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Costs Per Credit
                  </td>
                  <td className="px-4 py-2 text-gray-900">Tk. 3,050</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Total Tuition Fees including Admission Fee Tk. 25,600
                  </td>
                  <td className="px-4 py-2 text-gray-900">Tk. 5,68,340</td>
                </tr>
              </tbody>
            </table>

            {/* Regular Program Heading */}
            <h2 className="mb-6 mt-5 rounded bg-primary py-2 text-center text-2xl font-semibold text-white">
              Diploma Holder's Program
            </h2>

            {/* Table with Content */}
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Total Credits
                  </td>
                  <td className="px-4 py-2 text-gray-900">135</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Costs Per Credit
                  </td>
                  <td className="px-4 py-2 text-gray-900">Tk. 1,400</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    Total Tuition fees including Admission fee Tk. 15,600
                  </td>
                  <td className="px-4 py-2 text-gray-900"> Tk. 2,94,840</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Fee Payment Procedure
        </h1>

        <section className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-4">
            {/* Section 1: Introduction */}
            <div>
              <h2 className="text-2xl font-medium">General Information</h2>
              <p className="text-gray-700">
                Tuition fees and semester fees are to be paid on a semester
                basis. Caution money for undergraduate programs is Tk. 3,000
                (refundable) and for that of graduate programs is Tk. 2,000
                (refundable).
              </p>
            </div>

            {/* Section 2: Payment Methods */}
            <div>
              <h2 className="text-2xl font-medium">Payment Methods</h2>
              <p className="text-gray-700">
                All payments should be made to the designated bank by pay
                order/cash in the prescribed Money Receipt taken from the
                Accounts section of BUBT.
              </p>
            </div>

            {/* Section 3: Payment Schedule */}
            <div>
              <h2 className="text-2xl font-medium">Payment Schedule</h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>New students:</strong> Total fees of the 1st semester
                  to be paid at the time of admission.
                </li>
                <li>
                  <strong>Existing students:</strong> 50% of the total semester
                  fees is to be paid at the time of registration and the rest
                  50% is payable within 30 days from the start of the classes.
                </li>
                <li>
                  A fine will be charged for failure to pay within the scheduled
                  date.
                </li>
                <li>
                  Students will not be allowed to sit for the Semester Final
                  Examination without clearance of all dues before the start of
                  the Examination.
                </li>
              </ul>
            </div>

            {/* Section 4: Scholarships and Waivers */}
            <div>
              <h2 className="text-2xl font-medium">
                Scholarships, Stipends, and Fee Waivers
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>6% of students:</strong> Scholarships, stipends, and
                  fee waivers are awarded on the basis of need and merit.
                </li>
                <li>
                  <strong>100% fee waiver:</strong> For the sons and daughters
                  of Freedom Fighters.
                </li>
                <li>
                  <strong>Undergraduate Programs:</strong> Special tuition fee
                  waiver from 25% to 100% based on GPA in SSC and HSC for the
                  first year (three semesters).
                </li>
                <li>
                  For subsequent semesters, tuition fee waiver is provided based
                  on examination results at BUBT.
                </li>
                <li>
                  Additional 20% tuition fee waiver for students from Dhaka
                  Commerce College and Principal Kazi Faruky School & College.
                </li>
                <li>
                  Tuition fee waiver is also available for siblings and spouses.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
