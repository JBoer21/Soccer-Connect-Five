import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';


const RenderCard = (data, show) => {
    if (show === "false") {


        return(
            <Card class = "card text-white bg-dark mb-3" style={{ width: '10rem' }}>
              <Card.Img variant="top" src="https://cdn.sofifa.net/players/230/481/22_120.png" />
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
            </Card>
        )


    }
    else {

        return(
            <Card class = "card text-white bg-dark mb-3" style={{ width: '10rem' }}>
              <Card.Img variant="top" src={data[1]} />
              <Card.Body>
                <Card.Title>{data[0]}</Card.Title>
              </Card.Body>
            </Card>
        )

    }


}
function PlayerCard({data, show}) {

    if (show === "false") {


        return(
            <Card class = "card text-white bg-dark mb-3" style={{ width: '10rem' }}>
              <Card.Img variant="top" src="https://cdn.sofifa.net/players/230/481/22_120.png" />
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
            </Card>
        )


    }
    else {

        return(
            <Card class = "card text-white bg-dark mb-3" style={{ width: '10rem' }}>
              <Card.Img variant="top" src={data[1]} />
              <Card.Body>
                <Card.Title>{data[0]}</Card.Title>
              </Card.Body>
            </Card>
        )

    }

}

export default PlayerCard