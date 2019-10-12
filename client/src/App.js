import React, { Component } from "react";
import axios from "axios";
import PlayerList from "components/PlayerList";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({players: response.data})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Player Search Ranking</h1>
        <PlayerList data={this.state.players}/>
      </div>
    );
  }
}

export default App;
