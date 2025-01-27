import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Cover
        heading="Research Laboratories"
        title="Laboratories"
        subTitle="Research"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full py-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            CSE <span className="text-primary">Research Laboratories:</span>
          </h1>
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
        </div>
      </Container>
    </>
  );
}
