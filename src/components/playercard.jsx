import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Flipper, Flipped } from 'react-flip-toolkit';

const RenderCard = (data, show) => {
  if (show === 'false') {
    return (
      <Card className="card text-white bg-dark mb-3" style={{ width: '10rem' }}>
        <Card.Img variant="top" src="https://cdn.sofifa.net/players/230/481/22_120.png" />
        <Card.Body>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card className="card text-white bg-dark mb-3" style={{ width: '10rem' }}>
        <Card.Img variant="top" src={data[1]} />
        <Card.Body>
          <Card.Title>{data[0]}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
};

function PlayerCard({ data, show }) {
  return (
    <Flipper flipKey={show}>
      <Flipped flipId="player-card">
        {RenderCard(data, show)}
      </Flipped>
    </Flipper>
  );
}

export default PlayerCard;