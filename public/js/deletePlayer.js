const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");

// Get the <span> element that closes the modal
const closeBtn = modal.querySelector(".close");

// When the user clicks the button, open the modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";

  const deletePlayerBtn = document.getElementById("deletePlayerBtn");
  deletePlayerBtn.addEventListener("click", deletePlayer);
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

async function deletePlayer(event) {
  event.preventDefault();
  console.log("test");

  const deletePlayerInput = document.getElementById("deletePlayerInput").value;

  try {
    const response = await fetch(`/api/players/${deletePlayerInput}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      modal.style.display = "none";
      alert("Player deleted!");
      document.location.replace("/players");
    }
    //   } else {
    //     alert("Failed to delete player!");
    //   }

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
