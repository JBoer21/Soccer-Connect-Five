import './App.css';
import React from 'react';
import { useEffect, useState} from 'react';
import Select from 'react-select';
import { Row, Col, Alert, Container} from "react-bootstrap";
import ReactDOM, {render, createRoot} from "react-dom";
import ConnectFive from "./components/ConnectFive"
import useConnectFive from "./hooks/useConnectFive"
import PlayerCard from "./components/playercard"
import search from "./components/search"

const aquaticCreatures = [
  {label: 'Paris Saint-Germain', value: 'Paris Saint-Germain'},
{label: 'FC Barcelona', value: 'FC Barcelona'},
{label: 'FC Bayern München', value: 'FC Bayern München'},
{label: 'Manchester United', value: 'Manchester United'},
{label: 'Juventus', value: 'Juventus'},
{label: 'Real Madrid CF', value: 'Real Madrid CF'},
{label: 'Manchester City', value: 'Manchester City'},
{label: 'VfL Wolfsburg', value: 'VfL Wolfsburg'},
{label: 'Atlético de Madrid', value: 'Atlético de Madrid'},
{label: 'AS Monaco', value: 'AS Monaco'},
{label: 'Tottenham Hotspur', value: 'Tottenham Hotspur'},
{label: 'Chelsea', value: 'Chelsea'},
{label: 'Leicester City', value: 'Leicester City'},
{label: 'Stade Malherbe Caen', value: 'Stade Malherbe Caen'},
{label: 'Bayer 04 Leverkusen', value: 'Bayer 04 Leverkusen'},
{label: 'FC Porto', value: 'FC Porto'},
{label: 'Liverpool', value: 'Liverpool'},
{label: 'Southampton', value: 'Southampton'},
{label: 'Celtic', value: 'Celtic'},
{label: 'Roma', value: 'Roma'},
{label: 'SL Benfica', value: 'SL Benfica'},
{label: 'Rio Ave FC', value: 'Rio Ave FC'},
{label: 'RB Leipzig', value: 'RB Leipzig'},
{label: 'AC Milan', value: 'AC Milan'},
{label: 'Inter', value: 'Inter'},
{label: 'Everton', value: 'Everton'},
{label: 'Sporting CP', value: 'Sporting CP'},
{label: 'U.C. Sampdoria', value: 'U.C. Sampdoria'},
{label: 'Udinese Calcio', value: 'Udinese Calcio'},
{label: 'Borussia Dortmund', value: 'Borussia Dortmund'},
{label: 'Arsenal', value: 'Arsenal'},
{label: 'Lazio', value: 'Lazio'},
{label: 'Sevilla FC', value: 'Sevilla FC'},
{label: 'FC Schalke 04', value: 'FC Schalke 04'},
{label: 'Palermo', value: 'Palermo'},
{label: 'Hull City', value: 'Hull City'},
{label: 'Ajax', value: 'Ajax'},
{label: 'Villarreal CF', value: 'Villarreal CF'},
{label: 'Valencia CF', value: 'Valencia CF'},
{label: 'TSG Hoffenheim', value: 'TSG Hoffenheim'},
{label: 'Napoli', value: 'Napoli'},
{label: 'RCD Espanyol de Barcelona', value: 'RCD Espanyol de Barcelona'},
{label: 'Athletic Club de Bilbao', value: 'Athletic Club de Bilbao'},
{label: 'Deportivo Alavés', value: 'Deportivo Alavés'},
{label: 'Atalanta', value: 'Atalanta'},
{label: 'Real Sociedad', value: 'Real Sociedad'},
{label: 'Borussia Mönchengladbach', value: 'Borussia Mönchengladbach'},
{label: 'FC Red Bull Salzburg', value: 'FC Red Bull Salzburg'},
{label: 'Olympique Lyonnais', value: 'Olympique Lyonnais'},
{label: 'PSV', value: 'PSV'},
{label: 'SV Werder Bremen', value: 'SV Werder Bremen'},
{label: 'West Bromwich Albion', value: 'West Bromwich Albion'},
{label: 'KRC Genk', value: 'KRC Genk'},
{label: 'Racing Club', value: 'Racing Club'},
{label: 'LA Galaxy', value: 'LA Galaxy'},
{label: 'Newcastle United', value: 'Newcastle United'},
{label: 'Galatasaray SK', value: 'Galatasaray SK'},
{label: 'Burnley', value: 'Burnley'},
{label: 'RC Celta de Vigo', value: 'RC Celta de Vigo'},
{label: 'Deportivo de La Coruña', value: 'Deportivo de La Coruña'},
{label: 'Málaga CF', value: 'Málaga CF'},
{label: 'Toulouse Football Club', value: 'Toulouse Football Club'},
{label: 'Fiorentina', value: 'Fiorentina'},
{label: 'Aston Villa', value: 'Aston Villa'},
{label: 'Getafe CF', value: 'Getafe CF'},
{label: 'Wolverhampton Wanderers', value: 'Wolverhampton Wanderers'},
{label: 'Eintracht Frankfurt', value: 'Eintracht Frankfurt'},
{label: 'Hamburger SV', value: 'Hamburger SV'},
{label: 'VfB Stuttgart', value: 'VfB Stuttgart'},
{label: 'FC Twente', value: 'FC Twente'},
{label: 'OGC Nice', value: 'OGC Nice'},
{label: 'LOSC Lille', value: 'LOSC Lille'},
{label: 'RSC Anderlecht', value: 'RSC Anderlecht'},
{label: 'Real Betis Balompié', value: 'Real Betis Balompié'},
{label: 'Cagliari', value: 'Cagliari'},
{label: 'Zenit St. Petersburg', value: 'Zenit St. Petersburg'},
{label: 'Fenerbahçe SK', value: 'Fenerbahçe SK'},
{label: 'Al Ahli', value: 'Al Ahli'},
{label: 'Guangzhou FC', value: 'Guangzhou FC'},
{label: 'Sunderland', value: 'Sunderland'},
{label: 'U.S. Sassuolo Calcio', value: 'U.S. Sassuolo Calcio'},
{label: 'Olympique de Marseille', value: 'Olympique de Marseille'},
{label: 'Genoa', value: 'Genoa'},
{label: 'San Lorenzo de Almagro', value: 'San Lorenzo de Almagro'},
{label: 'New York City FC', value: 'New York City FC'},
{label: 'RCD Mallorca', value: 'RCD Mallorca'},
{label: 'AZ Alkmaar', value: 'AZ Alkmaar'},
{label: 'CA Osasuna', value: 'CA Osasuna'},
{label: 'Crystal Palace', value: 'Crystal Palace'},
{label: 'Grêmio', value: 'Grêmio'},
{label: 'Botafogo', value: 'Botafogo'},
{label: 'Derby County', value: 'Derby County'},
{label: 'Vitesse', value: 'Vitesse'},
{label: 'Stade Rennais FC', value: 'Stade Rennais FC'},
{label: 'FC Girondins de Bordeaux', value: 'FC Girondins de Bordeaux'},
{label: 'Beşiktaş JK', value: 'Beşiktaş JK'},
{label: 'West Ham United', value: 'West Ham United'},
{label: 'Swansea City', value: 'Swansea City'},
{label: 'Torino F.C.', value: 'Torino F.C.'},
{label: 'Hannover 96', value: 'Hannover 96'},
{label: 'Shanghai Port FC', value: 'Shanghai Port FC'},
{label: 'Fulham', value: 'Fulham'},
{label: 'PFC CSKA Moscow', value: 'PFC CSKA Moscow'},
{label: 'Levante Unión Deportiva', value: 'Levante Unión Deportiva'},
{label: 'AS Saint-Étienne', value: 'AS Saint-Étienne'},
{label: 'FC Nantes', value: 'FC Nantes'},
{label: 'Girona FC', value: 'Girona FC'},
{label: 'Middlesbrough', value: 'Middlesbrough'},
{label: 'SC Heerenveen', value: 'SC Heerenveen'},
{label: 'Real Zaragoza', value: 'Real Zaragoza'},
{label: 'Club Atlético Independiente', value: 'Club Atlético Independiente'},
{label: 'Hellas Verona', value: 'Hellas Verona'},
{label: 'Al Nassr', value: 'Al Nassr'},
{label: 'SC Braga', value: 'SC Braga'},
{label: 'Norwich City', value: 'Norwich City'},
{label: 'FC Paços de Ferreira', value: 'FC Paços de Ferreira'},
{label: 'Belenenses SAD', value: 'Belenenses SAD'},
{label: 'Moreirense FC', value: 'Moreirense FC'},
{label: 'Real Valladolid CF', value: 'Real Valladolid CF'},
{label: 'RB Bragantino', value: 'RB Bragantino'},
{label: 'Santos', value: 'Santos'},
{label: 'Watford', value: 'Watford'},
{label: 'Leeds United', value: 'Leeds United'},
{label: 'Vitória de Guimarães', value: 'Vitória de Guimarães'},
{label: 'TSV 1860 München', value: 'TSV 1860 München'},
{label: 'CD Leganés', value: 'CD Leganés'},
{label: 'Amiens SC', value: 'Amiens SC'},
{label: 'SK Slavia Praha', value: 'SK Slavia Praha'},
{label: 'Trabzonspor', value: 'Trabzonspor'},
{label: 'Tigres U.A.N.L.', value: 'Tigres U.A.N.L.'},
{label: 'Inter Miami CF', value: 'Inter Miami CF'},
{label: '1. FC Union Berlin', value: '1. FC Union Berlin'},
{label: 'Bologna', value: 'Bologna'},
{label: 'Stoke City', value: 'Stoke City'},
{label: 'Shakhtar Donetsk', value: 'Shakhtar Donetsk'},
{label: 'F.C. København', value: 'F.C. København'},
{label: 'Montpellier Hérault SC', value: 'Montpellier Hérault SC'},
{label: 'Unión Deportiva Las Palmas', value: 'Unión Deportiva Las Palmas'},
{label: 'Beijing Guoan FC', value: 'Beijing Guoan FC'},
{label: 'Standard de Liège', value: 'Standard de Liège'},
{label: 'Feyenoord', value: 'Feyenoord'},
{label: 'Clube Sport Marítimo', value: 'Clube Sport Marítimo'},
{label: 'Club América', value: 'Club América'},
{label: 'Club Atlético Lanús', value: 'Club Atlético Lanús'},
{label: 'Brentford', value: 'Brentford'},
{label: 'Olympiacos CFP', value: 'Olympiacos CFP'},
{label: 'FC Basel 1893', value: 'FC Basel 1893'},
{label: '1. FC Kaiserslautern', value: '1. FC Kaiserslautern'},
{label: 'İstanbul Başakşehir FK', value: 'İstanbul Başakşehir FK'},
{label: 'Empoli', value: 'Empoli'},
{label: 'Granada CF', value: 'Granada CF'},
{label: 'CD Nacional', value: 'CD Nacional'},
{label: 'SD Huesca', value: 'SD Huesca'},
{label: 'Panathinaikos FC', value: 'Panathinaikos FC'},
{label: 'Pescara', value: 'Pescara'},
{label: 'AC Sparta Praha', value: 'AC Sparta Praha'},
{label: 'Sheffield United', value: 'Sheffield United'},
{label: 'Pachuca', value: 'Pachuca'},
{label: 'Angers SCO', value: 'Angers SCO'},
{label: 'Rosario Central', value: 'Rosario Central'},
{label: 'Clube Atlético Mineiro', value: 'Clube Atlético Mineiro'},
{label: 'Cruzeiro', value: 'Cruzeiro'},
{label: 'Palmeiras', value: 'Palmeiras'},
{label: 'Fluminense', value: 'Fluminense'},
{label: 'Flamengo', value: 'Flamengo'},
{label: 'SPAL', value: 'SPAL'},
{label: 'Brighton & Hove Albion', value: 'Brighton & Hove Albion'},
{label: 'Parma', value: 'Parma'},
{label: 'Club Brugge KV', value: 'Club Brugge KV'},
{label: 'Fatih Karagümrük S.K.', value: 'Fatih Karagümrük S.K.'},
{label: 'Royal Antwerp FC', value: 'Royal Antwerp FC'},
{label: 'Sport-Club Freiburg', value: 'Sport-Club Freiburg'},
{label: 'Boca Juniors', value: 'Boca Juniors'},
{label: 'River Plate', value: 'River Plate'},
{label: 'Seattle Sounders FC', value: 'Seattle Sounders FC'},
{label: 'FC Lokomotiv Moscow', value: 'FC Lokomotiv Moscow'},
{label: 'Bursaspor', value: 'Bursaspor'},
{label: 'Stade de Reims', value: 'Stade de Reims'},
{label: 'FC Augsburg', value: 'FC Augsburg'},
{label: 'Toronto FC', value: 'Toronto FC'},
{label: 'Rayo Vallecano', value: 'Rayo Vallecano'},
{label: 'CF Monterrey', value: 'CF Monterrey'},
{label: 'Spartak Moskva', value: 'Spartak Moskva'},
{label: 'SD Eibar', value: 'SD Eibar'},
{label: 'Cruz Azul', value: 'Cruz Azul'},
{label: 'BSC Young Boys', value: 'BSC Young Boys'},
{label: 'Internacional', value: 'Internacional'},
{label: '1. FSV Mainz 05', value: '1. FSV Mainz 05'},
{label: 'Vissel Kobe', value: 'Vissel Kobe'},
{label: 'Al Hilal', value: 'Al Hilal'},
{label: 'Unión Deportiva Almería', value: 'Unión Deportiva Almería'},
{label: 'Rubin Kazan', value: 'Rubin Kazan'},
{label: 'Nottingham Forest', value: 'Nottingham Forest'},
{label: 'Shanghai Shenhua FC', value: 'Shanghai Shenhua FC'},
{label: 'AFC Bournemouth', value: 'AFC Bournemouth'},
{label: 'Elche CF', value: 'Elche CF'},
{label: 'Real Sporting de Gijón', value: 'Real Sporting de Gijón'},
{label: 'ESTAC Troyes', value: 'ESTAC Troyes'},
{label: 'Hertha BSC', value: 'Hertha BSC'},
{label: 'RC Strasbourg Alsace', value: 'RC Strasbourg Alsace'},
{label: 'Racing Club de Lens', value: 'Racing Club de Lens'},
{label: 'Adana Demirspor', value: 'Adana Demirspor'},
{label: 'Vélez Sarsfield', value: 'Vélez Sarsfield'},
{label: '1. FC Köln', value: '1. FC Köln'},
{label: 'Dijon FCO', value: 'Dijon FCO'},
{label: 'Dinamo Moscow', value: 'Dinamo Moscow'},
{label: 'Boavista FC', value: 'Boavista FC'},
{label: 'KAA Gent', value: 'KAA Gent'},
{label: 'Jiangsu FC', value: 'Jiangsu FC'},
{label: 'Club de Foot Montréal', value: 'Club de Foot Montréal'},
{label: 'PAOK', value: 'PAOK'},
{label: 'FC Krasnodar', value: 'FC Krasnodar'},
{label: '1. FC Nürnberg', value: '1. FC Nürnberg'},
{label: 'Kasimpaşa SK', value: 'Kasimpaşa SK'},
{label: 'Antalyaspor', value: 'Antalyaspor'},
{label: 'Chievo Verona', value: 'Chievo Verona'},
{label: 'Yukatel Kayserispor', value: 'Yukatel Kayserispor'},
{label: 'Aytemiz Alanyaspor', value: 'Aytemiz Alanyaspor'},
{label: 'Queens Park Rangers', value: 'Queens Park Rangers'}
];


