import React from 'react';
import Posts from './Posts';

import SearchBar from "material-ui-search-bar";


const baseURI = 'http://newsapi.org/v2';

export default function PrimarySearchAppBar() {
  const [dataState, setdataState] = React.useState([]);
  const [valueState, setValueState] = React.useState('')

  const searchDataHandler = () => {
    const reqUri = `${baseURI}/everything?q=${valueState}&from=2021-03-01&sortBy=publishedAt&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`
    fetch(reqUri)
      .then(response => { 
        return response.json()
      }).then(data => {
        console.log("Data: ", data);
        return setdataState(data.articles)
      })
  }

  const mystyle = {
    color: "Blue",
    backgroundColor: "LightBlue",
    padding: "10px",
    fontFamily: "Arial",
    
  };


  const articles = dataState.map(article =>{
    return (
      <Posts 
        key={`${article.author}${article.url}${article.urlToImage}`} 
        title={article.title}>
      </Posts>
    )
  })

  const cancelSearchHandler = () => {
    // setValueState('');
    setdataState([]);
  }


  return (
    <div style={mystyle} >
      <SearchBar
        onCancelSearch={cancelSearchHandler}
        value={valueState}
        onChange={(e) => setValueState(e)}
        onRequestSearch={searchDataHandler} 
      />
      {articles}
    </div>
  );
}
