import { Container, TextBox, FindCardBox } from "./HeaderElements";
import FindCard from "../FindCard";
const Header = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "0px auto ",
          width: "100%",
          height: "70vh",
          justifySelf: "center",
          gap: "20px",
          position: "relative",
          top: "-30px",
        }}
      >
        <TextBox>
          <h1>
            Welcome to <br />
            Railway <br />
            E-Ticketing Service
          </h1>
        </TextBox>

        <FindCardBox>
          <FindCard />
        </FindCardBox>
      </div>
    </Container>
  );
};
export default Header;
