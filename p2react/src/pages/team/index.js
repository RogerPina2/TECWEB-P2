import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Team extends Component {
    state = {
        team: [],
        players: [],
        leagues: []
    };

    componentDidMount() {
        this.loadTeamInfo();
    };

    loadTeamInfo = async () => {
        const { nickName } = this.props.match.params; 

        const response = await api.get(`teams/nickName/${nickName}`);
        const {teams} = response.data.api;
        const response2 = await api.get(`players/teamId/${teams[0].teamId}`);
        const {players} = response2.data.api;
        this.setState({
            team: teams[0], 
            players,
            leagues: teams[0].leagues
        });
    };

    render() {
        const {team, players, leagues} = this.state;
        
        return (
            <div className="team-page">
                <div className="team-infos">
                    <div className="info">
                        <h3>{team.fullName}</h3>
                        <ul>
                            <p>Nome: {team.fullName}</p>
                            <p>Apelido: {team.nickname}</p>
                            <p>Cidade: {team.city}</p>
                            <p>Abreviação: {team.shortName}</p>
                            <div className="leagues">
                                <p>Ligas Disputadas: </p>
                                <ul>
                                    {Object.keys(leagues).map(league => (
                                        <p key={league}>{league}</p>
                                    ))}
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div className="logo">
                        <img alt={`logo do time ${team.fullName}`} src={team.logo}/>
                    </div>                 
                </div>
                <div className="team-players">
                    <h2>Jogadores</h2>
                    <ul>
                    {players.map(player => (
                        <article key={player.playerId}>
                            <p>Nome: {player.firstName} {player.lastName}</p>
                            <p>Anos como Profissional: {player.yearsPro}</p>
                            <p>Frequentou a universidade: {player.collegeName}</p>
                            <p>Aniversário: {player.dateOfBirth}</p>
                            <p>Entrou pra NBA em: {player.startNba}</p>
                            <p>Altura: {player.heightInMeters}</p>
                            <p>Peso: {player.weightInKilograms}</p>
                            <Link to={`/player/${player.playerId}`}>Estatísticas</Link>
                        </article>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
};