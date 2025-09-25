import { useEffect, useState } from "react";
import { mockData } from "../../data/mockData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../data/firebase";

const FireData = () => {
  const useFirebase = process.env.REACT_APP_USE_FIREBASE === "true"; // .env state set to false 25/09
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      if (useFirebase) {
        const snapshot = await getDocs(collection(db, "vehicles"));
        setVehicles(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } else {
        setVehicles(mockData);
      }
    };
    fetchVehicles();
  });

  console.log("ENV:", process.env.REACT_APP_USE_FIREBASE);

  return (
    <div>
      <h1>Available Cars</h1>
      {vehicles.map((car) => (
        <div key={car.id}>
          <h2>
            {car.make} {car.model}
          </h2>
          <p>£{car.lease.monthlyCost} / month</p>
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            style={{ width: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FireData;
