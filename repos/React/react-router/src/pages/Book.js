import React from "react";
import { useParams } from "react-router-dom";

export default function BookPage() {
  // get value from route (destructuring assignment again)
  let { id } = useParams();
  console.log(id);

  return <h1>Book ID: {id}</h1>;
}
