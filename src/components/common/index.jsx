import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  cursor: pointer;
  color: inherit;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
