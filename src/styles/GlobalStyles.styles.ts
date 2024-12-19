import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const FormContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Field = styled.label`
  text-align: start;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const FieldWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-left: 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 8px 8px 32px;
  appearance: none;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #007bff;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #007bff;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const FieldIcon = styled.img`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  text-align: center;
`;

export const AddFormButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  color: rgb(0, 140, 186);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 140, 186, 0.2);
  }

  span {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      width: 15px;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005f76;
  }
`;
