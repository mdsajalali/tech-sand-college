import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import ImageContainer from "@/components/shared/ImageContainer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover
        heading="Mission of CSE Department"
        title="Mission"
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
              Mission of <span className="text-primary">CSE Department:</span>
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

            <ul className="mt-4 list-disc pl-5 text-[15px] leading-relaxed text-gray-600 md:text-base">
              <li className="mb-2">
                Provide high-quality education and profession-oriented training
                for boosting problem-solving skills of the students and prepare
                them to be high-quality IT professionals.
              </li>
              <li className="mb-2">
                Prepare students to update themselves to cope with the rapid
                changes and enable them to communicate ideas clearly and
                concisely both in written and verbal forms.
              </li>
              <li>
                Make them aware about the environment, social responsibilities,
                and economic development within ethical boundaries through their
                engagement in further research or professional involvement.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <ImageContainer />
        </div>
      </Container>
    </>
  );
}
