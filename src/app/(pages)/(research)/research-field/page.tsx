import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";

const sections = [
  {
    title: "Machine Learning Bigdata & NLP",
    description: "Data is the new science. Big Data holds the answers.",
    icon: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
    border: "border-r-teal-600 hover:border-r-teal-800",
    hoverBg: "hover:bg-teal-50",
  },
  {
    title: "IoT & Cloud Computing",
    description: "Cloud computing is the third wave of the digital revolution.",
    icon: "https://cdn-icons-png.flaticon.com/512/2796/2796771.png",
    border: "border-r-red-600 hover:border-r-red-800",
    hoverBg: "hover:bg-red-50",
  },
  {
    title: "Network and Security",
    description:
      "We demand privacy, yet we glorify those that break into computers.",
    icon: "https://cdn-icons-png.flaticon.com/512/890/890547.png",
    border: "border-r-yellow-400 hover:border-r-yellow-600",
    hoverBg: "hover:bg-yellow-50",
  },
  {
    title: "Robotics and VLSI",
    description:
      "It’s fun to work the robotic arm in part because it’s really a team effort.",
    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
    border: "border-r-blue-500 hover:border-r-blue-700",
    hoverBg: "hover:bg-blue-50",
  },
  {
    title: "Computer Vision & Human Computer Interaction",
    description:
      "Human-Computer Interaction is a fundamental part of the digital world.",
    icon: "https://cdn-icons-png.flaticon.com/512/2085/2085260.png",
    border: "border-r-green-500 hover:border-r-green-700",
    hoverBg: "hover:bg-green-50",
  },
  {
    title: "Research on Others Field",
    description: "No research without action, no action without research.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    border: "border-r-purple-500 hover:border-r-purple-700",
    hoverBg: "hover:bg-purple-50",
  },
];


export default function page() {
  return (
    <>
      <Cover
        heading="Research Field"
        title="Research Field"
        subTitle="Research"
        subTitleLink="/chairman-message"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="w-full pb-5 pt-10 md:w-1/2">
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            Research <span className="text-primary">Arena:</span>
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

        {/* Research field */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 pb-20 pt-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex items-center border-r-4 p-6 transition-all duration-300 ${section.border} ${section.hoverBg} cursor-pointer rounded- bg-white shadow`}
            >
              {/* Icon */}
              <div className="h-16 w-16 flex-shrink-0">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                <p className="italic text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
