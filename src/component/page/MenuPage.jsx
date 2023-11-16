import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../API_component2/Categories";
import MenuList from "../API_component2/MenuList";

const MenuPage = () => {
  const params = useParams();
  const category = params.category || "korean";
  return (
    <div>
      <Categories />
      <MenuList category={category} />
    </div>
  );
};

export default MenuPage;
