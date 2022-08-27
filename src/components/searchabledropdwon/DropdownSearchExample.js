import React, { Component } from 'react'
import { Dropdown } from 'reusable-react-components'

const options = [
  ['Paris Saint-Germain', 
  'FC Barcelona', 
  'FC Bayern München', 
  'Manchester United', 
  'Juventus', 'Real Madrid CF',
   'Manchester City',
    'VfL Wolfsburg',
     'Atlético de Madrid',
      'AS Monaco',
       'Tottenham Hotspur',
        'Chelsea', 
        'Leicester City', 
        'Stade Malherbe Caen', 
        'Bayer 04 Leverkusen', 
        'FC Porto', 'Liverpool', 
        'Southampton', 'Celtic', 'Roma', 'SL Benfica', 'Rio Ave FC', 'RB Leipzig', 'AC Milan', 'Inter', 'Everton', 'Sporting CP', 'U.C. Sampdoria', 'Udinese Calcio', 'Borussia Dortmund', 'Arsenal', 'Lazio', 'Sevilla FC', 'FC Schalke 04', 'Palermo', 'Hull City', 'Ajax', 'Villarreal CF', 'Valencia CF', 'TSG Hoffenheim', 'Napoli', 'RCD Espanyol de Barcelona', 'Athletic Club de Bilbao', 'Deportivo Alavés', 'Atalanta', 'Real Sociedad', 'Borussia Mönchengladbach', 'FC Red Bull Salzburg', 'Olympique Lyonnais', 'PSV', 'SV Werder Bremen', 'West Bromwich Albion', 'KRC Genk', 'Racing Club', 'LA Galaxy', 'Newcastle United', 'Galatasaray SK', 'Burnley', 'RC Celta de Vigo', 'Deportivo de La Coruña', 'Málaga CF', 'Toulouse Football Club', 'Fiorentina', 'Aston Villa', 'Getafe CF', 'Wolverhampton Wanderers', 'Eintracht Frankfurt', 'Hamburger SV', 'VfB Stuttgart', 'FC Twente', 'OGC Nice', 'LOSC Lille', 'RSC Anderlecht', 'Real Betis Balompié', 'Cagliari', 'Zenit St. Petersburg', 'Fenerbahçe SK', 'Al Ahli', 'Guangzhou FC', 'Sunderland', 'U.S. Sassuolo Calcio', 'Olympique de Marseille', 'Genoa', 'San Lorenzo de Almagro', 'New York City FC', 'RCD Mallorca', 'AZ Alkmaar', 'CA Osasuna', 'Crystal Palace', 'Grêmio', 'Botafogo', 'Derby County', 'Vitesse', 'Stade Rennais FC', 'FC Girondins de Bordeaux', 'Beşiktaş JK', 'West Ham United', 'Swansea City', 'Torino F.C.', 'Hannover 96', 'Shanghai Port FC', 'Fulham', 'PFC CSKA Moscow', 'Levante Unión Deportiva', 'AS Saint-Étienne', 'FC Nantes', 'Girona FC', 'Middlesbrough', 'SC Heerenveen', 'Real Zaragoza', 'Club Atlético Independiente', 'Hellas Verona', 'Al Nassr', 'SC Braga', 'Norwich City', 'FC Paços de Ferreira', 'Belenenses SAD', 'Moreirense FC', 'Real Valladolid CF', 'RB Bragantino', 'Santos', 'Watford', 'Leeds United', 'Vitória de Guimarães', 'TSV 1860 München', 'CD Leganés', 'Amiens SC', 'SK Slavia Praha', 'Trabzonspor', 'Tigres U.A.N.L.', 'Inter Miami CF', '1. FC Union Berlin', 'Bologna', 'Stoke City', 'Shakhtar Donetsk', 'F.C. København', 'Montpellier Hérault SC', 'Unión Deportiva Las Palmas', 'Beijing Guoan FC', 'Standard de Liège', 'Feyenoord', 'Clube Sport Marítimo', 'Club América', 'Club Atlético Lanús', 'Brentford', 'Olympiacos CFP', 'FC Basel 1893', '1. FC Kaiserslautern', 'İstanbul Başakşehir FK', 'Empoli', 'Granada CF', 'CD Nacional', 'SD Huesca', 'Panathinaikos FC', 'Pescara', 'AC Sparta Praha', 'Sheffield United', 'Pachuca', 'Angers SCO', 'Rosario Central', 'Clube Atlético Mineiro', 'Cruzeiro', 'Palmeiras', 'Fluminense', 'Flamengo', 'SPAL', 'Brighton & Hove Albion', 'Parma', 'Club Brugge KV', 'Fatih Karagümrük S.K.', 'Royal Antwerp FC', 'Sport-Club Freiburg', 'Boca Juniors', 'River Plate', 'Seattle Sounders FC', 'FC Lokomotiv Moscow', 'Bursaspor', 'Stade de Reims', 'FC Augsburg', 'Toronto FC', 'Rayo Vallecano', 'CF Monterrey', 'Spartak Moskva', 'SD Eibar', 'Cruz Azul', 'BSC Young Boys', 'Internacional', '1. FSV Mainz 05', 'Vissel Kobe', 'Al Hilal', 'Unión Deportiva Almería', 'Rubin Kazan', 'Nottingham Forest', 'Shanghai Shenhua FC', 'AFC Bournemouth', 'Elche CF', 'Real Sporting de Gijón', 'ESTAC Troyes', 'Hertha BSC', 'RC Strasbourg Alsace', 'Racing Club de Lens', 'Adana Demirspor', 'Vélez Sarsfield', '1. FC Köln', 'Dijon FCO', 'Dinamo Moscow', 'Boavista FC', 'KAA Gent', 'Jiangsu FC', 'Club de Foot Montréal', 'PAOK', 'FC Krasnodar', '1. FC Nürnberg', 'Kasimpaşa SK', 'Antalyaspor', 'Chievo Verona', 'Yukatel Kayserispor', 'Aytemiz Alanyaspor', 'Queens Park Rangers']
]

class DropdownSearchExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'one'
    }
  }
  onChange (value, key) {
    this.setState({
      [key]: value
    })
  }
  onSearch (text) {
    let searchOptions = []
    // any filter function and return array of options or get array of options from API
    options.map((item) => {
      if (item.indexOf(text) >= 0) {
        searchOptions.push(item)
      }
    })
    this.setState({
      searchOptions
    })
  }
  render () {
    return (
      <div>
        <Dropdown searchOptions={this.state.searchOptions} onSearch={(value) => this.onSearch(value)} minLength={1} title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
      </div>
    )
  }
}

export default DropdownSearchExample