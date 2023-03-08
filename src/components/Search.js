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
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input
        type="type"
        value={toggle}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          SearchRestaurant(searchText, Restaurants);
        }}
      >
        search{toggle}
      </button>
    </div>
  );
};

export default Search;
