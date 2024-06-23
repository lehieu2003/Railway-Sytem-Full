import { Container } from "../PaymentLogos/PaymentLogosElements";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const PaymentLogos = () => {
  return (
    <Container>
      <FaCcVisa />
      <FaCcMastercard />
      <FaRocket />
      <SiAmericanexpress />
    </Container>
  );
};

export default PaymentLogos;
