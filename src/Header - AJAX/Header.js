import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
class Header extends React.Component{
     render(){
        return (
            <div className="nav-bar">
                <ul id='myNav'>
                    <li>
                        <Link to="/">Get (Poke)</Link>
                    </li>
                    <li>
                        <Link to="/film">Get (Star Wars)</Link>
                    </li>   
                    <li>
                        <Link to="/post">Post (User Reg)</Link>
                    </li>
                    <li>
                        <Link to="/users">Get (User List)</Link>
                    </li>                    
                    <li>
                        <Link to="/login">Post (Login)</Link>
                    </li>                                   
                </ul>
            </div>
        )
    }
}
export default Header