import Hero from "../Sections/Hero/Hero"
import About from "../Sections/About/About";
import Banner2 from "../Sections/Banner2/Banner2";
import Services from "../Sections/Services/Services";
import Contact from "../Sections/Contact/Contact";
import AppStoreBanner from "../Sections/AppStoreBanner/AppStoreBanner";
import Testimonial from "../Sections/Testimonials/Testimonials";
import Experience from "../Sections/Experience/Experience";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Banner2 />
      <Services />
      <Contact />
      <AppStoreBanner />
      <Testimonial />
      <Experience />
    </>
  );
};

export default HomePage;