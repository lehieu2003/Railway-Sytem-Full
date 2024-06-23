import { Container, Button } from "./FillInformationCss";
import React, { useEffect, useState } from "react";
import { Step } from "../../../constants/stepper";
import { Users, Bookers } from "../../../constants/users";
import { listTrain } from "../../../constants/trains";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ConfirmInfo = () => {

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [finalPriceAfterReduce, setFinalPriceAfterReduce] = useState();
  const [payment, setPayMent] = useState('');

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/fill-information");
  };

  const handlePayment = async () => {
    const paymentMethod = localStorage.getItem("PaymentMethod");
    const amount = finalPriceAfterReduce;
    if (paymentMethod === "PayLater") {
      navigate("/successful");
    } else {
      try {
        const url = `http://localhost:8080/pay?amount=${amount}`;
        const response = await axios.post(url);
        const paymentUrl = response.data;
        window.location.href = paymentUrl;
      } catch (err) {
        console.error("Error:", err);
      }
    }
   




  };


  useEffect(() => {
    const finalPriceAfterReduceData = localStorage.getItem("finalPriceAfterReduce");
    if (finalPriceAfterReduceData) {
      setFinalPriceAfterReduce(finalPriceAfterReduceData);
    }
  }, []);

  useEffect(() => {
    const selectedSeatData = localStorage.getItem("selectedSeat");
    if (selectedSeatData) {
      const selectedSeat = JSON.parse(selectedSeatData);
      console.log(selectedSeat);
      setSelectedSeats(selectedSeat);
    }
  }, []);

  const renderSelectedSeats = () => {
    return selectedSeats.map((seat, index) => (
      <div key={index}>
        <span>
          {[
            seat.nameCar,
            "-",
            seat.fromStation,
            "-",
            seat.toStation,
            "-",
          ]}
        </span>
        <span>
          {[seat.dateStart, "\t", seat.timeStart]}
        </span>
        <span>
          {[
            "-",
            seat.name,
            "-",
            seat.seatChair,
          ]}
        </span>
      </div>
    ));
  };


  return (
    <Container>
      <div className="flex justify-center ">
        <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between flex space-x-8  rtl:space-x-reverse sm:flex hidden">
          <Step number={1} title="User info" isActive={false} />
          <Step number={2} title="Confirm info" isActive={true} />
          <Step number={3} title="Payment info" isActive={false} />
          <Step number={4} title="Done" isActive={false} />
        </ol>
      </div>
      <div className="flex flex-row m-3 gap-0 p-1">
        <h2 className="pl-2 text-transform: uppercase text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
          Confirm Information
        </h2>
        <img
          src="label_bg.png"
          alt="Description of image"
          className="rounded-tl-none rounded-bl-none rounded"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-col w-max m-4 pb-4 bg-gray-200 rounded-lg shadow-lg">
          <div className="flex-col pb-4 pl-4 pt-4">
            <h1 className="text-l font-bold text-red-500 text-transform: uppercase pb-3">
              Ticket Buyer Information
            </h1>
            <div className="flex-col flex ml-20 sm:flex sm:flex-col sm:justify-between sm:pb-4 sm:mr-6 sm:ml-6">
              <div className="flex flex-col sm:flex-row sm:flex">
                <p className="relative w-1/2">
                  {"Full Name: "} <span>{Bookers.fullName}</span>
                </p>
                <p className="relative w-1/2">
                  {"ID Number: "} <span>{Bookers.idNumber}</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:flex">
                <p className="relative w-1/2">
                  {"Payment Method: "} <span>{Bookers.paymentMethod}</span>
                </p>
                <p className="relative w-1/2">
                  {"Phone number: "} <span>{Bookers.phone}</span>
                </p>
              </div>
              <p>
                {"Email: "} <span>{Bookers.email}</span>
              </p>
            </div>
            <div>
              <table className="border-separate border-0.5 border-slate-300 rounded-lg mr-4 ml-4">
                <thead className="h-12 bg-white">
                  <tr>
                    <th className="border-t-2 border-customBlue w-1/12 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl">
                      No
                    </th>
                    <th className="border-t-2 border-customBlue w-1/2 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  ">
                      Ticket Information
                    </th>
                    <th className="border-t-2 border-customBlue w-1/12 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td>
                      <p className="text-center">1</p>
                    </td>
                    <td>
                      <div className="flex flex-col ">
                        <div className="flex flex-row justify-between m-4">
                          <p>{"Full Name: " + Users.fullName}</p>
                          <p>{"Subject: " + Users.subject}</p>
                          <p>{"ID: " + Users.idNumber}</p>
                        </div>
                        <div className="m-4">
                          <p>
                            {renderSelectedSeats()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-center">
                        {finalPriceAfterReduce}
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-white">
                  <tr className="border-sepatare bg-gray-100">
                    <td
                      colSpan="2"
                      className="border-b-2 rounded-bl px-4 py-4 border-customBlue"
                    >
                      <p className="text-l mr-4  font-bold text-black text-right">

                      </p>
                    </td>
                    <td
                      colSpan="1"
                      className="border-b-2 border-customBlue rounded-br"
                    >
                      <p className="text-l font-bold text-black text-center">
                        Total
                      </p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-l m-4 ml-10">
          Quy khach vui long doc ky va chuyen tiep sang trang thanh toan
        </p>
      </div>
      <div className="flex flex-row justify-between m-4 pl-8 pr-8">
        <button
          onClick={handleBack}
          className="focus:o  utline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Back
        </button>
        <button
          onClick={handlePayment}
          className="focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default ConfirmInfo;
