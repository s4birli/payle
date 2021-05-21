import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { rgba } from "polished";

const FormControlStyled = styled(Form.Control)`
  &.form-control {
    border: none;
    color: ${({ theme }) => theme.colors.dark};
    border-bottom: ${({ theme }) => `1px solid
      ${rgba(theme.colors.dark, 0.5)}`};
    border-radius: 0;
    position: relative;
    background-color: ${({ theme }) => theme.colors.lightShade};
    padding: 0.5rem 0.75rem 0.5rem 0;
    height: calc(1.5em + 1.5rem + 2px);
    &:focus {
      color: ${({ theme }) => theme.colors.dark};
      box-shadow: none;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
      background-color: ${({ theme }) => theme.colors.lightShade};
    }
  }
`;

const Input = ({ type = "text", placeholder = "", ...rest }) => (
  <FormControlStyled type={type} placeholder={placeholder} {...rest} />
);

export default Input;
