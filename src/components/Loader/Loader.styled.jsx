import styled from "@emotion/styled";

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: darkblue;

  text-transform: capitalize;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    animation: icon-spin 2s infinite linear;
  }
  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
