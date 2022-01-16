import React from "react";
import "./Card.css";
function Card(props) {
  const { slok, transliteration, hindi_trans, english_trans } = props;

  return (
    <div>
      <div className="card_cont">
        <input type="checkbox" name="flip" id="flip" />
        <label htmlFor="flip">
          <div className="cards slok ">
            <div className="sanskrit">
              <h2>Sloka:</h2>
              {slok === undefined || slok === null
                ? ""
                : slok.replace(/\s+/g, " ").trim()}
            </div>
            <div className="transliteration">
              <h2>Transliteration:</h2>
              {transliteration === undefined || transliteration === null
                ? ""
                : transliteration.replace(/\s+/g, " ").trim()}
            </div>
            <div className="flip seetrans">
              <p>See Translation</p>
            </div>
          </div>
        </label>
        <label htmlFor="flip">
          <div className="cards translation">
            <div className="hindi">
              <h2>Hindi:</h2>
              {hindi_trans === undefined || hindi_trans === null
                ? ""
                : hindi_trans.replace(/\s+/g, " ").trim()}
            </div>
            <div className="english">
              <h2>English:</h2>
              {english_trans === undefined || english_trans === null
                ? ""
                : english_trans.replace(/\s+/g, " ").trim()}
            </div>
            <div className="flip seeslok">
              <p>See Sloka</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Card;
