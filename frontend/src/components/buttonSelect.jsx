import React from "react";

export default function buttonSelect() {
  return (
    <select name="Headline" id="Headline" className="selectButton">
      <option value="">Category</option>
      <option value="JM">John Mayer</option>
      <option value="SRV">Stevie Ray Vaughn</option>
      <option value="JH">Jimi Hendrix</option>
    </select>
  );
}
