import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <div>
      {/* Title Section */}
      <h1 className="text-2xl font-bold uppercase text-gray-800">
        Message from <span className="text-primary">The Principal:</span>
      </h1>
      <div className="mt-2 flex items-center gap-2">
        <Image src="/logo.png" alt="bubt logo" width={30} height={30} />
        <div className="h-[2px] w-24 bg-black/80" />
      </div>

      {/* Message Content */}
      <div className="mt-2 text-justify leading-relaxed text-gray-700">
        <p>
          Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Donec rutrum congue
          leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Proin
          eget tortor risus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
          sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>
        <p>
          Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Donec rutrum congue
          leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Proin
          eget tortor risus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
          sit amet aliquam vel, ullamcorper sit amet ligula …
        </p>
      </div>

      {/* Read More Button */}
      <Link href="/chairman-message">
        <button className="focus:ring-primary-light mt-4 rounded-lg bg-primary px-6 py-2 text-white shadow-md duration-300 hover:bg-primary/80 focus:ring-2 focus:ring-offset-1">
          Read More
        </button>
      </Link>
    </div>
  );
}
