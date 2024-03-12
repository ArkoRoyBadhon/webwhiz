import AboutSection from "@/components/about us/AboutUs";
import BannerSection from "@/components/bannner/Banner";
import BlogSection from "@/components/blog/Blog";
import Contactsection from "@/components/contact/Contact";
import ServiceSection from "@/components/services/Services";

const HomeView = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <Contactsection />
      <BlogSection />
    </>
  );
};

export default HomeView;
