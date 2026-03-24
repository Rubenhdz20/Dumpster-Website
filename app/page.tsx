import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Pricing></Pricing>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <ServiceAreas></ServiceAreas>
    </main>
  );
}
