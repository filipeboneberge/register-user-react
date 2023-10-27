import styled from "styled-components";
import BackgroundRegister from "../../assets/backgroundRegister.svg";

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

export const InputLabel = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;

  width: 342px;
  height: 58px;
  padding: 15px 25px;
  margin-bottom: 34px;

  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;
