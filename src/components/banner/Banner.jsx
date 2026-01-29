import "./Banner.css";

function Banner({ title, image }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      <p className="bannertitle">{title}</p>
    </div>
  );
}
export default Banner;
