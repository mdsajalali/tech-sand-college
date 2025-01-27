import Container from "@/components/shared/Container";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactForm = () => {
  return (
    <Container>
      <div className="mx-auto   py-8 md:flex md:gap-8 lg:gap-20">
        {/* Left Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            You can contact us any way that is convenient for you. We are
            available 24/7 via fax or email. You can also use a quick contact
            form below or visit our office personally. We would be happy to
            answer your questions.
          </p>

          <form className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  First name:
                </label>
                <input
                  type="text"
                  placeholder="Provide First Name"
                  className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Last name:
                </label>
                <input
                  type="text"
                  placeholder="Provide Last Name"
                  className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="Provide Email Here..."
                  className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="text"
                  placeholder="Provide Phone Number..."
                  className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message:
              </label>
              <textarea
                placeholder="Type Your Message Here..."
                rows={5}
                className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded bg-red-600 px-6 py-2 text-white duration-300 hover:bg-red-900"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 md:w-1/3">
          <div className="space-y-6">
            {/* Social */}
            <div>
              <h3 className="text-xl font-bold text-primary">Social</h3>
              <div className="border-b border-primary py-1" />
              <div className="mt-2 flex gap-4">
                <Linkedin className="cursor-pointer text-gray-600 hover:text-primary" />
                <Twitter className="cursor-pointer text-gray-600 hover:text-primary" />
                <Facebook className="cursor-pointer text-gray-600 hover:text-primary" />
                <Instagram className="cursor-pointer text-gray-600 hover:text-primary" />
                <Youtube className="cursor-pointer text-gray-600 hover:text-primary" />
              </div>
            </div>

            {/* Phones */}
            <div>
              <h3 className="text-xl font-bold text-primary">Phones</h3>
              <div className="border-b border-primary py-1" />
              <p className="flex items-center gap-2 pt-3 text-gray-600">
                <Phone size={16} /> 1-800-1234-567
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Phone size={16} /> 1-800-1234-567
              </p>
            </div>

            {/* E-mail */}
            <div>
              <h3 className="text-xl font-bold text-primary">E-mail</h3>
              <div className="border-b border-primary py-1" />

              <p className="flex items-center gap-2 pt-3 text-gray-600">
                <Mail size={16} /> info@bubt.edu.bd
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-primary">Address</h3>
              <div className="border-b border-primary py-1" />

              <p className="flex items-center gap-2 pt-3 text-gray-600">
                <MapPin size={16} /> Rupnagar, Mirpur-2, Dhaka-1216, Bangladesh
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold text-primary">Opening Hours</h3>
              <div className="border-b border-primary py-1" />

              <p className="flex items-center gap-2 pt-3 text-gray-600">
                <Clock size={16} /> Sun-Fri: 8:00am-8:00pm
              </p>
              <p className="flex items-center gap-2 py-2 text-gray-600">
                <Clock size={16} /> Sun: 8:00am-3:00pm
              </p>
              <p className="ml-0 text-gray-600 lg:ml-6">Sat: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
