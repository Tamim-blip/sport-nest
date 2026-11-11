import { Hero } from "@/components/home/hero";
import { PopularSports } from "@/components/home/popular-sports";
import { FeaturedFacilities } from "@/components/home/featured-facilities";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularSports />
      <FeaturedFacilities />
      <WhyChooseUs />
      <Testimonials />
      <Cta />
    </>
  );
}
