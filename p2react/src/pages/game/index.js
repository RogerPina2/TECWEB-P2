import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Game extends Component {
    state = {
        games: [],
    };

    componentDidMount() {
        this.loadGameDetails();
    };

    loadGameDetails = async () => {
        const { gameId } = this.props.match.params; 

        const response = await api.get(`gameDetails/${gameId}`);
        this.setState({games:response.data.api.game});
    };

    render() {
        const {games} = this.state;
        
        return (
            games.map(game => (
                <div className="game-page" key={game}>
                    <div className="game-preview">
                        <div className="logo">
                            <h2>{game.hTeam.shortName}</h2>
                            <img alt={`logo do time da casa ${game.hTeam.shortName}`} src={game.hTeam.logo}/>
                        </div>
                        <div className="info">
                            <div className="local">
                                <p>{game.arena}</p>
                                <p>{game.city} - {game.country}</p>
                            </div>
                            <div className="score">
                                <p>{game.hTeam.score.points}</p>
                                <p>X</p>
                                <p>{game.vTeam.score.points}</p>
                            </div>
                            <div className="officials">
                                <h3>Officials:</h3>
                                {Object.entries(game.officials).map(([k,v]) => (
                                    <p key={k}>{v.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="logo">
                            <h2>{game.vTeam.shortName}</h2>
                            <img alt={`logo do time visitante ${game.vTeam.shortName}`} src={game.vTeam.logo}/> 
                        </div>
                    </div>
                    <div className="game-infos">
                        <h2>Times</h2>
                        <div className="teams">
                            <div className="hTeam">
                                <h3>{game.hTeam.fullName}</h3>
                                {Object.entries(game.hTeam.leaders).map(([k,v]) => (
                                    <article key={k}>
                                        <p>{v.name}</p>
                                        <p>{Object.entries(v)[0][0]}{Object.entries(v)[0][1]}</p>
                                    </article>
                                ))}
                            </div>
                            <div className="vTeam">
                                <h3>{game.vTeam.fullName}</h3>
                                {Object.entries(game.vTeam.leaders).map(([k,v]) => (
                                    <article key={k}>
                                        <p>{v.name}</p>
                                        <p>{Object.entries(v)[0][0]}{Object.entries(v)[0][1]}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    }
};