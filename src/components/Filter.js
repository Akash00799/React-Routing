import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get("age"));
  console.warn(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <div>
      <h1>Filter page</h1>
      <h3>Age is {age}</h3>
      <h3>City is {city}</h3>

      <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} placeholder="set Text in query params" />
      <button onClick={()=>setSearchParams({age:40})}>set Age in query params</button>
    </div>
  );
}

export default Filter;
