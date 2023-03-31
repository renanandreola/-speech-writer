import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/getWords").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.test == "undefined") ? (
        <p>Loading...</p>
      ) : (
        data.test.map((member, pos) => (
          <p key={pos}>{member}</p>
        ))
      )}
      
    </div>
  );
}

export default App;
