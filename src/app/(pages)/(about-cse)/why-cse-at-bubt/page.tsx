import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import ImageContainer from "@/components/shared/ImageContainer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover
        heading="Why CSE at BUBT"
        title="Why at BUBT"
        subTitle="About CSE"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        {/* Responsive Layout */}
        <div className="flex flex-wrap justify-between md:gap-5">
          {/* Text Content */}
          <div className="w-full py-10 md:w-1/2">
            <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
              Why CSE <span className="text-primary">At BUBT?</span>
            </h1>
            {/* Underline with Logo */}
            <div className="mt-2 flex items-center gap-2">
              <Image
                src="/bubt-footer-logo.png"
                alt="bubt logo"
                width={30}
                height={30}
                priority
              />
              <div className="h-[2px] w-24 bg-black/80" />
            </div>

            <div className="mt-4 text-[15px] leading-relaxed text-gray-600 md:text-base">
              <p>
                B.Sc. Engg. in Computer Science and Engineering program prepares
                today’s students into tomorrow’s engineers. The program has the
                built-in system of orientation for the graduates to keep
                themselves updated with the rapid changes in the computer world.
                The focus of the program is on building the strength of the
                students in computer engineering.
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>Highly qualified Faculty Members.</li>
                <li>
                  Highly Advanced Curriculum based on frontier technologies to
                  cope with the fourth industrial revolution.
                </li>
                <li>Classroom equipped with modern facilities.</li>
                <li>State-of-the-art research-oriented lab.</li>
                <li>
                  Regular arrangement of Programming contests and Software
                  exhibitions.
                </li>
                <li>
                  Close collaboration with IT industries for curriculum
                  development, internship placements, joint research, etc.
                </li>
              </ol>
            </div>
          </div>

          {/* Image Section */}
          <ImageContainer />
        </div>
      </Container>
    </>
  );
}
