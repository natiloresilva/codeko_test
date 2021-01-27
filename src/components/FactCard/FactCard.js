import React from "react";
import Card from "react-bootstrap/Card";
import "./FactCard.css";

const FactCard = ({ category, text, handleDelete }) => {
  return (
    <Card className="card">
      <Card.Header className="title-card poppins">
        {category}
        <span className="icon" onClick={handleDelete}>
          <i className="bi bi-file-excel-fill"></i>
        </span>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0 inconsolata">
          <p>{text}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default FactCard;
