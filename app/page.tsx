import CommentForm from "@/components/CommentForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
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
      <Reviews></Reviews>
      <CommentForm></CommentForm>
      <FAQ></FAQ>
      <FinalCTA></FinalCTA>
      <Footer></Footer>
    </main>
  );
}
