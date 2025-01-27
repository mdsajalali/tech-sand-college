import AdmissionCallback from "@/components/core/AdmissionCallback";
import BubtCseReason from "@/components/core/BubtCseReason";
import Chairman from "@/components/core/chairman/Chairman";
import Hero from "@/components/core/Hero";
import LatestNews from "@/components/core/LatestNews";

export default function page() {
  return (
    <>
      <Hero />
      <Chairman />
      <LatestNews />
      <BubtCseReason />
      <AdmissionCallback />
    </>
  );
}
