import ContactForm from "@/components/core/contact/ContactForm";
import Location from "@/components/core/contact/Location";
import Cover from "@/components/shared/Cover";

export default function page() {
  return (
    <div>
      <Cover
        heading="Contacts"
        title="Contact"
        mainTitle="home"
        titleLink="/"
      />
      <ContactForm />
      <Location />
    </div>
  );
}
