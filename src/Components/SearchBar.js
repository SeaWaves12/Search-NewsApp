import React, { useEffect } from 'react';
import Posts from './Posts';

import SearchBar from "material-ui-search-bar";

const baseURI = 'http://newsapi.org/v2';

export default function PrimarySearchAppBar() {
  const [dataState, setdataState] = React.useState([]);
  const [valueState, setValueState] = React.useState('')
  const [filterData, setFilterData] = React.useState([])

  const searchDataHandler = () => {
    const reqUri = `${baseURI}/everything?q=${valueState}&from=2021-03-01&sortBy=publishedAt&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`
    fetch(reqUri)
      .then(response => { 
        return response.json()
      }).then(data => {
        console.log("Data: ", data);
        setFilterData(data.articles);
        return setdataState(data.articles)
      })
  }

  useEffect(() => {
    const reqUri = `${baseURI}/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`
    fetch(reqUri)
      .then(response => { 
        return response.json()
      }).then(data => {
        console.log("Data: ", data);
        setFilterData(data.articles);
        return setdataState(data.articles)
      })
  }, [])

  const mystyle = {
    color: "Blue",
    backgroundColor: "LightBlue",
    padding: "10px",
    fontFamily: "Arial",
   
  };

    const searchstyle = {
     width: "80%"
  };

  const filteredArticles = (value) => {
    console.log("Filtering: ", value);
    const filteredData = dataState.filter(item => {
      const { title, content, description } = item;
      return (title && title.includes(value))
        || (content && content.includes(value))
        || (description && description.includes(value))
    })
    setFilterData(filteredData);
  }

  const cancelSearchHandler = () => {
    setValueState('');
    setdataState([]);
    setFilterData([]);
  }

  return (
    <div style={mystyle} >
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }}>
        <SearchBar style={searchstyle}
        onCancelSearch={cancelSearchHandler}
        value={valueState}
        onChange={(e) => setValueState(e)}
        onRequestSearch={searchDataHandler}
      />
      <div>
        <select style={{backgroundColor:"#e60073"}} defaultValue="" onChange={(e) => filteredArticles(e.target.value)}>
          <option style={{backgroundColor:"LightGrey"}} value="" disabled hidden>Select your option</option>
          <option style={{backgroundColor:"LightGrey"}} value="food">Food</option>
          <option style={{backgroundColor:"LightGrey"}} value="news">News</option>
          <option style={{backgroundColor:"LightGrey"}} value="tech">Technology</option>
        </select>
      </div>
      </div>
      
      {filterData && filterData.length ? filterData.map(article =>
        <Posts 
          key={`${article.author}${article.url}${article.urlToImage}`} 
          title={article.title}
          description={article.description}
          author={article.author}>
        </Posts>
      ): valueState === "" 
        ? <h1>Please search something</h1>
        : <h1>No data found!</h1>
      }
    </div>
  );
}
