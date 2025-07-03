import React from "react";

export default function cardLong({
  name,
  category,
  categoryName,
  value,
  date,
  status,
}) {
  return (
    <div className="flex flex-wrap h-20 px-4 justify-between items-center bg-white rounded-lg shadow-md p-2">
      {/* <p className="font-semibold text-pretty">{category}</p> */}
      <div className="flex flex-wrap flex-col w-1/4">
        <p className="font-semibold text-pretty">{name}</p>
        <p>{categoryName}</p>
      </div>
      <p>{value}</p>
      <p>{date}</p>
      <p>{status}</p>
    </div>
  );
}
