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
    background-color: ${({ theme }) => theme.colors.lightShade};
    border-radius: 0;
    position: relative;
    padding: 0.5rem 0.75rem 0.5rem 0;
    &:focus {
      color: ${({ theme }) => theme.colors.dark};
      box-shadow: none;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
      background-color: ${({ theme }) => theme.colors.lightShade};
    }
  }
`;

const TextArea = ({ rows = 3, ...rest }) => (
  <FormControlStyled
    as="textarea"
    rows={rows}
    {...rest}
    className="form-control"
  />
);

export default TextArea;
