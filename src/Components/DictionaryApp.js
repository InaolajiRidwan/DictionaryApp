import React from "react";
import { useState } from "react";
import DictionaryNavBar from "./DictionaryNavBar";

const DictionaryApp = (props) => {
  const [dictionaryFetch, setDictionaryFetch] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const searchMe = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setDictionaryFetch(data);
    } catch (error) {
      console.error("no definition found", error);
    }
  };

  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  return (
    <div>
      <DictionaryNavBar handleChange={handleChange} searchMe={searchMe} />
      <div className="mt-2">
        {dictionaryFetch.length === 0
          ? ""
          : dictionaryFetch.map((display, index) => {
              return (
                <div key={index}>
                  <div>
                    <h1 className="font-extrabold ">{display.word}</h1>
                    <p>{display.phonetic}</p>
                    <div className=" flex justify-center">
                      {display.phonetics && display.phonetics[0] && (
                        <audio src={display.phonetics[0].audio} controls />
                      )}
                    </div>

                    <br></br>
                    {display.meanings &&
                      display.meanings.map((meaning, meaningIndex) => (
                        <div key={meaningIndex}>
                          <li className="font-bold mb-4">
                            {meaning.partOfSpeech}
                          </li>

                          {meaning.definitions &&
                            meaning.definitions.map(
                              (definition, definitionIndex) => (
                                <div key={definitionIndex}>
                                  <p>{definition.definition}</p>
                                  <p>{definition.synonyms}</p>
                                  <p>{definition.antonyms}</p>
                                </div>
                              )
                            )}
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default DictionaryApp;

// <div className="" key={index}>
//   <li>
//     {display.word}
//     {display.meanings[0].partOfSpeech}
//     <p>
//       {display.meanings
//         ? display.meanings[0].definitions[0].definition
//         : ""}
//     </p>
//     <p>
//       {display.meanings
//         ? display.meanings[0].definitions[1].definition
//         : ""}
//     </p>
//     <p>
//       {display.meanings
//         ? display.meanings[0].definitions[2].definition
//         : ""}
//     </p>
//     <p>
//       {display.meanings
//         ? display.meanings[1].definitions[0].definition
//         : ""}
//     </p>
//   </li>

//   <div className="flex justify-center">
//     {display.phonetics && display.phonetics[0] && (
//       <audio
//         src={display.phonetics[0].audio}
//         controls
//         className=""
//       />
//     )}
//   </div>
// </div>
