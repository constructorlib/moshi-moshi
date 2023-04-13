import styled from "styled-components";
import { typography } from "styles";

export const Page = styled.div`
  ${typography.body_01_400}
  height: 100vh;
  width: 100vw;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(var(--bg-color));
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(var(--text-color));
`;

export const Timer = styled.div`
  ${typography.header_01}
  letter-spacing: 1px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 3rem 0;
`;
export const ListItem = styled.div`
  color: rgba(var(--text-color));
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })``;
export const Label = styled.div`
  color: rgba(var(--text-color));
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
