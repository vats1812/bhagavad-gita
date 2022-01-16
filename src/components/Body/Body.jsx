import React, { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Body.css";
function Body() {
  const [chapter, setChapter] = useState(4);
  const [slokno, setSlokno] = useState(7);
  const [chpno, setChpno] = useState(0);
  const [content, setContent] = useState({
    text: "",
    transliteration: "",
    translations: [{ description: "" }],
  });

  const array = [];
  let slokarray = [];

  function renderOptions(name, n) {
    for (let j = 1; j < n + 1; j++) {
      name[j] = (
        <option key={j} value={j}>
          {j}
        </option>
      );
    }
  }

  renderOptions(array, 18);

  if (chapter === "1") {
    renderOptions(slokarray, 47);
  } else if (chapter === "2") {
    renderOptions(slokarray, 72);
  } else if (chapter === "3") {
    renderOptions(slokarray, 43);
  } else if (chapter === "4") {
    renderOptions(slokarray, 42);
  } else if (chapter === "5") {
    renderOptions(slokarray, 29);
  } else if (chapter === "6") {
    renderOptions(slokarray, 47);
  } else if (chapter === "7") {
    renderOptions(slokarray, 30);
  } else if (chapter === "8") {
    renderOptions(slokarray, 28);
  } else if (chapter === "9") {
    renderOptions(slokarray, 34);
  } else if (chapter === "10") {
    renderOptions(slokarray, 42);
  } else if (chapter === "11") {
    renderOptions(slokarray, 55);
  } else if (chapter === "12") {
    renderOptions(slokarray, 20);
  } else if (chapter === "13") {
    renderOptions(slokarray, 35);
  } else if (chapter === "14") {
    renderOptions(slokarray, 27);
  } else if (chapter === "15") {
    renderOptions(slokarray, 20);
  } else if (chapter === "16") {
    renderOptions(slokarray, 24);
  } else if (chapter === "17") {
    renderOptions(slokarray, 28);
  } else if (chapter === "18") {
    renderOptions(slokarray, 78);
  }

  let host = process.env.REACT_APP_HOST;
  let api = process.env.REACT_APP_API_KEY;

  async function getContent() {
    var options = {
      method: "GET",
      url: `https://${host}/v2/chapters/${chapter}/verses/${slokno}/`,
      headers: {
        "x-rapidapi-host": host,
        "x-rapidapi-key": api,
      },
    };

    await axios
      .request(options)
      .then(function (res) {
        setContent(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  window.addEventListener("load", getContent);

  const handleChapter = (e) => {
    setChapter(e.target.value);
    setChpno(e.target.value);
  };

  function handleSlok() {
    getContent();
    document.getElementById("flip").checked = false;
  }

  async function handleSlokInp(e) {
    setSlokno(e.target.value);
  }

  return (
    <div>
      <div className="body_cont center">
        <div className="select center">
          <select name="chapter" id="chapter" onChange={handleChapter}>
            <option value="0">Select Adhyay</option>
            {array}
          </select>
          <select
            name="slok"
            id="slok"
            onInput={handleSlokInp}
            onChange={handleSlok}
          >
            {chpno === 0 ? (
              <option value="0">Select Adhyay first</option>
            ) : (
              <option value="0">Select Sloka</option>
            )}
            {slokarray}
          </select>
        </div>

        <Card
          slok={content?.text}
          transliteration={content?.transliteration}
          hindi_trans={content.translations[5]?.description}
          english_trans={content.translations[2]?.description}
        />
      </div>
    </div>
  );
}

export default Body;
