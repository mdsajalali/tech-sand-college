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
  {
    title: "BUBT Debating Club",
    link: "/research-field",
    image: "/cse_news/debate.jpg",
  },
  {
    title: "BUBT Rover Scout Group",
    link: "/research-field",
    image: "/cse_news/rover.jpg",
  },
  {
    title: "BUBT Social Welfare Club",
    link: "/research-field",
    image: "/cse_news/social.jpg",
  },
  {
    title: "BUBT Cultural Club",
    link: "/research-field",
    image: "/cse_news/cultural.jpg",
  },
  {
    title: "Capstone Project",
    link: "/research-field",
    image: "/cse_news/cp.jpg",
  },
];

export default function page() {
  return (
    <>
      <Cover
        heading="CSE Office of Communications"
        title="Career Guidance"
        subTitle="CSE Office of Communications"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
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
