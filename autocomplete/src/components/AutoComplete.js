import React, { useEffect, useState } from "react";
import "./AutoComplete.css";

const AutocComplete = ({ posts }) => {
   
    const [txtValue, setTxtValue] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const onChangeHandler = (value) => {

        let suggestionsTemp = [];
        if (value.length > 0) {
            suggestionsTemp = posts.filter(post => post.toLowerCase().includes(value.toLowerCase()));
        }
        setSuggestions(suggestionsTemp);
        setTxtValue(value);
    }

    const onClickHandler = (value) => {
        setTxtValue(value);
        setSuggestions([]);
    }

    const renderSuggestions = () => {

        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="autocomplete__list">
                {
                    suggestions.map((post, index) => (
                        <li className="autocomplete__item" key={index} onClick={() => onClickHandler(post)}>{post}</li>)
                    )
                }
            </ul>
        );
    }

    return (
        <div className="autocomplete__main">
            <input
                type="text"
                className="autocomplete__txt"
                value={txtValue}
                onChange={e => onChangeHandler(e.target.value)}></input>
            {
                renderSuggestions()
            }


        </div>
    )
}
export default AutocComplete;