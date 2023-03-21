import { Container, IconContainer } from "./icon.styled";

export const Icon = ({ icon, children, ...props }) => {
  return (
    <Container>
      <IconContainer {...props}>{icon()}</IconContainer>
      {children}
    </Container>
  );
};

export default Icon;
