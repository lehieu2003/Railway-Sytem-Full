// import { Step } from "../../constants/stepper";
// import { Container, Button } from "../../FindCard/TrainResult/BuyTicket/FillInformationCss";
// import { listTrain } from "../../../../constants/trains";
// import {Users, Bookers} from "../../../../constants/users";
// import {useNavigate } from "react-router-dom";


// const PayLater = () => {
//   const navigate = useNavigate()
//   const handleHome = () => {
//     navigate("/home");
//   }
    
//   return (
//     <Container>
//       <div className="flex justify-center ">
//         <ol className="mt-5 pl-5 pr-5 items-center w-full justify-between flex space-x-8  rtl:space-x-reverse sm:flex hidden">
//           <Step number={1} title="User info" isActive={false} />
//           <Step number={2} title="Confirm info" isActive={false} />
//           <Step number={3} title="Payment info" isActive={true} />
//           <Step number={4} title="Done" isActive={false} />
//         </ol>
//       </div>
//       <div className="flex flex-row m-3 gap-0 p-1">
//         <h2 className="pl-2 text-transform: uppercase text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
//           Pay Later
//         </h2>
//         <img
//           src="label_bg.png"
//           alt="Description of image"
//           className="rounded-tl-none rounded-bl-none rounded"
//         />
//       </div>
//       <div>
//       <table className="border-separate border-0.5 border-slate-300 rounded-lg mr-4 ml-4">
//             <thead className="h-12 bg-slate-300">
//               <tr>
//                 <th className="border-t-2 border-customBlue w-1/4 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
//                   Information
//                 </th>
//                 <th className="border-t-2 border-customBlue w-1/2 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
//                   Ticket Info
//                 </th>
//                 <th className="border-t-2 border-customBlue w-1/6 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
//                   Ticket price
//                 </th>
//                 <th className="border-t-2 border-customBlue w-1/6 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-bl">
//                   Reduce
//                 </th>
//                 <th className="border-t-2 border-customBlue w-1/4 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
//                   Discount ($)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               <tr>
//                 <td className="border-r-2 border-slate-100">
//                   <div className="flex flex-col">
//                   <span>{Bookers.fullName}</span>
//                   <span>{Bookers.idNumber}</span>
//                   <span>{Bookers.phone}</span>
//                   </div>
//                 </td>
//                 <td className="border-r-2 border-slate-100">
//                   <div className="flex flex-col">
//                     <span>
//                       {[
//                         listTrain[0].name,
//                         "\t",
//                         listTrain[0].from,
//                         "-",
//                         listTrain[0].to,
//                       ]}
//                     </span>
//                     <span>
//                       {[listTrain[0].dateStart, "\t", listTrain[0].timeStart]}
//                     </span>
//                     <span>
//                       {[
//                         listTrain[0].trainCars[0].fullName,
//                         "\tSeat: ",
//                         listTrain[0].trainCars[0].listSeats[33].index,
//                       ]}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="border-r-2 border-slate-100">
//                   <h3 className="text-lg text-center justify-center">
//                     {listTrain[0].trainCars[0].listSeats[33].price + "$"}
//                   </h3>
//                 </td>
//                 <td className="border-r-2 border-slate-100">
//                   <h3 className="text-lg text-center justify-center">
//                     100
//                   </h3>
//                 </td>
//                 <td className="border-r-2 border-slate-100">
//                   <h1 className="text-center justify-center">
//                     No discount available
//                   </h1>
//                 </td>
//               </tr>
//             </tbody>
//             <tfoot>
//             <tr className="border-sepatare bg-gray-100 h-14">
                
//                 <td colSpan="4" className="border-b-2 border-customBlue rounded-bl">
//                   <h3 className="text-l mr-4  font-bold text-black text-right">
//                     Total
//                   </h3>
//                 </td>
//                 <td className="border-b-2 border-customBlue rounded-br">
//                   <h3 className="text-l font-bold text-black text-center">
//                    1000
//                   </h3>
//                 </td>
//               </tr>
//             </tfoot>
//         </table>
//       </div>
//       <div className="ml-5 mt-5">
//         <span className="text-lg font-bold text-red-500">Notice</span>
//       </div>
//       <div className="ml-5 mb-5">
//         <span >Dear customers, please come to the counter to make payment at least 30 minutes prior to complete the transaction and receive your ticket.
//            If you arrive later than this time, we will cancel your ticket and will not be responsible.</span>
//       </div>
//       <div className="flex flex-row justify-center m-4 pl-8 pr-8">
//         <button
//           onClick={handleHome}
//           className="focus:o  utline-none focus:ring focus:ring-sky-300 active:bg-sky-600 hover:bg-sky-300 h-10 w-1/4 bg-customBlue text-white ml-2 rounded-full"
//         >
//           Home
//         </button>
//       </div>
//     </Container>
//   );
// };

// export default PayLater;
