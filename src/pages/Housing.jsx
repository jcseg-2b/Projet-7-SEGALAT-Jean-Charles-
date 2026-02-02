import { useParams } from "react-router-dom";
import logements from "../../data.json";
import "../stylespages/Housing.css";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  return (
    <div>
      <img
        src={logement.cover}
        alt={logement.title}
        className="housing-cover"
      />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.description}</p>
    </div>
  );
}

export default Housing;
