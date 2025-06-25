import React from "react";

export default function cardLong({ name, category, value, date, status }) {
  return (
    <div className="flex h-20 debug justify-between items-center bg-white rouned-md shadow-md p-2">
      <p className="font-semibold text-pretty">{category}</p>
      <p>{name}</p>
      <p>{value}</p>
      <p>{date}</p>
      <p>{status}</p>
    </div>
  );
}
