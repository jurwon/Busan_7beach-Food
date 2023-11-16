import React from "react";
import styled from "styled-components";

const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #fa7070;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100%-40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <div>
        <h1>메인 페이지</h1>
        <Container>
          <MainTitleTextCss>
            부산 7바다명소 식당 소개 페이지입니다.
          </MainTitleTextCss>
          <br />
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
