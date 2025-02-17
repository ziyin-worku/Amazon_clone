import React from "react";
import { categoryInfo } from "./categoryFullInfo";
import CategoryCard from "./categoryCard";
import classes from "./Category.module.css"

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
