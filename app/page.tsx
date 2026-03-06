import StartVacation from "./components/StartVacation";
import DestinationsIntro from "./components/DestinationsIntro";
import BannerSection from "./components/BannerSection";
import TourSection from "./components/TourSection";
import DestinationSearch from "./components/DestinationSearch";
import NextAdventure from "./components/nextadventure";
import Destination1 from "./components/destination1";   
import Destinations from "./components/Destinations";
import ServiceSection from "./components/ServiceSection";
import TravelItineraries from "./components/TravelItineraries";
import TravelVideo from "./components/TravelVideo";
import IconTravel from "./components/IconTravel";
import TravelExperiences from "./components/TravelExperiences";
import PackageOptions from "./components/PackageOption";
import AdventureSection from "./components/AdventureSection";
import TravelBlogSection from "./components/TravelBlogSection";
import BlogSection from "./components/BlogSection";

export default function Page() {
  return (
    <>
      <StartVacation />  
      <DestinationsIntro />
      <BannerSection />
      <TourSection />
      <Destination1 />  
      <DestinationSearch /> 
      <NextAdventure /> 
      <Destinations />
      <ServiceSection />
      <TravelItineraries />
      <TravelVideo />
      <IconTravel />
      <TravelExperiences />
      <PackageOptions />
      <AdventureSection />
      <TravelBlogSection />
      <BlogSection />
    </>
  );
}