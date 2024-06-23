import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./components/Navbar";
import Register from "./register";
import Login from "./login";
import VerifyTicket from "./verifyTicket";
import TrainResult from "./components/FindCard/TrainResult/TrainResult.jsx";
import "./firebase/config.jsx";
import FillInformation from "./components/FindCard/TrainResult/BuyTicket/FillInformation.jsx";
import ConfirmInformation from "./components/FindCard/TrainResult/BuyTicket/ConfirmInformation.jsx";
import InformationBooking from "./bookingInformation.jsx";
import ForgotBookingCode from "./components/BookingInfor/ForgotBookingCode.jsx";
import PayTicket from "./payTicket.jsx";
import ConfirmPayTicket from "./components/PayTicket/Confirm/ConfirmPayTicket.jsx";
import Pay from "./components/PayTicket/Pay/Pay.jsx";
import AuthProvider from "./components/context/AuthProvider.jsx";
import Done from "./components/PayTicket/Pay/Done.jsx";
import UserManagement from "./components/admin/UserManagement.jsx";

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-ticket" element={<VerifyTicket />} />
          <Route path="/pay-ticket" element={<PayTicket />} />
          <Route path="/train-result" element={<TrainResult />} />
          <Route path="/fill-information" element={<FillInformation />} />
          <Route path="/confirm-information" element={<ConfirmInformation />} />
          {/* <Route path="/payLaterSuccessful" element={<PayLater/>}/> */}
          <Route path="/bookingInformation" element={<InformationBooking />} />
          <Route path="/forgot-booking-code" element={<ForgotBookingCode />} />
          <Route path="/pay-ticket/confirm" element={<ConfirmPayTicket />} />
          <Route path="/pay-ticket/payTicket" element={<Pay />} />
          <Route path="/successful" element={<Done />} />
          <Route path="/admin" element={<UserManagement />} />
        </Routes>
       
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

