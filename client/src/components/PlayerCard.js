import React from "react";

export default function PlayerList({ player }) {
  return (
    <div>
      <h1>Name: {player.name}</h1>
      <h2>{player.country}</h2>
      <h2>{player.searches}</h2>
    </div>
  );
}
