import Container from "../shared/Container";
import Image from "next/image";

const BubtCseReason = () => {
  return (
    <Container>
      <div className="py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Section 1: WHY CSE AT BUBT? */}
          <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-teal-600">
              WHY CSE <span className="text-black">AT TechSand?</span>
            </h2>
            <div className="my-4 flex items-center gap-2">
              <Image src="/logo.png" alt="bubt logo" width={20} height={20} />
              <div className="h-[2px] w-24 bg-black/80" />
            </div>
            <p className="mb-4 text-gray-700">
              Curabitur aliquet quam id dui posuere blandit. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Donec
              rutrum congue leo eget malesuada. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula.
            </p>
            <p className="mb-4 text-gray-700">
              The focus of the program is on building the strength of the
              students in computer engineering.
            </p>
            <p className="cursor-pointer font-semibold text-red-600">
              Read More &gt;
            </p>
          </div>

          {/* YouTube Video */}
          <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/LlCwHnp3kL4?si=ODdhZD3AH1pCrRZw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Section 2: GOALS AND OBJECTIVES */}
          <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-teal-600">
              GOALS <span className="text-black">AND OBJECTIVES</span>
            </h2>
            <div className="my-4 flex items-center gap-2">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={20}
                height={20}
              />
              <div className="h-[2px] w-24 bg-black/80" />
            </div>
            <p className="mb-4 text-gray-700">
              Curabitur aliquet quam id dui posuere blandit. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Donec
              rutrum congue leo eget malesuada. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula.
            </p>
            <p className="cursor-pointer font-semibold text-red-600">
              Read More &gt;
            </p>
          </div>

          {/* Section 3: OUR ACHIEVEMENT */}
          <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-teal-600">
              OUR <span className="text-black">ACHIEVEMENT</span>
            </h2>
            <div className="my-4 flex items-center gap-2">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={20}
                height={20}
              />
              <div className="h-[2px] w-24 bg-black/80" />
            </div>
            <p className="mb-4 text-gray-700">
              Curabitur aliquet quam id dui posuere blandit. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Donec
              rutrum congue leo eget malesuada. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula.
            </p>
            <p className="cursor-pointer font-semibold text-red-600">
              See More &gt;
            </p>
          </div>

          {/* Section 4: MISSION AND VISION */}
          <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-teal-600">
              MISSION <span className="text-black">AND VISION</span>
            </h2>
            <div className="my-4 flex items-center gap-2">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={20}
                height={20}
              />
              <div className="h-[2px] w-24 bg-black/80" />
            </div>
            <p className="mb-4 text-gray-700">
              Curabitur aliquet quam id dui posuere blandit. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Donec
              rutrum congue leo eget malesuada. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula.
            </p>
            <p className="cursor-pointer font-semibold text-red-600">
              Read More &gt;
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BubtCseReason;
