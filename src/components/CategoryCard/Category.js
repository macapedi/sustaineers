import React from "react";
import "./Category.scss";

const Category = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Category;
