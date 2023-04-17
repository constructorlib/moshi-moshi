import { Container, IconContainer } from "./icon.styled";

export const Icon = ({ icon, children, container, ...props }) => {
  return (
    <Container {...{ container }}>
      <IconContainer {...props}>{icon()}</IconContainer>
      {children}
    </Container>
  );
};

export default Icon;
