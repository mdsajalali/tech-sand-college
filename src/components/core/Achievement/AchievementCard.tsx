import Image from "next/image";
import { AchievementCardProps } from "@/types";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function AchievementCard({
  title,
  date,
  image,
  id,
}: AchievementCardProps) {
  return (
    <div className="group mb-10 border-b border-t border-red-900 px-4 py-5 transition-all duration-300 hover:border-l-4 hover:border-primary">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-2/3">
          <Link href={`/achievement/${id}`}>
            <h2 className="text-xl font-bold text-gray-800 duration-300 hover:text-primary">
              {title}
            </h2>
          </Link>
          <p className="flex items-center gap-1 py-2 text-sm text-primary">
            <Calendar size={20} /> {date}
          </p>
        </div>

        <div className="flex w-full justify-center md:w-1/3">
          {image && (
            <div className="relative h-[150px] w-full max-w-[250px]">
              <Image
                src={image}
                alt="Image"
                layout="fill"
                objectFit="cover"
                className="rounded transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
