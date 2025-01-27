import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-5 text-white md:py-10">
      <Container>
        {/* Top Section */}

        <div>
          <div className="flex flex-col items-center justify-center">
            <Link href="/">
              <Image
                src="/bubt-footer-logo.png"
                alt="footer logo"
                width={100}
                height={100}
              />
            </Link>
            <h1 className="py-1 text-2xl font-bold">BUBT</h1>
            <h1 className="text-center text-[20px] font-semibold md:text-start">
              Bangladesh University of Business and Technology
            </h1>
            <div className="grid grid-cols-1 place-items-center gap-2 pt-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex cursor-pointer items-center gap-2 duration-300 hover:text-text_color">
                <MapPin size={15} />
                <p className="text-[14px]">Rupnagar, Mirpur-2, Dhaka-1216</p>
              </div>
              <div className="flex cursor-pointer items-center gap-2 duration-300 hover:text-text_color">
                <Mail size={15} />
                <p className="text-[14px]">info@bubt.edu.bd</p>
              </div>
              <div className="flex cursor-pointer items-center gap-2 duration-300 hover:text-text_color">
                <Phone size={15} />
                <p className="text-[14px]">+8801680050630</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-[#81B0CC]" />

          <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-[40px] md:grid-cols-3 md:place-items-center lg:grid-cols-12 xl:gap-[70px]">
            <div className="col-span-2">
              <h1 className="fot-semibold text-[18px] uppercase">
                Student Corner
              </h1>
              <ul className="mt-8">
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Student Portal</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Alumni</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Convocation</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Semester Policy</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Download Center</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h1 className="text-[18px] font-semibold uppercase">
                Quick Links
              </h1>
              <ul className="mt-8">
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Admission</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Registration</a>
                </li>
                <li className="pb-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">
                    Requirements & <br /> Procedures
                  </a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>

            <div className="col-span-4">
              <h1 className="text-center text-[18px] font-semibold uppercase">
                CLubs
              </h1>
              <div className="flex justify-center gap-5">
                <ul className="mt-8 text-end">
                  <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Annex</a>
                  </li>
                  <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">AML Club</a>
                  </li>
                  <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Rover Scout</a>
                  </li>
                  <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Cultural Club</a>
                  </li>
                  <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Programming Club</a>
                  </li>
                </ul>
                <ul className="mt-8">
                  <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Annex</a>
                  </li>
                  <li className="pt-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">AML Club</a>
                  </li>
                  <li className="pt-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Rover Scout</a>
                  </li>
                  <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Cultural Club</a>
                  </li>
                  <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                    <a href="#">Programming Club</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-[18px] font-semibold uppercase">Academic</h1>
              <ul className="mt-8">
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Notice</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Library</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Results</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Class Routine</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Exam Routine</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h1 className="text-[18px] font-semibold uppercase">
                Important Links
              </h1>
              <ul className="mt-8">
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">UGC</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">ICT Division</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Prime Minister Office</a>
                </li>
                <li className="py-1 text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">Ministry of Education</a>
                </li>
                <li className="text-[14px] duration-300 hover:text-text_color hover:underline">
                  <a href="#">List of All Universities</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#81B0CC]" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
          {/* Copyright */}
          <p className="text-center text-sm font-semibold lg:text-left">
            &copy; 2024 BUBT-CSE All Rights Reserved.{" "}
            <span className="md:ml-10">Total Page Views:</span>
            1,978,249
            <br />
            <Link
              className="duration-300 hover:text-text_color"
              href="/https://cse.bubt.edu.bd/meetTheCreator"
            >
              Intake: 30/1 (Eve) Creation.
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/BUBTOfficial/" target="_blank">
              <Facebook
                className="size-10 cursor-pointer bg-white/20 p-2 duration-300 hover:bg-text_color hover:text-gray-300"
                size={24}
              />
            </Link>
            <Link href="https://x.com/BubtOfficial" target="_blank">
              <Twitter
                className="size-10 cursor-pointer bg-white/20 p-2 duration-300 hover:bg-text_color hover:text-gray-300"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/school/bubt-official/posts/?feedView=all"
              target="_blank"
            >
              <Linkedin
                className="size-10 cursor-pointer bg-white/20 p-2 duration-300 hover:bg-text_color hover:text-gray-300"
                size={24}
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCRy_y_ExPHhDbAh8Ouo4LDA"
              target="_blank"
            >
              <Youtube
                className="size-10 cursor-pointer bg-white/20 p-2 duration-300 hover:bg-text_color hover:text-gray-300"
                size={24}
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
