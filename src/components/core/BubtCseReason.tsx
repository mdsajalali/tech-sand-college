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
              WHY CSE <span className="text-black">AT BUBT?</span>
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
              B.Sc. Engg. in Computer Science and Engineering program prepares
              today's students into tomorrow's engineers. The program has the
              built-in system of orientation for the graduates to keep
              themselves updated with the rapid changes in the computer world.
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
              src="https://www.youtube.com/embed/3gKzCDDhpDw?si=qZmUawkCrztTPoIP"
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
              The Department of Computer Science and Engineering strives to
              inspire excellence in the creation, application and dissemination
              of knowledge in computer science and engineering through
              comprehensive educational programs.
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
              The CSE Department of BUBT has been involved in several projects
              in the last five years including projects under Thrust/Emerging
              Areas, Modernization and Removal of Obsolescence,
              Industry-Institution Interaction.
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
              The vision of the department of Computer Science and Engineering
              is to become the center of excellence for learning and innovation
              as well as to nurture industry-oriented IT professionals to meet
              the national and global challenges of the 21st century at a
              minimum cost.
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
