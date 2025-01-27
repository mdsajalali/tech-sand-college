"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";

export default function Page() {
  const { id } = useParams();
  console.log("id", id);

  return (
    <>
      <Cover
        heading="Achievement of CSE"
        title="Achievement"
        subTitle="About CSE"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="p-4 md:p-10">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Industry Advisory Panel
            </h1>
            <p className="flex items-center gap-1 py-2 text-sm text-primary">
              <Calendar size={20} /> Sat 09 Oct 2021
            </p>
          </div>

          <div className="relative mb-6 h-80 w-full md:h-[500px]">
            <Image
              src="/achievements/nature.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-700 md:text-base">
              An annual symposium hosted by the Computer Science Department to
              discuss the latest advancements in the field of Computer Science.
            </p>
          </div>

          <div>
            <div className="relative mb-6 h-80 w-full md:h-[500px]">
              <Image
                src="/achievements/nature.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-sm text-gray-700 md:text-base">
              A thumbnail image representing the Computer Science Symposium
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
