import { Container } from "./FillInformationCss";
import React, { useEffect, useState, useRef } from "react";
import { listTrain } from "../../../constants/trains";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Users, Bookers } from "../../../constants/users";
import { Step } from "../../../constants/stepper";
import { selectListTrain } from "../../../../store/filterStore";
import axios from 'axios';

const listInvidual = [
  { value: "Adult", label: "Adult" },
  { value: "Child", label: "Child" },
  { value: "Student", label: "Student" },
  { value: "Elderly", label: "Elderly" },
];

const FillInformation = () => {
  const [selected, setSelected] = useState(listInvidual[0].value);
  const [reduce, setReduce] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fullBookerName, setBookerFullName] = useState("");
  const [idNumberBooker, setIdNumberBooker] = useState("");
  const [fullUserName, setUserFullName] = useState("");
  const [idNumberUser, setIdNumberUser] = useState("");
  const [email, setEmail] = useState("");
  const [fullName,setFullName] = useState("");
  const [cccd,setCCCD] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [atmCard, setAtmCard] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [checkBox, setCheckBox] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [finalPriceAfterReduce,setFinalPriceAfterReduce] = useState('');
  const navigate = useNavigate();
  
  console.log("jh",paymentMethod)

  const handleConfirm = () => {
    if(paymentMethod === "VNP"){
      const ticketData = {
        email: email,
        selectedSeat: selectedSeats,
        phone: phone,
        cccd:cccd,
        fullName:fullName
    };

    axios.post('http://localhost:8080/saveTicketAndCustomer', ticketData)
        .then(response => {
            console.log('Data sent successfully:', response.data);
            navigate("/confirm-information")
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    }else{
      const ticketData = {
        email: email,
        selectedSeat: selectedSeats,
        phone: phone,
        cccd:cccd,
        fullName:fullName
    };

    axios.post('http://localhost:8080/saveTicketAndCustomer', ticketData)
        .then(response => {
            console.log('Data sent successfully:', response.data);
            navigate("/confirm-information")
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    }
    
};

  useEffect(()=>{
    localStorage.setItem("Email",JSON.stringify(email))
  },[email])

  useEffect(()=>{
    localStorage.setItem("Phone",JSON.stringify(phone))
  },[phone])

  useEffect(()=>{
    localStorage.setItem("fullName",JSON.stringify(fullName))
  },[fullName])

  useEffect(()=>{
    localStorage.setItem("cccd",JSON.stringify(cccd))
  },[cccd])


  useEffect(() => {
    const selectedSeatData = localStorage.getItem("selectedSeat");
    if (selectedSeatData) {
      const selectedSeat = JSON.parse(selectedSeatData);
      setSelectedSeats(selectedSeat);
    }
  }, []);


  useEffect(()=>{
    localStorage.setItem("finalPriceAfterReduce",JSON.stringify(finalPriceAfterReduce));
  },[finalPriceAfterReduce]);

  useEffect(()=>{
    localStorage.setItem("PaymentMethod",JSON.stringify(paymentMethod));
  },[paymentMethod]);

  const handleBack = () => {
    navigate("/train-result");
  };
  const validInput = (value) => {
    return isSubmitted && value === "" ? "border-red-500" : "border-gray-300";
  };
  const validPayment = (value) => {
    return isSubmitted && value === false
      ? "border-red-500"
      : "border-customBlue";
  };
  const validCheck = (value) => {
    return isSubmitted && value === false ? "border-1 border-red-500" : "";
  };
  const validEmail = () => {
    return email !== confirmEmail ? "border-red-500" : "border-gray-300";
  };
  useEffect(() => {
    Bookers.fullName = fullBookerName;
    Bookers.idNumber = idNumberBooker;
    Bookers.phone = phone;
    Bookers.email = email;

    Users.fullName = fullUserName;
    Users.idNumber = idNumberUser;
    Users.subject = selected;
  }, [
    fullBookerName,
    idNumberBooker,
    phone,
    email,
    selected,
    fullUserName,
    idNumberUser,
  ]);
  const handleSubmit = (e) => {
    if (
      fullBookerName ||
      idNumberBooker ||
      phone ||
      checkBox ||
      paymentMethod ||
      fullUserName ||
      idNumberUser ||
      email
    ) {
      navigate("/confirm-information");
    } else {
      setIsSubmitted(true)
      alert("Please fill in all the required fields");
    }
  };

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleSelection = (e) => {
    setSelected(e.target.value);
    if (e.target.value === "Student") {
      setReduce(0.05);
      setIsModal(true);
    } else if (e.target.value === "Elderly") {
      setIsModal(true);
      setReduce(0.1);
    } else if (e.target.value === "Child") {
      setIsModal(true);
      setReduce(0.15);
    } else {
      setReduce(0);
    }
  };
  const handleConfirmClick = () => {
    if (selected === "Elderly") {
      validElderlyAge();
    } else if (selected === "Child") {
      validChildAge();
    }
  };
  const validElderlyAge = () => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 60) {
      setReduce(0.1);
    } else {
      setReduce(0);
    }
    setIsModal(false);
  };

  const validChildAge = () => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age <= 10 && age >= 6) {
      setReduce(0.15);
    } else if (age < 6) {
      setReduce(0);
    } else {
      setReduce(0);
    }
    setIsModal(false);
  };


  useEffect(() => {
    setDateOfBirth(`${new Date().getFullYear()}-01-01`);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const paymentMethodRef = useRef(null);

  useEffect(() => {
    const total = finalPrice();
    setFinalPriceAfterReduce(total);
  })

  useEffect(() => {
    const atmCardInputs = document.getElementsByName("atmCard");
    atmCardInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          paymentMethodRef.current.checked = true;
        }
      });
    });
    const paymentMethodInputs = document.getElementsByName("paymentMethod");
    paymentMethodInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          atmCardInputs.forEach((atmInput) => {
            atmInput.checked = false;
          });
        }
      });
    });
  }, []);

  const totalPrice = () => {
    const total = selectedSeats.reduce((accumulator, seat) => accumulator + seat.price, 0);
    return total;
  }

  const finalPrice = () => {
    let total = 0;

    selectedSeats.forEach(seat => {
      let seatPrice = seat.price;

      if (selected === "Student") {
        seatPrice -= seatPrice * 0.05;
      } else if (selected === "Elderly") {
        seatPrice -= seatPrice * 0.1;
      } else if (selected === "Child") {
        seatPrice -= seatPrice * 0.15;
      }
      total += seatPrice;
    });
    return total;
  }


  const finalReduce = () => {
    let total = 0;
    selectedSeats.forEach(seat => {
      let seatPrice = seat.price;
      if (selected === "Student") {
        total += seatPrice * 0.05;
      } else if (selected === "Elderly") {
        total += seatPrice * 0.1;
      } else if (selected === "Child") {
        total += seatPrice * 0.15;
      }
    });
    return total;
  }



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
          <Step number={1} title="User info" isActive={true} />
          <Step number={2} title="Confirm info" isActive={false} />
          <Step number={3} title="Payment info" isActive={false} />
          <Step number={4} title="Done" isActive={false} />
        </ol>
      </div>
      <div className="flex flex-row m-3 gap-0 p-1">
        <h2 className="pl-2 text-transform: uppercase text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
          Ticket booking information
        </h2>
        <img
          src="label_bg.png"
          alt="Description of image"
          className="rounded-tl-none rounded-bl-none rounded"
        />
      </div>
      <div>
        {isLargeScreen ? (
          <table className="border-separate border-0.5 border-slate-300 rounded-lg mr-4 ml-4">
            <thead className="h-12 bg-slate-300">
              <tr>
                <th className="border-t-2 border-customBlue w-1/4 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Information
                </th>
                <th className="border-t-2 border-customBlue w-1/2 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
                  Ticket Info
                </th>
                <th className="border-t-2 border-customBlue w-1/6 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
                  Ticket price
                </th>
                <th className="border-t-2 border-customBlue w-1/6 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
                  Reduce
                </th>
                <th className="border-t-2 border-customBlue w-1/4 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-r-2 border-slate-100">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      required
                      onChange={(e) => setUserFullName(e.target.value)}
                      className={`peer mt-2   h-10 w-full border-2 rounded-lg ${validInput(
                        fullUserName
                      )} text-gray-900 focus:outline-none focus:border-customBlue`}
                      placeholder="Full name"
                    ></input>
                    <select
                      className="h-10 mt-2 w-full border-2 border-gray-300 rounded-lg  w-full"
                      value={selected}
                      onChange={handleSelection}
                    >
                      <option>Select</option>
                      {listInvidual.map((options) => {
                        return (
                          <option key={options.value} value={options.value}>
                            {options.label}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type="text"
                      required
                      onChange={(e) => setIdNumberUser(e.target.value)}
                      className={`peer mt-2 mb-2 h-10 w-full border-2 rounded-lg ${validInput(
                        idNumberUser
                      )} text-gray-900 focus:outline-none focus:border-customBlue`}
                      placeholder="ID number"
                    ></input>
                  </div>
                </td>
                <td className="border-r-2 border-slate-100">
                  <div className=" flex flex-col">
                    {renderSelectedSeats()}
                  </div>
                </td>
                <td className="border-r-2 border-slate-100">
                  <h3 className="text-lg text-center justify-center">
                    {totalPrice()}
                  </h3>
                </td>
                <td className="border-r-2 border-slate-100">
                  <h3 className="text-lg text-center justify-center">
                    {finalReduce()}
                  </h3>
                </td>
                <td className="border-r-2 border-slate-100">
                  <h3 className="text-lg text-center justify-center">
                    {finalPrice()}
                  </h3>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-sepatare bg-gray-100">
                <td
                  colSpan="5"
                  className=" flex-row p-4 border-b-2 border-customBlue rounded-bl"
                >
                </td>
             
              </tr>
            </tfoot>
          </table>
        ) : (
          <div>



          </div>
        )}
      </div>
      <div className="flex-col m-4 pb-4">
        <div className="flex-col pb-4">
          <h1 className="text-l font-bold text-red-500 text-transform: uppercase pb-3">
            Ticket Buyer Information
          </h1>
          <h1>
            Please fill in complete and accurate information about the ticket
            buyer below. This information will be used to verify the ticket
            buyer and to pick up the ticket  at the station before boarding the
            train.
          </h1>
        </div>
        <div className="flex-col flex ml-20 sm:flex sm:flex-row sm:justify-between sm:pb-4 sm:mr-6 sm:ml-6">
          <div className="relative pb-4 w-1/2 mr-2">
            <input
              type="text"
              id="full-name"
              required
              onChange={(e) => setFullName(e.target.value)}
              className={`peer  placeholder-transparent h-10 w-full border-2 rounded-lg ${validInput(
                fullBookerName
              )} text-gray-900 focus:outline-none focus:border-customBlue`}
              placeholder="Full name"
            />
            <label
              htmlFor="full-name"
              className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Full name
            </label>
          </div>
          <div className="relative pb-4 w-1/2">
            <input
              type="text"
              id="id-number"
              required
              onChange={(e) => setCCCD(e.target.value)}
              className={`peer placeholder-transparent h-10 w-full border-2 rounded-lg ${validInput(
                idNumberBooker
              )} text-gray-900 focus:outline-none focus:border-customBlue`}
              placeholder="ID number"
            />
            <label
              htmlFor="id-number"
              className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              ID number
            </label>
          </div>
        </div>

        <div className="flex flex-col ml-20 sm:flex sm:flex-row sm:justify-between sm:pb-4 sm:mr-6 sm:ml-6">
          <div className="relative pb-4 w-1/2 mr-2">
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="peer placeholder-transparent h-10 w-full border-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-customBlue"
            ></input>
            <label
              htmlFor="email"
              className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="relative pb-4 w-1/2">
            <input
              type="email"
              id="confirmEmail"
              required
              placeholder="Confirm Email"
              onChange={(e) => setConfirmEmail(e.target.value)}
              className={`peer placeholder-transparent h-10 w-full border-2 rounded-lg ${validEmail()} text-gray-900 focus:outline-none focus:border-customBlue`}
            />
            <label
              htmlFor="confirmEmail"
              className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Confirm email
            </label>
          </div>
        </div>

        <div className="relative ml-20 sm:mr-4 sm:pb-4 sm:mr-6 sm:ml-6">
          <input
            type="text"
            id="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            className={`peer placeholder-transparent h-10 w-1/2 border-2 rounded-lg ${validInput(
              phone
            )} text-gray-900 focus:outline-none focus:border-customBlue`}
            placeholder="Phone number"
          />
          <label
            htmlFor="phone"
            className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-blue-600 peer-focus:text-sm"
          >
            Phone number
          </label>
        </div>
      </div>
      <div className="ml-4 mb-4">
        <h3 className="text-l font-bold text-red-500 text-transform: uppercase pb-3">
          Payment method
        </h3>
      </div>
      <table className="border-collapse ml-4 mr-4">
        <tbody>
          <tr className="flex flex-col ">
            <td className="flex flex-row m-4 border-t-2  border-customBlue rounded-tl rounded-tr">
            </td>
            <td className="flex flex-row m-4 items-center">
              <input
                value="VNP"
                checked={paymentMethod === "VNP"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                type="radio"
                name="paymentMethod"
                className="mr-5"
              ></input>
              <img
                src="logo-dvtt-VNP.png"
                alt="By VNPAY QR"
                className="rounded-tl-none rounded-bl-none rounded mr-8"
              />
              <p className="font-medium text-customBlue">
                Online payments through the VNPay payment gateway
              </p>
            </td>
            <td className="flex flex-row m-4 items-center border-b-2  border-customBlue rounded-bl rounded-br">
              <input
                value="PayLater"
                checked={paymentMethod === "PayLater"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                type="radio"
                name="paymentMethod"
                className="mr-4"
              ></input>
              <img
                src="logo-dvtt-PayLater.png"
                alt="By ATM"
                className="rounded-tl-none rounded-bl-none rounded mr-4 mb-3"
              />
              <p className="font-medium text-customBlue mb-3">
                Pay later by cashes
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={`flex flex-row items-center  ml-4 mb-4 mr-4`}>
        <h3 className="ml-2 ">
          <input
            onChange={(e) => setCheckBox(e.target.checked)}
            required
            checked={checkBox}
            type="checkbox"
          ></input>{" "}
          I have read carefully and agree to comply with all the regulations for
          online ticket purchasing, the promotional programs of the Vietnam
          Railways Corporation, and bear responsibility for the authenticity of
          the information above.
        </h3>
      </div>
      <div className="flex flex-row justify-between m-4 pl-8 pr-8">
        <button
          onClick={handleBack}
          className="focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Back
        </button>

        <button
          onClick={handleConfirm}
          className="focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
        >
          Next
        </button>
      </div>
      <Modal
        isOpen={isModal}
        className="fixed z-10 inset-0 overflow-y-auto"
        overlayClassName="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >

        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <button onClick={() => setIsModal(false)} className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h1 className="text-2xl text-customBlue font-bold mb-4">Notice</h1>
            {selected === "Elderly" && (
              <h2>
                Elderly people (those aged 60 and above) are entitled to a
                discount policy.
              </h2>
            )}
            {selected === "Child" && (
              <h2 className="pb-2 flex-col">
                Children under 6 years old do not need to buy tickets. Children
                from 6 to 10 years old can buy child tickets.
              </h2>
            )}
            {selected === "Student" && (
              <div className="flex flex-col justify-center">
                <h2>
                  Students must bring their student ID card when picking up
                  tickets.
                </h2>
                <button
                  className="focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 bg-customBlue text-white mx-auto rounded-full px-4 py-2"
                >
                  OK!
                </button>
              </div>
            )}
           
          </div>
        </div>
      </Modal>
    </Container>
  );
};
export default FillInformation;
