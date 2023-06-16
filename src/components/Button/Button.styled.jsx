import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto 20px;
  min-width: 125px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  border-color: darkblue;
  text-transform: capitalize;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.12);
    background-color: rgb(233, 233, 233);
    color: darkblue;
  }
`;