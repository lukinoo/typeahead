import React from "react";
import { StyledForm, Input } from "../styledComponents/Form.styled";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<Props> = ({ input, setInput }) => {
  return (
    <StyledForm>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
        >
          <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
        </svg>
      </span>
      <Input
        value={input || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        type="search"
        placeholder="search user..."
      />
    </StyledForm>
  );
};

export default Form;
