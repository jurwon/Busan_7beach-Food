import React from "react";
import styled from "styled-components";

const MenuItemCss = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid gray;

  /* 이미지, thumbnail */
  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 300px;
      height: 200px;

      /* 해당 사이즈에 비율 맞춰 이미지 크기 조정 */
      object-fit: cover;
    }
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      color: #557c55;
      text-decoration: none;
    }

    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  /*  & :현재 요소
   &+& :형제 연산자, 요소의 이웃, 같은 요소를 나열시 */
  & + & {
    margin-top: 3rem;
  }
`;

const MenuItem = ({ item }) => {
  const { MENU_NM, MENU_PRICE, RSTR_ID, RSTR_NM } = item;
  return (
    <div>
      <MenuItemCss>
        <div className="contents">
          <h2>
            {RSTR_NM} (ID : {RSTR_ID})
          </h2>
          <p>{MENU_NM}</p>
          <p>가격 : {MENU_PRICE}</p>
        </div>
      </MenuItemCss>
    </div>
  );
};

export default MenuItem;
