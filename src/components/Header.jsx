import React from "react";
import styled from "styled-components";
import { Link } from "./common";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.p`
  font-size: 2rem;
  margin: 1rem;
`;

const MenuText = styled.p`
  font-size: 1.4rem;
  margin: 1rem;
`;

const Header = () => {
  return (
    <Container>
      <HeaderText>막차 운영 시스템</HeaderText>
      <MenuTextWrapper>
        <Link to="/">
          <MenuText>피드백 확인</MenuText>
        </Link>
        <Link to="/notice">
          <MenuText>공지사항 확인</MenuText>
        </Link>
        <Link to="/create-notice">
          <MenuText>공지사항 작성</MenuText>
        </Link>
      </MenuTextWrapper>
    </Container>
  );
};

export default Header;
