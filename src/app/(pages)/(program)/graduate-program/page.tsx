import Cover from "@/components/shared/Cover";

export default function Page() {
  return (
    <>
      <Cover
        heading="Graduate Program"
        title="Graduate"
        subTitle="Program"
        subTitleLink="/graduate-program"
        mainTitle="Home"
        titleLink="/"
      />
      <div className="flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-semibold leading-relaxed sm:text-3xl lg:text-4xl">
          Sorry! <br /> We currently have no Graduate Program available.
        </h1>
      </div>
    </>
  );
}
