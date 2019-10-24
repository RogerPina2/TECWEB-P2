import React from "react";

import { BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "./pages/main";
import Teams from "./pages/teams";
import Team from "./pages/team";
import Games from "./pages/games";
import Game from "./pages/game";
import Player from "./pages/player";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:seasonYear/:leagueName/teams" component={Teams} />
            <Route path="/team/:nickName" component={Team} />
            <Route path="/:seasonYear/:leagueName/games" component={Games}/>
            <Route path="/game/:gameId" component={Game} />
            <Route path="/player/:playerId" component={Player} />
        </Switch>
    </BrowserRouter>
);

export default Routes;