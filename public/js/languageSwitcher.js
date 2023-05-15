const langBtn = document.getElementById("langSwitch");

async function toggleLanguage() {
  const response = await fetch("/switchLanguage", {
    method: "POST",
  });

  document.location.reload();
}

langBtn.addEventListener("click", toggleLanguage);
