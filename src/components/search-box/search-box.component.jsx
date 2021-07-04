import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeHolder, changeHandler}) => {
    return (
        <input className="search" type="search" placeholder={placeHolder} onChange={changeHandler} />
    )
}