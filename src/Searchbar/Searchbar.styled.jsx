import styled from '@emotion/styled';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Header = styled.div`
  padding: 25px 20px;
  border: 1px solid #d8d5d4;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-color: #3434ce;
`;

export const Form = styled(FormikForm)`
  margin: 0 auto;
  position: relative;
  max-width: 230px;
`;

export const Field = styled(FormikField)`
  max-width: 230px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border-color: darkblue;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: -25px;
  cursor: pointer;
  padding: 8px;
  background-color: transparent;
  border: none;

  svg {
    fill: yellow;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      fill: #ffd900;
      transform: scale(1.2);
    }
  }
`;