function App() {
  const [solution, setSolution] = useState(null)
  const [solution2, setNumbers] = useState(null)
  const [guess, setGuess] = useState(null)
  const [attempt, setAttempt] = useState(1)
  const [isCorrect, setIsCorrect] = useState(null)
  const [isCorrectColor, setIsCorrectColor] = useState("red")
  const [secondAttempt, setSecondAttempt] = useState("false")
  const [thirdAttempt, setThirdAttempt] = useState("false")
  const [fourthAttempt, setFourthAttempt] = useState("false")
  const [fifthAttempt, setFifthAttempt] = useState("false")
  const [guesses, setGuesses] = useState([])


  

  const handleGuess = (selectedOption) => {
    setGuess(selectedOption.value)
    console.log("handlechange", selectedOption);
    if (attempt < 6) {
      if (selectedOption.value === solution.club){
        console.log("correct")
        setIsCorrectColor("green")
        setIsCorrect("Correct in " + (attempt) + " tries")
        setSecondAttempt("true")
        setThirdAttempt("true")
        setFourthAttempt("true")
        setFifthAttempt("true")
        setGuess(null)
        } else {
        setAttempt(attempt + 1)
        console.log(attempt)
        setIsCorrect("Incorrect")
        console.log(guesses)
      }

      if (attempt >= 1) {

        setSecondAttempt("true")

      }
      if (attempt >= 2) {

        setThirdAttempt("true")

      }
      if (attempt >= 3) {

        setFourthAttempt("true")

      }
      if (attempt >= 4) {

        setFifthAttempt("true")

      }

      if (attempt >= 5) {

        setIsCorrect("Unable to guess, solution is " + (solution.club))
        setGuess(null)

      }
    }

  };

  useEffect(() => {

    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution= json[Math.floor(Math.random()*json.length)]
        const arr = [] 
        while(arr.length < 5){
          var r = Math.floor(Math.random() * randomSolution.players.length);
          if(arr.indexOf(r) === -1) arr.push(r);
        }
        arr.sort(function(a, b){return a - b});
        setSolution(randomSolution)
        setNumbers(arr)



      })
  }, [setSolution, setNumbers])

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <head>
        <title>Connect Five</title>
      </head>
      <body>
        <h1>Connect Five</h1>

        <center><Container>
          <Row>
            <Col>{solution2 && <PlayerCard data = {solution.players[solution2[0]]} show = "true" />}</Col>
            <Col>{solution2 && <PlayerCard data = {solution.players[solution2[1]]} show = {secondAttempt} />}</Col>
            <Col>{solution2 && <PlayerCard data = {solution.players[solution2[2]]} show = {thirdAttempt} />}</Col>
            <Col>{solution2 && <PlayerCard data = {solution.players[solution2[3]]} show = {fourthAttempt} />}</Col>
            <Col>{solution2 && <PlayerCard data = {solution.players[solution2[4]]} show = {fifthAttempt}/>}</Col>

    
          </Row>
        </Container></center>

        <br></br>
        <br></br>

        <center>{guess && <div style={{ color: (isCorrectColor) }}> {guess} </div>}</center>
        <br></br>
        <center>{isCorrect && <div style={{ color: (isCorrectColor) }}> {isCorrect} </div>}</center>

        <p>Guess:</p>
        <div class="container-sm">
          <Select
            style = {{width: 50}}
            options={aquaticCreatures}
            onChange={handleGuess}
          />
        </div>
      </body>
    </div>
  );
}

const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);


export default App
