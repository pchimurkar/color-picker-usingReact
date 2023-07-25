import {Container,Navbar} from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Color Picker</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
