import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import FoodItem from "../model/FoodItem";

const BusanListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//https://busan-7beach.openapi.redtable.global/api/food/img?serviceKey=BoGq4yf60wTcnY7KBzwjDtnkb8Za8w1B8gatmktsAW0QLNKxnMvksGh27rngdxwT
// {
//   "RSTR_ID": 1241,
//   "RSTR_NM": "해운대암소갈비집",
//   "AREA_NM": "부산광역시 해운대구",
//   "MENU_ID": 107,
//   "FOOD_IMG_URL": "https://ukcooyocdlvo8099722.cdn.ntruss.com/public_data/menu_images/3137300_1638842983_menu.png"
// },

const BusanFoodList = () => {
  const [body, setBody] = useState(null);
  //data 받는중이면 true, 다 받았으면 false
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://busan-7beach.openapi.redtable.global/api/food/img?serviceKey=BoGq4yf60wTcnY7KBzwjDtnkb8Za8w1B8gatmktsAW0QLNKxnMvksGh27rngdxwT`
        );
        setBody(response.data.body);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
      setLoading(false);
    };
    resultData();
  }, []);

  if (loading) {
    return <BusanListCss>데이터 받는중 (대기중...) </BusanListCss>;
  }

  if (!body) {
    console.log("데이터 못받아옴");
    return null;
  }

  return (
    <BusanListCss>
      {body.map((item) => (
        <FoodItem key={item.RSTR_ID} item={item} />
      ))}
    </BusanListCss>
  );
};

export default BusanFoodList;
