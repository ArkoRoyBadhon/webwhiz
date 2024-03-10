import AboutSection from "@/components/about us/page";
import BannerSection from "@/components/bannner/page";
import Contactsection from "@/components/contact/page";
import ServiceSection from "@/components/services/page";

const HomeView = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <Contactsection />
    </>
  );
};

export default HomeView;
