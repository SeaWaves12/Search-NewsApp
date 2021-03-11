import React from 'react';
import Posts from './Posts';

import SearchBar from "material-ui-search-bar";




export default function PrimarySearchAppBar() {
  const [dataState, setdataState] = React.useState([]);
  const [valueState, setValueState] = React.useState('')

  const fetchData = () => {
    fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d')
      .then(response => { 
        return response.json()
      }).then(data => {
        return (
          setdataState(data.articles)
          // console.log("Data: ", data)
              );
      })
  }

    const mystyle = {
      color: "Blue",
      backgroundColor: "LightBlue",
      padding: "10px",
      fontFamily: "Arial",
      
    };


  const articles = dataState.map(article =>{
    return <Posts key={article.title} title={article.title}></Posts>
  }

  )



  return (
    <div style={mystyle} >
      <SearchBar
        onCancelSearch={() => setValueState('')}
        value={valueState}
        onChange={(e) => setValueState(e)}
        onRequestSearch={fetchData} 
      />
      {articles}
    </div>
  );
}
