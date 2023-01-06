import './App.css';
import React from 'react';
import { useEffect, useState} from 'react';
import Select from 'react-select';
import { Row, Col, Alert, Container} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import ReactDOM, {render, createRoot} from "react-dom";
import PlayerCard from "./components/playercard";
import Scoreboard from "./components/scoreboard"
import clubs from './clubs.js';
import { Transition } from 'react-transition-group';
import { a } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


function App() {
  // Refresh the page every minute
  // setInterval(function(){window.location.reload();}, 60000);

  // Declare state variables
  const [solution, setSolution] = useState(null);
  const [solution2, setNumbers] = useState(null);
  const [guess, setGuess] = useState(null);
  const [attempt, setAttempt] = useState(1);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isCorrectColor, setIsCorrectColor] = useState("red");
  const [secondAttempt, setSecondAttempt] = useState("false");
  const [thirdAttempt, setThirdAttempt] = useState("false");
  const [fourthAttempt, setFourthAttempt] = useState("false");
  const [fifthAttempt, setFifthAttempt] = useState("false");
  const [guesses, setGuesses] = useState([]);

  const [textboxOpen, setTextboxOpen] = useState(false);

  const toggleTextbox = () => {
    setTextboxOpen(!textboxOpen); }

  
// Declare allSolutions and allGames arrays
let allSolutions = [];
let allGames = [];


// Check if the allSolutions and allGames arrays already exist in local storage
if (localStorage.getItem("allSolutions")) {
  allSolutions = JSON.parse(localStorage.getItem("allSolutions"));
}
if (localStorage.getItem("allGames")) {
  allGames = JSON.parse(localStorage.getItem("allGames"));
}

// Function to handle adding a solution and game result to the arrays
const addSolutionAndGame = (solution, attempts) => {
  // Add the solution to the allSolutions array
  allSolutions.push(solution.club);

  // Add the number of attempts or an "X" to the allGames array
  
  allGames.push(attempts);
  

  // Save the allSolutions and allGames arrays to local storage
  localStorage.setItem("allSolutions", JSON.stringify(allSolutions));
  localStorage.setItem("allGames", JSON.stringify(allGames));
}

  // Function to handle a guess
  const handleGuess = (selectedOption) => {
    setGuess(selectedOption.value);
    console.log("handlechange", selectedOption);
    if (attempt < 6) {
      if (selectedOption.value === solution.club) {
        console.log("correct");
        setIsCorrectColor("green");
        setIsCorrect("Correct");
        setSecondAttempt("true");
        setThirdAttempt("true");
        setFourthAttempt("true");
        setFifthAttempt("true");
        setGuess(null);

        // Increment the score by 1
        const currentScore = localStorage.getItem('score') || 0;
        localStorage.setItem('score', parseInt(currentScore) + 1);
      } else {
        setAttempt(attempt + 1);
        console.log(attempt);
        setIsCorrect("Incorrect");
        console.log(guesses);
      }

      setGuesses([...guesses, selectedOption.value]);

      if (attempt >= 1) {
        setSecondAttempt("true");
      }
      if (attempt >= 2) {
        setThirdAttempt("true");
      }
      if (attempt >= 3) {
        setFourthAttempt("true");
      }
      if (attempt >= 4) {
        setFifthAttempt("true");
      }

      if (attempt >= 5 && selectedOption.value !== solution.club) {
        setIsCorrect("Unable");
        setGuess(null);
      }
    }

    if (selectedOption.value === solution.club) {
      addSolutionAndGame(solution, attempt);
      setGuess("");
      
    }

    if (attempt >= 5 && selectedOption.value !== solution.club){
      addSolutionAndGame(solution, 'X');
    }
  };

  const retreieveFromStorage = () => {
    const allSolutions = JSON.parse(localStorage.getItem("allSolutions"));
    const allGames = JSON.parse(localStorage.getItem("allGames"));
  }

  const resetScore = () => {
    localStorage.setItem('score', 0);
    window.location.reload();

    allSolutions = [];
    allGames = [];
  
    // Save the empty arrays to local storage
    localStorage.setItem("allSolutions", JSON.stringify(allSolutions));
    localStorage.setItem("allGames", JSON.stringify(allGames));
    
  };

  useEffect(() => {

    // Fetch solutions from the server
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // Select a random solution
        const randomSolution = json[Math.floor(Math.random() * json.length)];
  
        // Generate an array of random player indices
        const arr = [];
        while (arr.length < 5) {
          var r = Math.floor(Math.random() * randomSolution.players.length);
          if (arr.indexOf(r) === -1) arr.push(r);
        }
        // Sort the array in ascending order
        arr.sort(function (a, b) {
          return a - b;
        });
  
        // Update the state with the random solution and player indices
        setSolution(randomSolution);
        setNumbers(arr);
      });
    // Only run the effect once (on mount)
  }, []);

  

  return (
    <div className="App" style={{ backgroundColor: "rgb(173, 216, 230)" }}>
  {/* Import Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    crossorigin="anonymous"
  />

  <div>
    {/* Set page title */}
  <head>
    <title style={{ color: 'rgb(173, 216, 230)', fontFamily: 'Verdana' }}>Connect Five</title>
  </head>
  </div>

  {/* Set page title
  <head>
    <title>Connect Five</title>
  </head> */}

  {/* Render page content */}
  <body>

  <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <Button onClick={toggleTextbox} style = {{backgroundColor: 'grey'}}>
        <img src="./images/info.png" alt="i" />
      </Button>
      <Modal show={textboxOpen} onHide={toggleTextbox}>
        <Modal.Header>
          <Modal.Title>Important Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Let's test your ball knowledge! <br></br>
          The following cards are five players who have all played for the same club. <br></br>
          You have five chances to guess what the common club is. <br></br>
          Every wrong guess shows a new player. <br></br>
          5 incorrect guesses means game over. <br></br>
          Hit New Game to keep playing or Reset Score to set your score back to 0.

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleTextbox}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    {/* Add a button to refresh the page */}
  

    {/* Render the page title */}
    <h1>Connect Five</h1>

    <div>
      <Button style={{padding: '10px 20px', backgroundColor: 'green'}} onClick={() => window.location.reload()}>New Game</Button>
      <Button style={{padding: '10px 20px'}} onClick={resetScore}>Reset Score</Button>
    </div>

    <br></br>


    {/* Render a row of player cards using the Bootstrap grid system */}
    <center>
      <Container>
        <Row>
          <Col>
            {solution2 && (
              <PlayerCard data={solution.players[solution2[0]]} show={true} />
            )}
          </Col>
          <Col>
            {solution2 && (
              <PlayerCard
                data={solution.players[solution2[1]]}
                show={secondAttempt}
              />
            )}
          </Col>
          <Col>
            {solution2 && (
              <PlayerCard
                data={solution.players[solution2[2]]}
                show={thirdAttempt}
              />
            )}
          </Col>
          <Col>
            {solution2 && (
              <PlayerCard
                data={solution.players[solution2[3]]}
                show={fourthAttempt}
              />
            )}
          </Col>
          <Col>
            {solution2 && (
              <PlayerCard
                data={solution.players[solution2[4]]}
                show={fifthAttempt}
              />
            )}
          </Col>
        </Row>
      </Container>
    </center>

    <br></br>
    <Scoreboard/>
    {/* Add some vertical spacing */}
    <br></br>
    <br></br>

    {/* Render an alert based on the value of isCorrect */}
    {isCorrect === "Incorrect" && (
      <Alert variant="danger">Your guess was incorrect!</Alert>
    )}
    {isCorrect === "Unable" && (
      <Alert variant="danger">
        Unable to guess. Correct answer was {solution.club}
      </Alert>
    )}
    {isCorrect === "Correct" && (
      <Alert variant="success">Correct in {attempt} attempts</Alert>
    )}

    {/* Add some vertical spacing */}

    <div>
  {/* Center the table within the page */}
  </div>


