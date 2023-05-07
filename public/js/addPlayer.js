async function newFormHandler(event) {
    event.preventDefault();
  
    const playerName = document.querySelector('#playerName').value;
    const jerseyNumber = document.querySelector('#jerseyNumber').value;
    const position = document.querySelector('#position').value;
    const leftFoot = document.querySelector('#leftFoot').value;
    const rightFoot = document.querySelector('#rightFoot').value;
  
    const response = await fetch(`/api/players`, {
      method: 'POST',
      body: JSON.stringify({
        playerName,
        jerseyNumber,
        position,
        leftFoot,
        rightFoot,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add player');
    }
  }
  
  document
    .querySelector('#new-player-form')
    .addEventListener('submit', newFormHandler);
  