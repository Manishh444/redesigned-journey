import React, { useState } from "react";
import ReactDom from "react-dom/client";
// let searchVal;
// function setSearch(x) {
//   searchVal = x;
//   const root = ReactDom.createRoot(document.getElementById("search"));
//   root.render(<Search />);
//   return searchVal;
// }
const Search = () => {
  const [toggle, setToggle] = useState(null);

  return (
    <div>
      <input
        type="type"
        value={toggle}
        onChange={(e) => {
          setToggle(toggle);
        }}
      ></input>
      <button
        onClick={() => {
          if (!toggle) {
            setToggle("false");
          } else {
            setToggle("true");
          }
        }}
      >
        search{toggle}
      </button>
    </div>
  );
};

export default Search;
