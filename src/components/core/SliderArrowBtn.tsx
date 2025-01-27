import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

const SliderArrowBtn = ({ direction, className }: SliderArrowBtnProps) => {
  return (
    <div
      className={`${className} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary bg-[#F4F8FF] text-2xl text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:h-12 sm:w-12`}
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </div>
  );
};

export default SliderArrowBtn;
