import React from "react";
import "./styles.css";

const Header = () => (
    <header id="main-header">
        <div className="headerBar">
            <img alt="logo NBA" src="https://stats.nba.com/media/img/league/nba-logoman-word-white.svg"/> 
            <p>NBA Stats - API Project </p>
        </div>
        <div className="headerMenu">
            <a href="/"><button>Home</button></a>
            <a href="/teams"><button>Teams</button></a>
        </div>
    </header>
);

export default Header;