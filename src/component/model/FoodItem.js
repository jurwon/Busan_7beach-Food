import React from "react";
import styled from "styled-components";

const FoodItemCss = styled.div`
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
    /* margin: 0 auto; */

    a {
      color: #557c55;
      text-decoration: none;
    }

    p {
      margin: 0 auto;
      line-height: 1.5;
      margin-top: 0.5rem;
      /* 브라우저 너비에 따라 자동으로 줄바꿈 */
      white-space: normal;
    }
  }

  /*  & :현재 요소
   &+& :형제 연산자, 요소의 이웃, 같은 요소를 나열시 */
  & + & {
    margin-top: 3rem;
  }
`;

const FoodItem = ({ item }) => {
  const { RSTR_NM, AREA_NM, MENU_ID, FOOD_IMG_URL } = item;
  return (
    <div>
      <FoodItemCss>
        {FOOD_IMG_URL && (
          <div className="thumbnail">
            <img src={FOOD_IMG_URL} alt="thumbnail" />
          </div>
        )}
        <div className="contents">
          <h2>{RSTR_NM}</h2>
          <p>{AREA_NM}</p>
          <p>{MENU_ID}</p>
        </div>
      </FoodItemCss>
    </div>
  );
};

export default FoodItem;
