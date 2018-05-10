import React from 'react';


const SearchInput = (props) => (
    <form className="search-input-container">
        <input type="text" />
        <button type="submit">
            <img src="/images/search.png" />
        </button>
    </form>
);

export default SearchInput;