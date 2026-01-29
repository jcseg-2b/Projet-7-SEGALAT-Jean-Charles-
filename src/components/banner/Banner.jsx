import "./Banner.css";

function Banner({ title, image }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      <h1 className="bannertitle">{title}</h1>
    </div>
  );
}
export default Banner;
