import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import ImageContainer from "@/components/shared/ImageContainer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Cover
        heading="Chairman Message"
        title="Chairman Message"
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
              Message from <span className="text-primary">The Chairman:</span>
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
            <div className="mt-6 space-y-6 text-gray-600 md:text-base">
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Welcome to the Department of{" "}
                <span className="text-primary">
                  Computer Science and Engineering (CSE)
                </span>
              </h2>

              <p className="leading-relaxed">
                Welcome to the Department of Computer Science and Engineering
                (CSE) at
                <strong>
                  Bangladesh University of Business and Technology (BUBT)
                </strong>
                . BUBT is one of the{" "}
                <strong>top-ranking private universities</strong> in Bangladesh
                with a Permanent Certificate from the Ministry of Education.
                Established in 2005, the Department of CSE has become the
                <strong>largest department of BUBT</strong> with over{" "}
                <strong>3000+ students</strong>
                and <strong>
                  50+ qualified full-time faculty members
                </strong>.
              </p>

              {/* Facilities */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  State-of-the-Art Facilities
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>12 programming labs</strong> with the latest
                    configuration computers.
                  </li>
                  <li>
                    A dedicated lab for final-year projects and thesis work.
                  </li>
                  <li>
                    An <strong>industry-standard gaming lab</strong> established
                    with support from the ICT Division of Bangladesh Government.
                  </li>
                </ul>
              </div>

              {/* Research Focus */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Research Focus Areas
                </h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Machine Learning</li>
                  <li>Cyber Security and Digital Forensics</li>
                  <li>Blockchain</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Network Security</li>
                  <li>Image Processing</li>
                  <li>Telemedicine</li>
                  <li>Intelligent Systems</li>
                </ul>
              </div>

              {/* Opportunities */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Opportunities for Students
                </h3>
                <p className="leading-relaxed">
                  Our students engage in real-life problem-solving through
                  software development courses. A number of alumni work in{" "}
                  <strong>government sectors</strong>,
                  <strong>multinational companies abroad</strong>, and pursue
                  higher studies at reputed universities worldwide.
                </p>
              </div>

              {/* Conclusion */}
              <p className="leading-relaxed">
                The Department of CSE continually improves its curriculum to
                adopt
                <strong>Outcome-Based Education (OBE)</strong>, meeting industry
                needs. Our goal is to produce
                <strong>high-quality graduates</strong> who contribute to
                societal development in the IT sector. We are proud of our
                alumni who have built successful careers both locally and
                globally.
              </p>

              <p className="leading-relaxed">
                We invite you to explore our website to learn more about our
                programs, achievements, research groups, and activities. Join us
                and be a part of our mission to shape the future of IT
                professionals.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="pb-10 lg:pt-20 text-center lg:pb-0">
            <div className="mx-auto overflow-hidden rounded-full">
              <Image
                src="/chairman.png"
                alt="Chairman Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="mt-4 text-xl font-semibold text-primary">
              Md. Saifur Rahman
            </h1>

            {/* Title */}
            <h3 className="text-[15px] text-gray-600">
              Assistant Professor & Chairman (Acting)
            </h3>
          </div>
        </div>
      </Container>
    </>
  );
}
