import AdmissionForm from "@/components/core/AdmissionForm";
import Cover from "@/components/shared/Cover";
import React from "react";

export default function page() {
  return (
    <>
      <Cover
        heading="Admission Information"
        title="Admission Information"
        subTitle="Admission"
        subTitleLink="admission-information"
        mainTitle="Home"
        titleLink="/"
      />
      {/* AdmissionForm */}
      <AdmissionForm />

      {/* Contact Info */}
      <section className="mt-10 bg-gray-100 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Please contact for any query:
          </h2>
          <p className="text-lg text-gray-700">
            Admission Hotline:{" "}
            <span className="font-bold text-red-500">01810033733</span>
          </p>
        </div>
      </section>
    </>
  );
}
