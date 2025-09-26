import { useState } from "react";

const VehicleCard = ({ img, makeModel, totalPCM }) => {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <div className="flex-col ">
      <div
        className="aspect-[4/3] bg-gray-100 rounded-2xl shadow-sm p-4 max-w-sm"
        onMouseEnter={() => setImgSrc(imgSrc.replace("_1.webp", "_2.webp"))}
        onMouseLeave={() => setImgSrc(imgSrc.replace("_2.webp", "_1.webp"))}
      >
        <img
          src={imgSrc}
          alt="Citroen C3"
          height="150px"
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{makeModel}</h3>
        <p className="text-sm text-gray-600">
          2 yrs, 12 mos upfront · 5,000 mi.
        </p>
        <p className="text-base mt-2">
          <span className="font-bold">{totalPCM}</span>
          <span className="text-gray-700"> monthly (incl. VAT)</span>
        </p>
      </div>
    </div>
  );
};

export default VehicleCard;
