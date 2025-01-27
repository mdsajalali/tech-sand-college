"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    program: "",
    fullName: "",
    mobile: "",
    email: "",
    sscResult: "",
    hscResult: "",
    sscYear: "",
    hscYear: "",
    district: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[650px] rounded-lg bg-white p-8 shadow-md">
        {/* Header with Image */}
        <div className="mb-8 text-center">
          <Link href="/">
            <img
              src="/bubt_header_logo.png"
              alt="Program Image"
              className="mx-auto mb-4 cursor-pointer object-cover"
            />
          </Link>
          <h2 className="text-primary-600 text-2xl font-semibold">
            ভর্তি পরামর্শ এবং তথ্যের জন্য ফর্মটি পূরণ করুন
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Program Select */}
          <div className="mb-4">
            <label
              htmlFor="program"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Choose Program (*)
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
            >
              <option value="">Choose Program</option>
              <option value="BSc CSE Regular">
                B.Sc. in Computer Science and Engineering (Regular)
              </option>
              <option value="BSc CSE Diploma">
                B.Sc. in Computer Science and Engineering (For Diploma Holders)
              </option>
              {/* Add more programs here */}
            </select>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Full Name (*)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="Full Name"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Mobile No (*)
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="^[0-9]{11}$"
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="01710123456"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="Email"
            />
          </div>

          {/* SSC Result */}
          <div className="mb-4">
            <label
              htmlFor="sscResult"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              SSC Result (*)
            </label>
            <input
              type="text"
              id="sscResult"
              name="sscResult"
              value={formData.sscResult}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="SSC Result"
            />
          </div>

          {/* HSC/Diploma Result */}
          <div className="mb-4">
            <label
              htmlFor="hscResult"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              HSC/Diploma Result (*)
            </label>
            <input
              type="text"
              id="hscResult"
              name="hscResult"
              value={formData.hscResult}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="HSC/Diploma Result"
            />
          </div>

          {/* SSC Passing Year */}
          <div className="mb-4">
            <label
              htmlFor="sscYear"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              SSC Passing Year (*)
            </label>
            <input
              type="number"
              id="sscYear"
              name="sscYear"
              value={formData.sscYear}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="SSC Passing Year"
            />
          </div>

          {/* HSC/Diploma Passing Year */}
          <div className="mb-4">
            <label
              htmlFor="hscYear"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              HSC/Diploma Passing Year (*)
            </label>
            <input
              type="number"
              id="hscYear"
              name="hscYear"
              value={formData.hscYear}
              onChange={handleChange}
              required
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="HSC/Diploma Passing Year"
            />
          </div>

          {/* District */}
          <div className="mb-4">
            <label
              htmlFor="district"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="District"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center bg-primary">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 rounded-lg px-6 py-2 text-white focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
