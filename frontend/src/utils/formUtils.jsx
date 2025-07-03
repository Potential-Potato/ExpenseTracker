import React from "react";
import axios from "axios";

export default async function formUtils(e, endpoint) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Form Submission Error: ", error);
    throw error;
  }
}
