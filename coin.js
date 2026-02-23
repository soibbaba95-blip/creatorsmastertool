// Load coins
let coins = localStorage.getItem("coins");
if (!coins) {
  coins = 0;
  localStorage.setItem("coins", coins);
}

document.addEventListener("DOMContentLoaded", () => {
  const coinDisplay = document.getElementById("coinCount");
  if (coinDisplay) coinDisplay.innerText = coins;
});

// Add coins
function addCoins(amount) {
  coins = parseInt(coins) + amount;
  localStorage.setItem("coins", coins);
  document.getElementById("coinCount").innerText = coins;
  alert("You earned " + amount + " coins!");
}

// Use coins
function useCoins(amount) {
  if (coins >= amount) {
    coins -= amount;
    localStorage.setItem("coins", coins);
    document.getElementById("coinCount").innerText = coins;
    return true;
  } else {
    alert("Not enough coins!");
    return false;
  }
}