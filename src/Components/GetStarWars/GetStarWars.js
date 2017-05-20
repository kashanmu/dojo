import React, { Component } from 'react';
import './StarWars.css';
import StarWars from "./StarWars.js"
class GetStarWars extends Component {
    render(){
        return (
            <div>
                <StarWars id="1"/>
                <StarWars id="2"/>
                <StarWars id="3"/>


            </div>
        )
    }
}
export default GetStarWars;