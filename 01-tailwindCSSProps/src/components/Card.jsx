import React from "react";

const Card = ({ data }) => {
  const {
    name,
    capital,
    area,
    population,
    languages,
    currency,
    flag,
    imgSrc,
  } = data;

  return (
    <div className="w-[500px] h-[200px] bg-white rounded-xl shadow-md flex overflow-hidden">
      {/* Image Section */}
      <div className="w-[200px] h-full flex-shrink-0">
        <img
          src={imgSrc}
          alt={`${name} view`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Information Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">{name}</h2>
           
          </div>
          <p className="text-sm text-gray-600">Capital: {capital}</p>
          <p className="text-sm text-gray-600">Area: {area.toLocaleString()} km²</p>
          <p className="text-sm text-gray-600">
            Population: {population.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Languages: {languages.join(", ")}</p>
          <p className="text-sm text-gray-600">Currency: {currency}</p>
        </div>
        <button className="text-blue-500 text-sm hover:underline self-end">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
