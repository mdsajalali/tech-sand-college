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
    <footer className="bg-[#172F41] py-8 text-white">
      <Container>
        {/* Links Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Student Corner */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">
              Student Corner
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Convocation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Semester Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Download Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Requirements & Procedures
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Clubs */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">Clubs</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Annex
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AML Club
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Rover Scout
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cultural Club
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Programming Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">
              Important Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  UGC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  ICT Division
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Prime Minister Office
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Ministry of Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  List of All Universities
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <p>Mirpur-2, Dhaka-1216</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <p>tscollege@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <p>+880 1234 567 890</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          {/* Copyright */}
          <p className="text-center text-sm lg:text-left">
            &copy; 2024 Tech Sand College. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/BUBTOfficial/" target="_blank">
              <Facebook size={24} className="hover:text-blue-500" />
            </Link>
            <Link href="https://x.com/BubtOfficial" target="_blank">
              <Twitter size={24} className="hover:text-blue-400" />
            </Link>
            <Link
              href="https://www.linkedin.com/school/bubt-official/posts/?feedView=all"
              target="_blank"
            >
              <Linkedin size={24} className="hover:text-blue-600" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCRy_y_ExPHhDbAh8Ouo4LDA"
              target="_blank"
            >
              <Youtube size={24} className="hover:text-red-500" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
