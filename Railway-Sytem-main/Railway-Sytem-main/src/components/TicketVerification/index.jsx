import { Container, Heading, Form, Button } from "./VerifyTicketElement";
import { useState } from "react";
import Axios from "axios";

const TicketVerification = () => {
  const [ticketId, setTicketId] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const pressedVerify = async () => {
    // const token = localStorage.getItem("token");
    // // call API to verify ticket
    // Axios.post(
    //   "http://localhost:5000/tickets/verify",
    //   {
    //     ticketId: ticketId,
    //     mobileNo: mobileNo,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //     alert("Ticket verified");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Ticket not verified");
    //   });
  };
  return (
    <div className="flex pt-20 pb-20">
      <Container>
        <Heading>
          <h2 className="text-gray-50 text-center text-3xl">
            Verify Your Ticket
          </h2>
        </Heading>

        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="p-0">Ticket id</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="text"
              placeholder="Enter ticket id"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="p-0">Mobile No</label>
            <input
              className="h-10 pl-3 border border-gray-950 rounded-md"
              type="text"
              placeholder="Enter mobile no"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          <Button onClick={pressedVerify}>Verify</Button>
        </Form>
      </Container>
    </div>
  );
};

export default TicketVerification;
