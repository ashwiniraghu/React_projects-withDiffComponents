import React from "react";
import AutocComplete from "./AutoComplete";
import AutoCompleteWithFetch from "./AutoCompleteWithFetch";
import countries from "./countries";
import "./App.css";

const items = [
    "ashwini",
    "Adheesh",
    "Aarsuh",
    "Jayashree",
    "raghu",
    "Vaish"
]

const App = () => {

    return (
        <section>
            <h1>AutoComplete Demo</h1>
        <div className="App__Component">
            {/* AutoComplete with array data from countries.js  */}
            <AutocComplete posts={countries} />
            <br/>
            {/* AutoComplete with Local data items */}
            <AutocComplete posts={items}/>
            <br/>
            {/* Autocomplete using fetch from fake JSON */}
            <AutoCompleteWithFetch/>
        </div>
        </section>

    )

}

export default App;