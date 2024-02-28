import styled from "styled-components";

export const DetailHeader = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  gap: 48px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 97% 100%, 0 100%);
  @media (max-width: 600px) {
    flex-direction: column;
    clip-path: polygon(0 0, 100% 0, 100% 97%, 90% 100%, 0 100%);
  }
`;
