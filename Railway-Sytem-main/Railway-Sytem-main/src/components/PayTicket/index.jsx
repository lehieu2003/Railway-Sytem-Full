import { Step } from "../constants/stepper";
import { Input } from "./PayTicketCss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PayTicketForm = () => {
  const navigate = useNavigate();
  const [ticketId, setTicketId] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSubmit = () => {
    if (!ticketId || !email || !mobileNo) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/pay-ticket/confirm");
  };
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        position: "relative",
        zIndex: 1,
        top: "80px",
        padding: "20px",
        border: "1px solid black",
        margin: "0 auto",
        flexDirection: "column",
        borderTop: "none",
      }}
    >
      <div className="flex justify-center mb-8">
        <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between space-x-8  rtl:space-x-reverse sm:flex">
          <Step number={1} title="Select paid ticket" isActive={true} />
          <Step number={2} title="Confirm" isActive={false} />
          <Step number={3} title="Return the ticket" isActive={false} />
          <Step number={4} title="Done" isActive={false} />
        </ol>
      </div>{" "}
      <div>
        <div className="flex flex-row gap-0">
          <h2 className="text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
            LOOK UP BOOKING INFORMATION
          </h2>
          <img
            src="label_bg.png"
            alt="Description of image"
            className="rounded-tl-none rounded-bl-none rounded"
          />
        </div>
      </div>
      <span className="font-medium my-3">
        To look up information, please enter the 3 information below correctly.
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "42px",
            marginLeft: "130px",
          }}
        >
          <div>
            <span>Booking code </span>
            <span className="text-red-500">*</span>
          </div>

          <Input
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "85px",
            marginLeft: "130px",
          }}
        >
          <div>
            <span>Email </span>
            <span className="text-red-500">*</span>
          </div>

          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginLeft: "22px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            marginLeft: "130px",
          }}
        >
          <div>
            <span>Phone number </span>
            <span className="text-red-500">*</span>
          </div>

          <Input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            style={{
              marginLeft: "23px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "160px",
        }}
      >
        <button
          style={{
            backgroundColor: "#0082c4",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginLeft: "130px",
          }}
          onClick={handleSubmit}
        >
          Search
        </button>

        <span
          style={{
            marginLeft: "10px",
            cursor: "pointer",
            color: "#0082c4",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          Forgot booking code
        </span>
      </div>
    </div>
  );
};

export default PayTicketForm;
