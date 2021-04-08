import React, { useState } from "react";
import ImageList from "./ImageList";
// import Image from "./Image";
import axios from "axios";


// const nasaItem = {
//     id: "id",
//     description: "description",
//     title: "title",
//     thumb: "thumb"
// }
const App = () => {
    const [txtvalue, setTxtValue] = useState('');
    const [nasaitems, setNasaItems] = useState([]);

    const nasaItem = item => {
        const newItem = {
            id: item.data[0].nasa_id,
            description: item.data[0].description,
            title: item.data[0].title,
            thumb: item.links[0].href
        }
        return newItem;
    };

    const searchForImage = async () => {
        console.log("hi")
        console.log(txtvalue)
        const response = await axios.get("https://images-api.nasa.gov/search", {
            params: {
                q: txtvalue,
                page: 1,
                "media_type": "image",
                "year_start": 1920,
                "year_end": 2021
            },
        });

        const nasaItemsTemp = response.data.collection.items.map(nasaItem);
        console.log(nasaItemsTemp);
        setNasaItems(nasaItemsTemp);
    }

    return (
        <main>
            <section className="container">
                <div className="search-conatiner">
                    <input className="searchText" type="text" value={txtvalue} onChange={(event) => setTxtValue(event.target.value)}></input>
                    <button className="searchButton" onClick={searchForImage}>Search</button>
                </div>
                {/* <div >{nasaitems}</div> */}
                {/* <Image></Image> */}
                <div >
                <ImageList items={nasaitems} ></ImageList>
                </div>
            </section>
        </main>
    )
}

export default App;