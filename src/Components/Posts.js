
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
            <div>
                { props.description }
            </div>
        </div>
    );
};

export default posts;