import "./Slideshow.css";
import { useState, useEffect } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % pictures.length);
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex(
          (prev) => (prev - 1 + pictures.length) % pictures.length,
        );
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [pictures.length]);

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide} className="prev-button">
        ‹
      </button>
      <img
        src={pictures[currentIndex]}
        alt="slideshow"
        className="slideshow-image"
      />

      <button onClick={nextSlide} className="next-button">
        ›
      </button>
    </div>
  );
}

export default Slideshow;
