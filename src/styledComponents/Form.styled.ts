import styled from "styled-components";

export const StyledForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 1rem;
  span {
    display: flex;
    svg {
      width: 35px;
      height: 36px;
      background: #fff;
      border: 1px solid #ddd;
      padding: 0.5rem;
      border-right: none;
    }
  }
`;

export const Input = styled.input`
  padding: 0.5rem 1rem 0.5rem 0.2rem;
  color: #111;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 1rem;
  border-left: none;
  &:focus {
    outline: none;
  }
`;
