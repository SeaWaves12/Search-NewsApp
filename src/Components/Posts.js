
import React from 'react';


const mystyle = {
    //   color: "Blue",
      backgroundColor: "lightGreen",
      padding: "4px",
      margin: "10px",
      fontFamily: "Arial",
      border : "2px solid LightGrey"
    };

const posts = (props) =>{
    return(
        <div style= { mystyle }>
            <h2>
                { props.title } 
            </h2>
            <h4>
                { props.description }
            </h4>
            <h6>Author:{ props.author }</h6>
        </div>
    );
};

export default posts;