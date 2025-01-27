import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import ImageContainer from "@/components/shared/ImageContainer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover
        heading="Vision of CSE Department"
        title="Vision"
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
              Vision of <span className="text-primary">CSE Department:</span>
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
            {/* Description */}
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 md:text-base">
              The vision of the department of Computer Science and Engineering
              is to become the center of excellence for learning and innovation
              as well as to nurture industry-oriented IT professionals to meet
              the national and global challenges of the 21st century at a
              minimum cost.
            </p>
          </div>

          {/* Image Section */}
          <ImageContainer />
        </div>
      </Container>
    </>
  );
}
