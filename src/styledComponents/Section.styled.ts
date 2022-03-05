import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  ul {
    min-width: 35%;
  }
`;

export const User = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 0.4rem;
  margin: 0.5rem 0;
  background: #fff;
  text-decoration: none;
  color: #777;
  font-size: 0.9rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
