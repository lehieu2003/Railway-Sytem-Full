import { Container } from "./PayCss";
import { Step } from "../../constants/stepper";

const Returned_Tickets = [
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
const Pay = () => {
  return (
    <Container>
      <div className="flex justify-center mb-8">
        <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between space-x-8  rtl:space-x-reverse sm:flex">
          <Step number={1} title="Select paid ticket" isActive={false} />
          <Step number={2} title="Confirm" isActive={false} />
          <Step number={3} title="Return the ticket" isActive={true} />
          <Step number={4} title="Done" isActive={false} />
        </ol>
      </div>{" "}
      <span style={{ color: "#0082c4" }}>Danh sach cac ve chon tra</span>
      {Returned_Tickets.map((ticket) => (
        <div
          style={{
            display: "flex",
            backgroundColor: "#f3f3f3",
            margin: "10px 0",
            flexDirection: "row",
            padding: "20px",
            gap: "100px",
            justifyContent: "center",
          }}
          key={ticket.id}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{ticket.name}</span>
            <span>{ticket.ticketInfor}</span>
            <span>{ticket.price}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <span>{ticket.name}</span>
            <span>{ticket.ticketInfor}</span>
            <span>{ticket.price}</span>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Pay;
