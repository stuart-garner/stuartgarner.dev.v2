import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomePageIntro from "@/components/sections/HomePageIntro";
import HomePageAbout from "@/components/sections/HomePageAbout";
import HomePagePortfolio from "@/components/sections/HomePagePortfolio";
import HomePageTestimonials from "@/components/sections/HomePageTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePageIntro />
        <HomePageAbout />
        <HomePagePortfolio />
        <HomePageTestimonials />
      </main>
      <Footer />
    </>
  );
}
