import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  // We'll rely on the "REACT_APP_API_URL" build-time variable
  const apiUrl = process.env.REACT_APP_API_URL || '/api';

  useEffect(() => {
    fetch(`${apiUrl}/hello`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, [apiUrl]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Hello World from the Frontend!</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
