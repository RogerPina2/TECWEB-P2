import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    state = {
        selectedSeason: "",
        selectedLeague: "",
        seasons: [],
        leagues: [],
    };

    componentDidMount() {
        this.loadSeasons();
        this.loadLeagues();
    };

    loadSeasons = async () => {
        const response = await api.get("seasons/");
        this.setState({seasons: response.data.api.seasons});
    };

    loadLeagues = async () => {
        const response = await api.get("leagues/");
        this.setState({leagues: response.data.api.leagues})
    };

    

    render() {

        const { seasons, leagues, selectedSeason, selectedLeague } = this.state;
    
        return (
            <div className="main-page">
                <div className="seasons">
                    <h2>Seasons</h2>
                    <div className="seasons-items">
                        {seasons.map(season => (
                            <Link to={`?=${season}`} key={season} disabled={season === selectedSeason}
                                onClick={() => {this.setState({selectedSeason: season})}}>
                                {season}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="leagues" disabled={selectedSeason === ""}>
                    <h2>Leagues</h2>
                    <div className="leagues-items">
                        {leagues.map(league => (
                            <Link to={`?=${selectedSeason}-${league}`} key={league}
                                onClick={() => {this.setState({selectedLeague: league})}}>
                                {league}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="teamsOrGames" disabled={selectedLeague === ""}>
                    <h2>Teams or Games</h2>
                    <div className="teamsOrGames-items">
                        <Link to={`/${selectedSeason}/${selectedLeague}/teams`}>Teams</Link>
                        <Link to={`/${selectedSeason}/${selectedLeague}/games`}>Games</Link>
                    </div>
                </div>
            </div>
        );
    }
};