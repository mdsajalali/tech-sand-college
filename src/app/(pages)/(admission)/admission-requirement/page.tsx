import Cover from "@/components/shared/Cover";
import React from "react";

export default function page() {
  return (
    <>
      <Cover
        heading="Admission Requirements"
        title="Admission Requirements"
        subTitle="Admission"
        subTitleLink="admission-information"
        mainTitle="Home"
        titleLink="/"
      />
      <section className="bg-gray-100 py-10">
        <div className="mx-auto max-w-screen-lg px-4">
          <h1 className="mb-8 text-center text-3xl font-semibold text-gray-800">
            Admission Requirements & Procedure for B.Sc. in Computer Science and
            Engineering (CSE)
          </h1>

          <div className="mb-10 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Admission Requirements for B.Sc. in Computer Science and
              Engineering (CSE):
            </h2>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                For the HSC or Equivalent Level Students:
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Science background with Mathematics and Physics at HSC or
                  equivalent level.
                </li>
                <li>
                  GPA at least 2.50 or 2nd Division in SSC and HSC or equivalent
                  examinations; or
                </li>
                <li>
                  GPA at least 2.00 in either SSC or HSC examination, but the
                  total GPA in both must be at least 6.00;
                </li>
                <li>
                  Completed at least 5 subjects in ‘O’ Level and 2 subjects in
                  ‘A’ Level with at least B grade in 4 subjects and C grade in 3
                  subjects out of 7 subjects.
                </li>
                <li>
                  North American High School Diploma or International
                  Baccalaureate, or its equivalent.
                </li>
                <li>
                  For sons/daughters of Freedom Fighters, a total GPA of at
                  least 5.00 in both SSC and HSC examinations, with proof of
                  parentage as Freedom Fighter.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                For the Diploma (Engineering) Students:
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Three or four years Diploma in Engineering from Bangladesh
                  Technical Education Board (BTEB) with a CGPA of 2.5 out of
                  4.00, or
                </li>
                <li>
                  A Diploma recognized by BTEB with a CGPA of 2.5 out of 4.00 in
                  any engineering discipline from any recognized institute.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Admission Procedure for B.Sc. in Computer Science and Engineering
              (CSE):
            </h2>
            <p className="mb-4 text-gray-600">
              Admission form and prospectus are available at the admission
              office/reception desk. After verification of the necessary
              documents, the applicants are allowed to deposit the admission
              fees and sign on the application form to complete the admission
              process.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              The following documents are needed at the time of admission:
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>
                Two passport-size color photographs (studio lab print with white
                background for ID card).
              </li>
              <li>
                Photocopies of certificates and marksheets/transcripts of
                SSC/HSC or equivalent level, SSC/equivalent registration card,
                birth certificate/national ID card (one copy each).
              </li>
              <li>
                Original certificates, marksheets/transcripts, registration
                card, and birth certificate/national ID card must be produced
                for verification by the officer in charge of admission at BUBT.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
