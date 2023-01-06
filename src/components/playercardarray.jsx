import React from 'react';
import PlayerCard from './playercard';

const PlayerCardList = ({ players, show }) => {
  return (
    <div>
      {players.map((player) => (
        <PlayerCard data={player} show={show} key={player.id} />
      ))}
    </div>
  );
};

export default PlayerCardList;