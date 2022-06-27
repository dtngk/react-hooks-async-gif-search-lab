import React, {useState} from "react";

/**
 * onSubmitSearch is GifListContainer search setter method
 */
function GifSearch({onSubmitSearch}){

    const [search, setSearch] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        onSubmitSearch(search);
    }

    function handleChange(event){
        setSearch(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter a Search Term</label>
                    <input value={search} onChange={handleChange}/>
                    <button type="submit">Find Gifs</button>
                </div>
            </form>
        </div>
    )
}

export default GifSearch;