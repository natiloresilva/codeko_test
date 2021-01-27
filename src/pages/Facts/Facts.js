import React, { useEffect, useState } from "react";
import Axios from "axios";
import Badge from "react-bootstrap/Badge";
import "./Facts.css";
import FactCard from "../../components/FactCard/FactCard";
import imageLeft from "../../assets/images/chuck-left.png";
import imageRight from "../../assets/images/chuck-right.png";

const Facts = () => {
  const [categories, setCategories] = useState([]);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    Axios({
      url: "https://api.chucknorris.io/jokes/categories",
    })
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [setCategories]);

  useEffect(() => {
    setFacts(JSON.parse(localStorage.getItem("facts")) || []);
  }, []);

  const getFactCategory = (category) => {
    Axios({
      url: `https://api.chucknorris.io/jokes/random?category=${category}`,
    })
      .then((response) => {
        setFacts([...facts, response.data]);
        localStorage.setItem(
          "facts",
          JSON.stringify([...facts, response.data])
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (key) => {
    const removeFacts = facts.filter((fact) => fact.id !== key);
    setFacts(removeFacts);
    localStorage.setItem("facts", JSON.stringify(removeFacts));
  };

  const deleteAllFacts = () => {
    setFacts([]);
    localStorage.removeItem("facts");
  };

  return (
    <div className="facts-main-container">
      <div className="badges-container">
        {categories.map((category) => (
          <Badge
            className="badge"
            pill
            variant="secondary"
            key={category}
            onClick={() => getFactCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="badge-delete-container">
        <Badge
          className="badge"
          pill
          variant="light"
          onClick={() => deleteAllFacts()}
        >
          Delete All
        </Badge>
      </div>

      <div className="facts-container">
        <div className="image-facts">
          <img src={imageLeft} alt="chuck-fighting" />
        </div>
        <div className="facts">
          {facts.map((fact) => (
            <FactCard
              key={fact.id}
              category={fact.categories[0]}
              text={fact.value}
              handleDelete={() => handleDelete(fact.id)}
            />
          ))}
        </div>
        <div className="image-facts">
          <img src={imageRight} alt="chuck-fighting" />
        </div>
      </div>
    </div>
  );
};
export default Facts;
