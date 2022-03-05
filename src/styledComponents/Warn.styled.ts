import styled from "styled-components";

export const StyledWarn = styled.div`
  max-width: 30%;
  position: fixed;
  bottom: 5%;
  left: 0;
  display: flex;
  align-items: center;
  transform: translate(0, -5%);
  padding: 0.5rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: #ffc300;
  color: #222;
  opacity: 0;
  pointer-events: none;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  p {
    font-size: 0.7rem;
  }
  &.warn-active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Button = styled.button`
  background: #000;
  border: none;
  padding: 0.4rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.6rem;
  border-radius: 3px;
  cursor: pointer;
`;
