import React from "react";
import { useLocalStorage } from "utils/useLocalStorage";
import { useToggle } from "utils/useToggle";
import PlayerCard from "components/PlayerCard";

export default function PlayerList({ data }) {
  const [country, setCountry] = useLocalStorage("country", "all");
  const [filtered, toggle] = useToggle(false);

  return (
    <div>
      <form data-testid="form">
        <label>
          Filter by Country
          <select value={country} onChange={e => setCountry(e.target.value)}>
            <option value="united states">United States</option>
            <option value="australia">Australia</option>
            <option value="england">England</option>
            <option value="brazil">Brazil</option>
          </select>
        </label>
        <label>
          <input type="checkbox" value={filtered} onClick={toggle} /> Enable
          Filter
        </label>
      </form>
      {data &&
        data.map(player => {
          if (filtered) {
            if (player.country.toLowerCase() === country) {
              return <PlayerCard key={player.name} player={player} />;
            }
          } else {
            return <PlayerCard key={player.name} player={player} />;
          }
        })}
    </div>
  );
}
