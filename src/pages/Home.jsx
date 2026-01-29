import "../stylespages/Home.css";
import Banner from "../components/banner/Banner";
import homeBanner from "../assets/homebanner.jpg";

function Home() {
  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      ></Banner>
    </>
  );
}

export default Home;
