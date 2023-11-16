import React, { useState, useCallback } from "react";

import MenuList from "./MenuList";
import Categories from "./Categories";

const MenuBusan = () => {
  const [category, setCategory] = useState("korea");

  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <h1>MenuBusan</h1>
      <Categories category={category} onSelect={onSelect} />
      <MenuList category={category} />
    </div>
  );
};

export default MenuBusan;
