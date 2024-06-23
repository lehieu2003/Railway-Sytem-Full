import { Container } from "../../FindCard/TrainResult/BuyTicket/FillInformationCss";
import { Step } from "../../constants/stepper";
import { useNavigate } from "react-router-dom";

const Done = () => {
    const navigate = useNavigate();
    const handleCheck = () =>{
        navigate("/bookingInformation")
    }
    const handleHome = () =>{
        navigate("/home")
    }
  return (
    <Container>
      <div className="flex justify-center ">
        <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between flex space-x-8  rtl:space-x-reverse sm:flex hidden">
          <Step number={1} title="User info" isActive={false} />
          <Step number={2} title="Confirm info" isActive={false} />
          <Step number={3} title="Payment info" isActive={false} />
          <Step number={4} title="Done" isActive={true} />
        </ol>
      </div>
      <div className="mb-5 border-b-2  rounded-br rounded-bl border-t-2 border-customBlue rounded-tr rounded-tl mx-auto mt-5 flex-col">
      <img
          src="image.png"
          alt="Description of image"
          className="rounded-tl-none rounded-bl-none rounded"
        />
      </div>
      <div className="p-5 flex-col mx-auto mt-5">
        <p>You have successfully made the payment</p>
        <p>Thank you for booking your ticket</p>
      </div>
      <div className="flex flex-row justify-between m-4 pl-8 pr-8">
        <button
          onClick={handleCheck}
          className="focus:o  utline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Check
        </button>
        <button
          onClick={handleHome}
          className="focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Home
        </button>
      </div>
    </Container>
  );
};

export default Done;
