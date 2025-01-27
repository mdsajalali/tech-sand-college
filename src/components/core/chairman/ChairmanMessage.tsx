import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <div>
      {/* Title Section */}
      <h1 className="text-2xl font-bold uppercase text-gray-800">
        Message from <span className="text-primary">The Chairman:</span>
      </h1>
      <div className="mt-2 flex items-center gap-2">
        <Image
          src="/bubt-footer-logo.png"
          alt="bubt logo"
          width={30}
          height={30}
        />
        <div className="h-[2px] w-24 bg-black/80" />
      </div>

      {/* Message Content */}
      <div className="mt-2 text-justify leading-relaxed text-gray-700">
        <p>
          Welcome to the Department of Computer Science and Engineering (CSE) at
          Bangladesh University of Business and Technology (BUBT). BUBT is one
          of the top-ranking and leading private universities in Bangladesh that
          has received a Permanent Certificate from the Ministry of Education by
          fulfilling all the criteria set by the UGC and Education Ministry.
        </p>
        <p>
          The Department of Computer Science and Engineering (CSE) of BUBT
          started in 2005 and now it has become the largest department of BUBT.
          It has about <span className="font-bold">3000+</span> students and{" "}
          <span className="font-bold">50+</span> qualified full-time faculty
          members. The Department facilities include state-of-the-art classrooms
          and …
        </p>
      </div>

      {/* Read More Button */}
      <Link href="/chairman-message">
        <button className="hover:bg-primary/80 duration-300 focus:ring-primary-light mt-4 rounded-lg bg-primary px-6 py-2 text-white shadow-md focus:ring-2 focus:ring-offset-1">
          Read More
        </button>
      </Link>
    </div>
  );
}
