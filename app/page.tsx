import { Hero, Services, WhyChooseUs, Testimonials, ContactCTA } from "@/components";
import CommercialCTA from "@/components/CommercialCTA";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <Testimonials />
      <CommercialCTA />
      <ContactCTA />
    </>
  );
}
