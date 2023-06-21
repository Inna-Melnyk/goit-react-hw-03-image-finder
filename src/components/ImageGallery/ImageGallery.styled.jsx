import styled from "@emotion/styled";

export const Container = styled.div`
  width: 95vw;
  max-width: 1400px;
  padding: 20px 10px;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  text-align: center;
`;
export const List = styled.ul`
  padding-bottom: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  object-fit: cover;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  object-fit: contain;
`;
