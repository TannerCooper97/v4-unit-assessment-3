import React, { Component } from 'react'

const BookList = (props) => {
  
     
        return(
            
            <div className= 'book-shelf'>
                {props.books.map(mappedbook => (<div>
                <img id= 'bookz' onClick={() => props.addToShelf(mappedbook)} src={mappedbook.img}/>
                <p>Id: {mappedbook.id}</p>
                <p>Title: {mappedbook.title}</p>
                <p>Author: {mappedbook.author}</p>
                </div>))}
                
            </div>
            )

}
 export default BookList