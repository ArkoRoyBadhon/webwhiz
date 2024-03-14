'use client'
import AboutSection from "@/components/AboutUs";
import BannerSection from "@/components/Banner";
import BlogSection from "@/components/Blog";
import ClientReview from "@/components/ClientReview";
import Contactsection from "@/components/Contact";
import PortfolioSection from "@/components/Portfolio";
import ServiceSection from "@/components/Services";


const HomeView = () => {
  return (
    <main>
      <BannerSection />
      <PortfolioSection />
      <AboutSection />
      <ServiceSection />
      <ClientReview />
      <Contactsection />
      <BlogSection />
    </main>
  );
};

export default HomeView;
