import React from "react";
import "./Todo.css";
import styled from "styled-components";
import { darken, lighten } from "polished";

export const GoBoardbutton = styled.button`
  box-sizing: border-box;
  width: 160px;
  height: 70px;
  background: #f6c6ea;
  border: 3px solid #000000;
  box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 75px;
  align-items: center;
`;

export const Editbutton = styled.button`
  width: 108px;
  height: 70px;
  background: #f6c6ea;
  border: 3px solid #000000;
  box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  margin: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
