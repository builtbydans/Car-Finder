import React from "react";
import { mockData } from "../data/mockData";
import FireData from "./Firebase/FireData";
import VehicleCard from "./Results/VehicleCard/VehicleCard";

const Results = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((data, index) => {
        console.log(data, "hi");
        return (
          <VehicleCard
            key={index}
            img={data.imageUrl}
            makeModel={`${data.make} ${data.model}`}
            totalPCM={`£${data.totalPCM}`}
          />
        );
      })}
      {/* <FireData /> */}
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
