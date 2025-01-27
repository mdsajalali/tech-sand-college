import UndergraduateContent from "@/components/core/UndergraduateContent";
import Cover from "@/components/shared/Cover";

export default function page() {
  return (
    <>
      <Cover
        heading="Undergraduate Program"
        title="Undergraduate"
        subTitle="Program"
        subTitleLink="/graduate-program"
        mainTitle="Home"
        titleLink="/"
      />
      {/* UndergraduatePage */}
      <UndergraduateContent />
    </>
  );
}
