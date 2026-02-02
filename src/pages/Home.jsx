import "../stylespages/Home.css";
import Banner from "../components/banner/Banner";
import homeBanner from "../assets/homebanner.jpg";
import Card from "../components/cards/Card";
import logements from "../../data.json";

function Home() {
  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      ></Banner>

      <section className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
