import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

    }

    handleChange(value){
        this.props.filter(value);
    }


    render()  {
        
        return(
            <div className= 'search-bar'>
               
                <span className= 'searching'> Search Books : </span>
                <input onChange={e => this.handleChange(e.target.value)} type="text"/>
                <button onClick={() => this.props.reset()}> Clear </button>

            </div>)
    }

}
