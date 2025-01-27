"use client";

import { useEffect, useState } from "react";

const AdmissionCallback = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 24);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-[550px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("/admissionCounter.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        {/* Heading */}
        <h1 className="text-2xl font-bold md:text-6xl">
          Get The Admission in BUBT
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Admission Going On Summer - 2023
        </p>

        {/* Timer */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-20 p-4"
            >
              <span className="text-3xl font-semibold md:text-4xl">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="text-sm capitalize md:text-base">{unit}</span>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="mt-4 text-lg">It’s Limited Seating! Hurry Up!</p>

        {/* Button */}
        <button className="hover:bg-primary-dark mt-6 rounded-lg bg-primary px-8 py-3 text-lg font-medium text-white shadow-lg transition">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default AdmissionCallback;
