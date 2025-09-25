import React from "react";
import { mockData } from "../mockData";
import FireData from "./Firebase/FireData";
import VehicleCard from "./Results/VehicleCard/VehicleCard";

const Results = () => {
  return (
    <div>
      <VehicleCard />
      <FireData />
    </div>
  );
};

export default Results;

// {mockData.map(
//   ({ car, averageInsurance, financePrice, fuelCosts, index }) => {
//     const totalPCM =
//       parseInt(averageInsurance) +
//       parseInt(financePrice.pcp) +
//       parseInt(fuelCosts);
//     return (
//       <div>
//         <img
//           src="/images/citroen_c3_1.webp"
//           alt="Citroen C3"
//           height={200}
//         />
//         <img
//           src="/images/citroen_c3_2.webp"
//           alt="Citroen C3"
//           height={200}
//         />
//         <p>car: {car}</p>
//         <p>insurance: {averageInsurance}</p>
//         <p>finance (pcp): {financePrice.pcp}</p>
//         <p>finance (hp): {financePrice.hp}</p>
//         <p>fuel: {fuelCosts}</p>
//         <h3>Total: £{totalPCM} per month</h3>
//         <hr />
//       </div>
//     );
//   }
