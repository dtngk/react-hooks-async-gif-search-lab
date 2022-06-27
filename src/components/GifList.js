import React from "react";

/**
 * 
 * gifs is GifListContainer gifs useState variable
 */
function GifList({ gifs }) {

    console.log(gifs);

    return (
        <ul>
            {gifs.map((gif) => (
                <li key={gif.url}>
                    <img src={gif.images.original.url} alt="gif" />
                </li>
            ))}
        </ul>
    );
}

export default GifList;