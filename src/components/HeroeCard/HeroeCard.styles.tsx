import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  max-width: 200px;
  color: white;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%);
  @media (max-width: 400px) {
    max-width: 140px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 12px;
  position: relative;
  background-color: black;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4b0002;
    transition: top 0.5s ease;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  &:hover::before {
    top: 0;
  }
`;
