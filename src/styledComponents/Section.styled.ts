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
  background: #fff;
  text-decoration: none;
  color: #777;
  font-size: 0.9rem;
  &:first-child {
    border-top: 1px solid #ddd;
    margin: 0.2rem 0 0 0;
  }
  border-bottom: 1px solid #ddd;
  &:hover {
    background: rgba(220, 220, 220, 0.3);
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
