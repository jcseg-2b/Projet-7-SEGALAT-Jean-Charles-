import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggle}>
        <h2>{title}</h2>
        <i
          className={
            isOpen ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"
          }
        ></i>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
