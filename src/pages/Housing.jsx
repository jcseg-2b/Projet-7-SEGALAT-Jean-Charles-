import { useParams } from "react-router-dom";
import logements from "../../data.json";
import "../stylespages/Housing.css";
import { Navigate } from "react-router-dom";
import Collapse from "../components/collapse/Collapse";
import Rating from "../components/rating/Rating";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/*" />;
  }

  return (
    <div>
      <img
        src={logement.cover}
        alt={logement.title}
        className="housing-cover"
      />
      <h1 className="housing-title">{logement.title}</h1>
      <p className="housing-location">{logement.location}</p>
      <Rating rating={logement.rating} />
      <div className="collapse-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Housing;
