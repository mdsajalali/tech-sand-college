"use client";
import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";
import React from "react";
import AchievementCard from "@/components/core/Achievement/AchievementCard";

export default function page() {
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    fetch("/achievements.json")
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching achievements:", error);
      });
  }, []);
  return (
    <>
      <Cover
        heading="Industry Visit"
        title="Industry Visit"
        subTitle="Student"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        {/* Responsive Layout */}
        <div className="flex flex-wrap justify-between md:gap-5">
          {/* Text Content */}
          <div className="w-full py-10 md:w-1/2">
            <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
              Visited <span className="text-primary">Industry List:</span>
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
        </div>
        {/* Content */}
        {achievements
          ?.slice(0, 1)
          ?.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
      </Container>
    </>
  );
}
