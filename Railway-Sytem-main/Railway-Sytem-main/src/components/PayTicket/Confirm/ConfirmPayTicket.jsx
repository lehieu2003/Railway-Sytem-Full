import { useNavigate } from "react-router-dom";
import { Container, Item, Input } from "./ConfirmPaymentTicketCss";
import { Step } from "../../constants/stepper";
export const PaymentFee = 101000;
const tickets = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    cmnd: "123456789",
    type: "Người lớn",
    seatType: "Ghế ngồi",
    ticketInfor: "Tàu SE3, ghế 1, 2, 3",
    price: 1500000,
    status: "Đã thanh toán",
    email: "hello",
    mobileNo: "0123456789",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    cmnd: "123456789",
    type: "Người lớn",
    seatType: "Ghế ngồi",
    ticketInfor: "Tàu SE3, ghế 1, 2, 3",
    price: 1500000,
    status: "Đã thanh toán",
    email: "hello",
    mobileNo: "0123456789",
  },
];
const ConfirmPayTicket = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/pay-ticket/payTicket");
  };

  //write handle pick ticket to pay

  const handlePick = (e) => {
    if (e.target.checked) {
      console.log("picked");
    } else {
      console.log("unpicked");
    }
  };

  return (
    <Container>
      <div className="flex justify-center mb-8">
        <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between space-x-8  rtl:space-x-reverse sm:flex">
          <Step number={1} title="Select paid ticket" isActive={false} />
          <Step number={2} title="Confirm" isActive={true} />
          <Step number={3} title="Return the ticket" isActive={false} />
          <Step number={4} title="Done" isActive={false} />
        </ol>
      </div>{" "}
      <span className="font-medium my-3">successful transactions </span>
      <div>
        <span style={{ color: "#0082c4" }}>
          Quảng Ngãi - Sài Gòn 25/02/2024
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.2fr",
        }}
      >
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          #
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Full name{" "}
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Ticket information{" "}
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Price{" "}
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Type of seat
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Le phi tra ve{" "}
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          tien tra lai (VND){" "}
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Status
        </Item>
        <Item style={{ backgroundColor: "#eeeeee", textAlign: "center" }}>
          Pick
        </Item>
        {tickets.map((ticket) => (
          <>
            <Item>{ticket.id}</Item>
            <Item>{ticket.name}</Item>
            <Item>{ticket.ticketInfor}</Item>
            <Item>{ticket.price}</Item>
            <Item>{ticket.seatType}</Item>
            <Item>{PaymentFee}</Item>
            <Item>{ticket.price - PaymentFee}</Item>
            <Item>{ticket.status}</Item>
            <Item>
              <input type="checkbox" onChange={handlePick} />
            </Item>
          </>
        ))}
      </div>
      <span className="font-medium my-3">ticket booking information </span>
      <span
        style={{
          color: "#dd5227",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Thông tin người đặt vé
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "130px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <span>Full name </span>
            <Input
              type="text"
              disabled={true}
              value={tickets[0].name}
              style={{
                marginLeft: "76px",
              }}
            />
          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <span>Email </span>
            <Input
              type="email"
              disabled={true}
              value={tickets[0].email}
              style={{
                marginLeft: "88px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <span>ID card </span>
            <Input
              type="text"
              disabled={true}
              value={tickets[0].cmnd}
              style={{
                marginLeft: "97px",
              }}
            />
          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <span>Phone number</span>
            <Input
              type="phone"
              disabled={true}
              value={tickets[0].mobileNo}
              style={{
                marginLeft: "18px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "#0082c4",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            width: "100px",
          }}
          onClick={handleSubmit}
        >
          Request to pay ticket
        </button>
      </div>
    </Container>
  );
};

export default ConfirmPayTicket;
