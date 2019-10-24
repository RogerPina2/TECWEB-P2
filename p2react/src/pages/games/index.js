import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./styles.css";

export default class Games extends Component {
    state = {
        games: [],
    };

    componentDidMount() {
        this.loadGames();
    };

    loadGames = async () => {
        const { leagueName, seasonYear } = this.props.match.params;

        const response = await api.get(`games/league/${leagueName}/${seasonYear}`);
        this.setState({games: response.data.api.games});
    };

    render() {

        const { games } = this.state;

        return (
            <div className="games-page">
                <div className="games">
                    <h2>Jogos</h2>
                    <div className="games-items">
                        {games.map(game => (
                            <Link to={`/game/${game.gameId}`} key={game.gameId}>
                                <div className="results-infosWhen">
                                    <p>{game.statusGame}</p>
                                    <p>{game.seasonYear} {game.league}</p>
                                    <p><Moment date={game.startTimeUTC}/></p>
                                </div>
                                <div className="results-score">
                                    <p>{game.hTeam.shortName}</p>
                                    <img alt={`logo do time da casa ${game.hTeam.fullName}`} src={game.hTeam.logo} width="50px" height="50px"/>
                                    <p>{game.hTeam.score.points}</p>
                                    <p>X</p>
                                    <p>{game.vTeam.score.points}</p>
                                    <img alt={`logo do time visitante ${game.vTeam.fullName}`} src={game.vTeam.logo} width="50px" height="50px"/>
                                    <p>{game.vTeam.shortName}</p>
                                </div>
                                <div className="results-infosWhere">
                                    <p>{game.arena} - {game.city}</p>
                                    <p>{game.country}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};