import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {onSearchTermChange} from "../redux"
export default function SearchBar (props){
    const term = useSelector((state) => state.term)
    const dispatch = useDispatch()
     
   const onInputChange=(term)=>{
      dispatch(onSearchTermChange(term))
      props.onSearchTermChange(term);
   }
    return (
      <div className="search-bar">
        <input
          value={term}
          onChange={(event) =>onInputChange(event.target.value)} 
        />
      </div>
    );
  }

