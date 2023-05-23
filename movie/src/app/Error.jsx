"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Error page</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        다시 시도 click!
      </button>
    </div>
  );
}
