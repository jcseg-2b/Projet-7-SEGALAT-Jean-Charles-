import "./Rating.css";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star) => (
        <i
          key={star}
          className={`fa-solid fa-star ${star <= rating ? "star-active" : "star-inactive"}`}
        ></i>
      ))}
    </div>
  );
}
export default Rating;
