import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";
import Link from "next/link";

const clubData = [
  { title: "IEEECS", link: "/research-field", image: "/cse_news/ieeecs.jpg" },
  {
    title: "Conferences",
    link: "/research-field",
    image: "/cse_news/conference.jpg",
  },
  {
    title: "Research",
    link: "/research-field",
    image: "/cse_news/research.jpg",
  },
  { title: "Events", link: "/research-field", image: "/cse_news/events.jpg" },
  { title: "Notice", link: "/research-field", image: "/cse_news/notice.jpg" },
  {
    title: "Workshop",
    link: "/research-field",
    image: "/cse_news/workshop.jpg",
  },
  {
    title: "BUBT IT Club",
    link: "/research-field",
    image: "/cse_news/it.jpg",
  },
  {
    title: "BUBT Sports Club",
    link: "/research-field",
    image: "/cse_news/sports.jpg",
  },
];

export default function page() {
  return (
    <>
      <Cover
        heading="Activities & Collaboration"
        title="Research"
        subTitle="Activities & Collaboration"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full pb-5 pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            Activities and <span className="text-primary">Collaboration:</span>
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
        <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clubData?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-center text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
