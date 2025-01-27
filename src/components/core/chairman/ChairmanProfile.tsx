import Image from "next/image";

export default function ChairmanProfile() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white py-6 text-center shadow-lg">
      {/* Profile Image */}
      <div className="mx-auto overflow-hidden rounded-full">
        <Image
          src="/chairman.png"
          alt="Chairman Profile"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="mt-4 text-xl font-semibold text-primary">
        Md. Saifur Rahman
      </h1>

      {/* Title */}
      <h3 className="text-[15px] text-gray-600">
        Assistant Professor & Chairman (Acting)
      </h3>
    </div>
  );
}
