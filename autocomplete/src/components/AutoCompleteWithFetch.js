import React, { useEffect, useState } from "react";
import "./AutoComplete.css";

const AutocComplete = () => {
 
     const [posts, setPosts] = useState([]);
    const [txtValue, setTxtValue] = useState('');
    const [suggestions, setSuggestions] = useState('');

    useEffect(() => {
        const fetchData = () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    setPosts(data);
                })
                .catch(err => {
                    console.log("An error has been caught")
                })
        }
        fetchData();
    }, [])

    const onChangeHandler = (value) => {

        let suggestionsTemp = [];
        if (value.length > 0) {
            suggestionsTemp = posts.filter(post => post.name.toLowerCase().includes(value.toLowerCase()));
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
                        <li className="autocomplete__item" key={index} onClick={() => onClickHandler(post.name)}>{post.name}</li>)
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