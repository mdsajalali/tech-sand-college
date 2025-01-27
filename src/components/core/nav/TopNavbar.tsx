import { Phone, Globe } from "lucide-react";
import Container from "../../shared/Container";

export default function TopNavbar() {
  return (
    <div className="bg-[#172F41] py-3 md:py-4 text-white">
      <Container>
        <div className="flex flex-col items-center gap-2 md:gap-5 md:justify-between lg:flex-row">
          {/* Left Side: Phone Number */}
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+880 1234 567 890</span>
          </div>

          {/* Right Side: Language Selector and User Icon */}
          <div className="flex items-center gap-5">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <select className="rounded-md border border-gray-400 bg-[#172F41] px-2 py-1 text-white focus:outline-none">
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>

            {/* User Icon */}
            <img
              src="https://yt3.ggpht.com/keHZ4iEvjcDxPrfYem-sLxoESF-BcYDQIWJBSO5g6dsxt2MA99XMjjdna406fiT-PyJMgaKqDA=s88-c-k-c0x00ffffff-no-rj"
              alt="User Icon"
              className="h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
