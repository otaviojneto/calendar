import styled from "styled-components";

export type DaysPropsColor = {
  active?: boolean;
};

export const Container = styled.div`
  background-color: gray;
`;

export const Content = styled.div`
  background-color: yellow;
  width: 100%;
`;

export const HeaderDate = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const ContentMonth = styled.div`
  background-color: #242228;
  height: 100%;
`;

export const DateTitle = styled.div``;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const TextWeekDays = styled.div`
  color: white;
  text-align: center;
`;

export const ContentDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
`;

export const DaysDisable = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  opacity: 0.4;
`;

export const Days = styled.div<DaysPropsColor>`
  background-color: ${({ active }: DaysPropsColor) => (active ? "red" : "")};
  border: 2px solid transparent;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: 0.2s;

  &:hover {
    border: 2px solid;
  }
`;
