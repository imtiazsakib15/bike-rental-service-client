import Banner from "@/components/custom/Home/Banner";
import Blogs from "@/components/custom/Home/Blogs";
import ContactUs from "@/components/custom/Home/ContactUs";
import FeaturedBikes from "@/components/custom/Home/FeaturedBikes";
import Testimonials from "@/components/custom/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedBikes />
      <Testimonials />
      <ContactUs />
      <Blogs />
    </>
  );
};

export default Home;
