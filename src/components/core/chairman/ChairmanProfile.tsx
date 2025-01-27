import Image from "next/image";

export default function ChairmanProfile() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white py-6 text-center shadow-lg">
      {/* Profile Image */}
      <div className="mx-auto overflow-hidden rounded-full">
        <Image
          src="https://templates.envytheme.com/unco/default/assets/images/team/team-1.jpg"
          alt="Chairman Profile"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="mt-4 text-xl font-semibold text-primary">
        DAndrew M. Nichols
      </h1>

      {/* Title */}
      <h3 className="text-[15px] text-gray-600">MCA, PhD</h3>
    </div>
  );
}
