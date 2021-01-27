import React from "react";
import "./Section.css";

const Section = ({ title, description }) => {
  return (
    <div>
      <div className="title poppins">{title}</div>
      <div className="description inconsolata">{description}</div>
    </div>
  );
};

export default Section;
