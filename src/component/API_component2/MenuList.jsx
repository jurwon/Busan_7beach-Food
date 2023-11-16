import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import MenuItem from "../model/MenuItem";

const MenuListCss = styled.div`
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

//https://busan-7beach.openapi.redtable.global/api/menu/korean?serviceKey=BoGq4yf60wTcnY7KBzwjDtnkb8Za8w1B8gatmktsAW0QLNKxnMvksGh27rngdxwT
// "body": [
//   {
//       "MENU_ID": 104,
//       "MENU_NM": "생갈비(1인분/180g)",
//       "MENU_PRICE": 48000,
//       "SPCLT_MENU_YN": "N",
//       "SPCLT_MENU_NM": null,
//       "SPCLT_MENU_OGN_URL": null,
//       "AREA_NM": "부산광역시 해운대구",
//       "RSTR_ID": 1241,
//       "RSTR_NM": "해운대암소갈비집"
//   },

const MenuList = ({ category }) => {
  const [data, setData] = useState(null);
  //data 받는중이면 true, 다 받았으면 false
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const query = category === "" ? "korean" : `${category}`;

        console.log(query);

        const response = await axios.get(
          `https://busan-7beach.openapi.redtable.global/api/menu/${query}?serviceKey=BoGq4yf60wTcnY7KBzwjDtnkb8Za8w1B8gatmktsAW0QLNKxnMvksGh27rngdxwT`
        );
        setData(response.data.body);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
      setLoading(false);
    };
    resultData();
  }, [category]);

  if (loading) {
    return <MenuListCss>데이터 받는중 (대기중...) </MenuListCss>;
  }

  if (!data) {
    console.log("데이터 못받아옴");
    return null;
  }

  return (
    <MenuListCss>
      {data.map((item) => (
        <MenuItem key={item.MENU_ID} item={item} />
      ))}
    </MenuListCss>
  );
};

export default MenuList;
