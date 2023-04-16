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
  display: flex;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid white;
  margin: 0.5rem 0;
  ${typography.body_01_400}
  font-size: 19px;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(var(--bg-color));
  :has(.modal-content) {
    background-color: transparent;
  }

  padding: 1rem;
  border-radius: 0.8rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  ${typography.body_01_600}
  color: white;
`;
export const Input = styled.input`
  width: 5rem;
  height: 3rem;
  margin: 0 1rem;
  text-align: center;
  outline: none;
  ${typography.caption_01}

  /* Hide */
  appearance: textfield !important;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
`;

export const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  background-color: rgba(var(--brand-color));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
