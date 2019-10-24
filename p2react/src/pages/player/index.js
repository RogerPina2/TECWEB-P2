import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Player extends Component{
    state = {
        statistics: [],
    }

    //Método executado assim que o componente for mostrado em tela
    componentDidMount(){
        this.loadStatistics();
    }

    loadStatistics = async () => {
        const { playerId } = this.props.match.params;

        const response = await api.get(`statistics/players/playerId/${playerId}`);
        this.setState({statistics: response.data.api.statistics});
    };

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
            // statistics.map(stati => (
            //     <div className="player-statistics">
            //         {console.log(stati)}}
            //     </div>
            // ))
        )
    }
}