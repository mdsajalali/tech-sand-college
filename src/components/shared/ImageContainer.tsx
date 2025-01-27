import Image from "next/image";
import React from "react";

export default function ImageContainer() {
  return (
    <div className="relative h-[300px] w-[500px] md:h-[600px]">
      <Image src="/cse.jpg" alt="cse" fill className="object-cover" />
    </div>
  );
}
