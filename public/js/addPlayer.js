async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#playerName").value;
  const jerseyNumber = document.querySelector("#jerseyNumber").value;
  const position = document.querySelector("#position").value;
  const leftFoot = document.querySelector("#leftFoot").value;
  const rightFoot = document.querySelector("#rightFoot").value;
  const teamName = document.querySelector("#team").value;

  const weakFoot = leftFoot === "Weak" ? "Left" : "Right";
  const strongFoot = leftFoot === "Strong" ? "Left" : "Right";

  const response = await fetch(`/api/players`, {
    method: "POST",
    body: JSON.stringify({
      name,
      jerseyNumber,
      position,
      weakFoot,
      strongFoot,
      teamName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add player");
  }
  document.location.replace("/players");

}

// Control when the below code block runs: we want it only when the page loads.
document
  .querySelector("#new-player-form")
  .addEventListener("submit", newFormHandler);
