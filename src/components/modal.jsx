import { Container } from "./modal.styled";

const Modal = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Modal;
