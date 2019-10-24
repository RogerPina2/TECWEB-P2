import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Teams extends Component {
    state = {
        teams: [],
    };

    componentDidMount() {
        this.loadTeams();
    };

    loadTeams = async () => {
        const { leagueName } = this.props.match.params;

        const response = await api.get(`teams/league/${leagueName}`);
        this.setState({teams: response.data.api.teams});
    };

    render() {

        const { teams } = this.state;

        return (
            <div className="teamsLeague-page">
                <div className="teams">
                    <h2>Teams</h2>
                    <div className="teams-items">
                        {teams.map(team => (
                            <Link to={`/team/${team.nickname}`} key={team.fullName}>
                                <strong>{team.fullName}</strong>
                                <img alt={`logo do time ${team.fullName}`} src={team.logo}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};