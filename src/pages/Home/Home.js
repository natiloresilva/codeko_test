import React from "react";
import ImagePresentation from "../../components/ImagePresentation/ImagePresentation";
import "./Home.css";
import chuck from "../../assets/images/chuck.png";
import sections from "../../data/sections";
import Section from "../../components/Section/Section";

const HomePage = () => {
  return (
    <>
      <ImagePresentation />
      <h1 className="poppins">
        Welcome to the website of <span>Chuck Norris</span>
      </h1>
      <div className="home-container">
        <div className="sections-container">
          {sections.map((section) => {
            return (
              <Section
                title={section.title}
                description={section.description}
              />
            );
          })}
        </div>
        <div className="image">
          <img src={chuck} alt="chuck-fighting" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
