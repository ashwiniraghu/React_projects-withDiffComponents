import React from "react";


const Image =()=>{

return(
    <div className="search">
    <form  role="search">
      <div className="search__query-and-submit">
        <input
          id="query"
          aria-label="Search for images and audio from NASA"
          className="search__query"
          name="query"

          placeholder="Moon"
          type="search"
        />
        <input className=" " type="submit" value="Search" />
      </div>
      <div className="search__options">
        <label className="search__option" htmlFor="images">
          Images
          <input
            id="images"
            name="images"
            type="checkbox"
          />
        </label>
        <label className="search__option" htmlFor="audio">
          Audio
          <input
            id="audio"
            name="audio"
            type="checkbox"
          />
        </label>
      </div>
    </form>
  </div>
)
}

export default Image;