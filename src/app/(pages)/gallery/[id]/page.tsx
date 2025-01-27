import GalleryContent from "@/components/core/gallery/GalleryContent";
import Cover from "@/components/shared/Cover";

export default function page() {
  return (
    <>
      <Cover
        heading="Our Gallery"
        title="Our Gallery"
        mainTitle="home"
        titleLink="/"
      />
      <GalleryContent />
    </>
  );
}
