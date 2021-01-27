import React, { useEffect, useState } from "react";
import Axios from "axios";
import Badge from "react-bootstrap/Badge";
import "./Facts.css";

const Facts = () => {
  const [categories, setCategories] = useState([]);
  const facts = [];

  useEffect(() => {
    Axios({
      url: "https://api.chucknorris.io/jokes/categories",
    })
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [setCategories]);

  const getFactCategory = (category) => {
    Axios({
      url: `https://api.chucknorris.io/jokes/random?category=${category}`,
    })
      .then((response) => {
        facts.push(response.data.value);
        console.log(facts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
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
    </div>
  );
};
export default Facts;
