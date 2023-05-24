import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <Card key={result.id} result={result} />
        </div>
      ))}
    </div>
  );
}
