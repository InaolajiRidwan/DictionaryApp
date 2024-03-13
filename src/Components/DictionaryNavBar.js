import React from "react";

const DictionaryNavBar = (props) => {
  return (
    <div className="bg-blue-800 h-60">
      <div className="pt-4">
        <span className="text-4xl">
          Dictionary<span className="">App</span>
        </span>
      </div>
      <div>
        <input
          className=" mt-10 text-center h-10 rounded-lg"
          type="text"
          placeholder="searchHere"
          onChange={props.handleChange}
        />
        <button
          onClick={props.searchMe}
          className="border-3 h-10 ms-2 w-24 rounded-lg bg-green-400"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default DictionaryNavBar;
