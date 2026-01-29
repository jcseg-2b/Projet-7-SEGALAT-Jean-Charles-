import "../stylespages/About.css";
import Banner from "../components/banner/Banner";
import aboutBanner from "../assets/aboutbanner.jpg";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} />
    </div>
  );
}

export default About;
