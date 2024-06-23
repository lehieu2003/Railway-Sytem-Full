import { Container, LogoAndTextBox, TextBox } from "./HomeInfoDivElements";
import { FaRegClock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";

const HomeInfoDiv = () => {
  const styleSmallText = {
    fontSize: 13,
  };
  const styleLargeText = {
    fontSize: 19,
  };

  return (
    <Container>
      <LogoAndTextBox>
        <CiShoppingTag style={{ cursor: "pointer" }} />
        <TextBox>
          <h2 style={styleLargeText}>
            Get Train Tickets from the comfort of your home
          </h2>
          <br></br>
          <text style={styleSmallText}>
            Book train tickets from anywhere using the robust ticketing platform
            exclusively built to provide the passengers with pleasant ticketing
            experience. Also check out the mobile app RailSheba to further
            extend your pleasure of booking train tickets.
          </text>
        </TextBox>
      </LogoAndTextBox>

      <LogoAndTextBox>
        <FaRegClock style={{ cursor: "pointer" }} />

        <TextBox>
          <h2 style={styleLargeText}>
            Train & Ticketing related information at your fingertips
          </h2>
          <br></br>
          <text style={styleSmallText}>
            Checkout available seats, route information, fare information on
            real time basis with Esheba Platform.
          </text>
        </TextBox>
      </LogoAndTextBox>

      <LogoAndTextBox>
        <CiLock style={{ cursor: "pointer" }} />

        <TextBox>
          <h2 style={styleLargeText}>Pay Securely</h2>
          <br></br>
          <text style={styleSmallText}>
            Pay using your convenient payment option. Bangladesh Railway
            supports Visa, Master, Amex & Nexus Cards, Rocket and bKash Mobile
            Financial Services for your convenience.
          </text>
        </TextBox>
      </LogoAndTextBox>
    </Container>
  );
};
export default HomeInfoDiv;
