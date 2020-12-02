import React from 'react'
// import {Link} from 'react-router-dom'
import instagram from './Images/InstagramLogo.png'
import {FiHeart} from "react-icons/fi";
import {FiNavigation} from "react-icons/fi";
import {MdHome} from "react-icons/md";
import {AiOutlineCompass} from "react-icons/ai";


const Nav = () => {
    return (
        <div>
            <nav>
            <img src={instagram} alt = "logo"></img>
            <input placeholder="search"></input>
            <ul>
                <li><MdHome/></li>
                <li><FiNavigation/></li>
                <li><AiOutlineCompass/></li>
                <li><FiHeart/></li>

            </ul>
            </nav>
        </div>
    )
}

export default Nav
