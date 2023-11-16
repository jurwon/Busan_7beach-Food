import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "korean", text: "Korean" },
  { name: "eng", text: "English" },
  { name: "chchr", text: "Chinese" },
  { name: "jpnse", text: "Japanes" },
];

const CategoriesBlockCss = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 0 auto;
  margin: 0 auto;
  max-width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesCss = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.5rem;
  &:hover {
    color: red;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid violet;
    color: aqua;
    &:hover {
      color: green;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "" ? "/menuPage/korean" : `/menuPage/${c.name}`}
        >
          {c.text}
        </CategoriesCss>
      ))}
    </CategoriesBlockCss>
  );
};

export default Categories;
