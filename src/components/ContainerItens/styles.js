import styled from "styled-components";

export const ContainerItens = styled.div`
  height: 100%;
  min-height: calc(100vh - 247px);

  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  padding: 50px 36px;

  ${(props) =>
    props.isBlur &&
    `
        backdrop-filter: blur(22.5px);
        min-height: calc(100vh - 170px);
  `}
`;
