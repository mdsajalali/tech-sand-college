import { CoverType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Cover({
  heading,
  mainTitle,
  subTitle,
  title,
  titleLink,
  subTitleLink,
}: CoverType) {
  return (
    <div className="relative min-h-[230px] w-full">
      <div className="absolute inset-0 z-10 bg-black/60" />
      <Image src="/cover.jpg" alt="cover" fill className="z-0 object-cover" />
      <div className="absolute inset-0 z-20 flex flex-col flex-wrap items-center justify-center text-center text-white">
        <h1 className="text-3xl font-bold md:text-5xl">{heading}</h1>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1 text-lg md:text-xl">
          <Link href={`/${titleLink}`}>
            <h2 className="text-[16px] font-medium capitalize text-[#1fdfdf]">
              {mainTitle}
            </h2>
          </Link>{" "}
          {subTitle && (
            <>
              <span className="text-gray-300">/</span>
              <Link href={`/${subTitleLink}`}>
                <h2 className="text-[16px] font-medium capitalize text-[#1fdfdf]">
                  {subTitle}
                </h2>
              </Link>
            </>
          )}
          <span className="text-gray-300">/</span>{" "}
          <h2 className="text-[16px] font-medium text-gray-300">{title}</h2>
        </div>
      </div>
    </div>
  );
}
