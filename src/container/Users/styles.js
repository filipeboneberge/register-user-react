import styled from "styled-components";
import BackgroundRegister from "../../assets/backgroundUsers.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  background: url("${BackgroundRegister}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;

  width: 342px;
  height: 58px;
  padding: 15px 25px;
  margin-top: 20px;

  p {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
