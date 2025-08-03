import { useState } from "react";
import "./App.css";
import Head from "./Head";
import Gallery from "./Gallery";

export default function Works() {
  const [category, setCategory] = useState("bowls");

  const categories = [
    { label: "קערות", value: "bowls" },
    { label: "אגרטלים", value: "vases" },
    { label: "כוסות", value: "cups" },
    { label: "צלחות", value: "plates" },
    { label: "כדים", value: "jugs" },
  ];

  return (
    <div>
      <Head />
      <div className="head">
        <h1>{categories.find((c) => c.value === category)?.label}</h1>
        <div className="category-toggle">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`toggle-btn ${category === c.value ? "active" : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="photos-container">
        <Gallery category={category} />
      </div>
    </div>
  );
}