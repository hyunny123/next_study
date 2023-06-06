import React from "react";
import "./Loading.module.css";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <h1 className="loading-h1">
        LOADING
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h1>
    </div>
  );
}
