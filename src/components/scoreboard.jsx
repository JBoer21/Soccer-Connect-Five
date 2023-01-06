import React from 'react';


function Scoreboard(props) {
  // Get the current score from localStorage
  const currentScore = localStorage.getItem('score') || 0;

  return <div class="container text-center">
    
    <table className="table mx-auto" style={{ width: "100px", flexGrow: 1 }}>
      {/* Create the table head with column labels */}
      <thead>
        <tr>
          <th>Score:</th>
          <th>{currentScore}</th>
        </tr>
      </thead>
    </table>
    </div>;
}

export default Scoreboard