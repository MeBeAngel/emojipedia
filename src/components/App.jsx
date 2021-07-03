import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";
import createEntry from "./Entry";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
       
      </dl>
    </div>
  );
}

export default App;