<div style={{ display: "flex" }}>
  <div style={{ flex: "1 1 auto" }}>
    <h1>Current Guesses</h1>
    <table className="table mx-auto" style={{ width: "600px", flexGrow: 1 }}>
      {/* Create the table head with column labels */}
      <thead>
        <tr>
          <th>Attempt</th>
          <th>Guess</th>
          <th>X/✓</th>
        </tr>
      </thead>
      {/* Create the table body with rows for each guess */}
      <tbody>
        {guesses.map((guess, index) => (
          <tr
            // Set the row color based on whether the guess was correct
            style={{ color: guess === solution.club ? "green" : "red" }}
          >
            {/* Display the attempt number and the guess */}
            <td>{index + 1}/5</td>
            <td>{guess}</td>
            {/* Display a checkmark or an X based on whether the guess was correct */}
            <td>{guess === solution.club ? "✓" : "X"}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div style={{ flex: "1 1 auto" }}>
    {(isCorrect !== "Correct" && attempt < 6) ? (
  <div>
    <label htmlFor="clubs" style={{ fontWeight: "bold" }}>Guess:</label>
    <br></br>
    <div class="container-sm" >
          <Select
            style = {{width: 50}}
            options={clubs}
            onChange={handleGuess}
          />
        </div>
  </div> ) : null}
  </div>
  <div style={{ flex: "1 1 auto" }}>

    <h1>Game History</h1>
    
  <table className="table mx-auto" style={{ width: "600px", flexGrow: 1 }}>
      {/* Create the table head with column labels */}
      <thead>
        <tr>
          <th>Game #</th>
          <th>Club</th>
          <th>Correct in</th>
        </tr>
      </thead>
      {retreieveFromStorage}
      {/* Create the table body with rows for each guess */}
      <tbody>
      {allSolutions.map((solution, index2) => (
  <tr key={index2} style={{ color: allGames[index2] === "X" ? "red" : "green" }}>
    <td>{index2 + 1}</td>
    <td>{solution}</td>
    <td>{allGames[index2]}</td>
  </tr>
))}
    </tbody>
    </table>
    </div>
</div>






<br></br>
<br></br>
{/* <p>Guess History</p>
<table className="table mx-auto" style={{ width: "500px" }}>
  <thead>
    <tr>
      <th>Guesses</th>
      <th>Correct Answer</th>
      <th>Result</th>
      <th>Attempts</th>
    </tr>
  </thead>
  <tbody>
    {guesses.map((guess) => (
      <tr key={guess.id}>
        <td>
          {guess.players.map((player) => (
            <p key={player.id}>{player.name}</p>
          ))}
        </td>
        <td>{solution.club}</td>
        <td>{guess.club === solution.club ? "Correct" : "Incorrect"}</td>
        <td>{guess.attempts}</td>
      </tr>
    ))}
  </tbody>
</table> */}
  <div style={{ backgroundColor: "white" }}>
  <p>
    Created by             
    <a href="https://www.linkedin.com/in/boerjehan/"> Jehan Boer</a>
    , CS @ Johns Hopkins University
    <br></br>
    V 1.1
  </p>
</div>

        
      </body>
    </div>
  );
}

const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);


export default App
