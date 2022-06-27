import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const link = 'https://api.giphy.com/v1/gifs/search?q=';
const key = 'api_key=Jd0DTXpaCMbQNOd5zjoSG8RxS3SjsiVe';
const rating = 'rating=g';
const limit = 'limit=3';

function GifListContainer(){

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(
          `${link}${search}&${key}&${rating}&${limit}`
        )
        .then((result) => result.json())
        .then(({ data }) => {
            console.log(data);
            const gifs = data.map((gif) => (gif));
            setGifs(gifs);
        });
    }, [search]);
    
    return (
        <div>
          <GifSearch onSubmitSearch={setSearch} />
          <GifList gifs={gifs} />
        </div>
    );


}

export default GifListContainer;



