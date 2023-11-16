import React from "react";
import styled from "styled-components";
import { Button } from "antd";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  //styled.원하는 태그 선택 '(백틱) '(백틱), 열고 닫고

  return (
    <Wrapper>
      <div>
        <h1>메인 페이지</h1>
        <Container>
          <MainTitleTextCss>styled components test</MainTitleTextCss>
          <Button title="회원가입하기" onClick={() => navigate("/Join")}>
            회원가입하기
          </Button>
          <br />
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
