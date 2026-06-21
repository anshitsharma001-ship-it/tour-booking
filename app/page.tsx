import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProfiles from "@/components/home/FeaturedProfiles";
import SuccessStories from "@/components/home/SuccessStories";
import MembershipPlans from "@/components/home/MembershipPlans";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedProfiles />
      <SuccessStories />
      <MembershipPlans />
      <FAQ />
    </>
  );
}