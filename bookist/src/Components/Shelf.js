import React, { Component } from 'react'

const Shelf = (props) => {

    return(
      
        <div>
              <h1> Your Shelf </h1>
            <button onClick={() => props.clear()}> Clear </button>

        {props.shelf.map(mappedTitle =>
         (<div>

            <p>{mappedTitle.title}</p>
            
        </div>))}

        

        </div> 
        ) 
       
    }


 export default Shelf