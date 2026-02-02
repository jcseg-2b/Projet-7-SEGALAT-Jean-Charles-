import "./Card.css";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card-link">
      <article className="card">
        <img src={cover} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </article>
    </Link>
  );
}
export default Card;
