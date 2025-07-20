import { useState } from "react";
import "./App.css";
import Head from "./Head";
import Gallery from "./Gallery";

// export default function Works() {
//     return (
//         <div>
//             <Head />
//             <div className="head">
//                 <h1>קערות</h1>
//             </div>
//             <div className="home-photo">
//             <Gallery category="bowls" />
//             </div>
//             {/* <Footer /> */}
//         </div>
//     );
// }
export default function Works() {
  const [category, setCategory] = useState("bowls");

  const categories = [
    { label: "קערות", value: "bowls" },
    { label: "אגרטלים", value: "vases" },
    { label: "כוסות", value: "cups" },
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
      <div className="home-photo">
        <Gallery category={category} />
      </div>
    </div>
  );
}