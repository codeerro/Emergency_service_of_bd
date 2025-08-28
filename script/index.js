
//shared code
const callHistory = [];



//for functioning the copy button

let count = 0;
const buttons = document.querySelectorAll(".increaseBtn");
const value = document.getElementById("counterValue");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // 1. Find the card and hotline number
    const card = button.closest(".card");
    const number = card.querySelector(".phone-no").innerText;

    // 2. Copy number to clipboard
    navigator.clipboard.writeText(number).then(() => {
      // 3. Show alert
      alert(`Hotline number ${number} copied`);

      // 4. Increase global copy counter (header)
      count++;
      value.textContent = count;
    }).catch(err => {
      alert("Failed to copy number");
      console.error(err);
    });
  });
});


//for functioning fav icon
 let fav = 0;
    const favButtons = document.querySelectorAll(".favBtn");
    const favValue = document.getElementById("favCount");

    favButtons.forEach(button => {
      button.addEventListener("click", () => {
        fav++;
        favValue.textContent = fav;
      });
    });
//for each calling -20 points
const coinDisplay = document.getElementById("total-coin");
const callButtons = document.querySelectorAll(".calling");
const costPerCall = 20;

callButtons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    let coins = parseInt(coinDisplay.innerText);

    if (coins <= 0) {
      alert("You do not have sufficient coin to make a call");
      return;
    }

    coins -= costPerCall;
    if (coins < 0) 
        coins = 0; 
    coinDisplay.innerText = coins;

    const message = btn.dataset.message;
    alert(message);
  });



});


//call history section

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

const callHistoryEl = document.getElementById("callHistory");
const clearBtn = document.getElementById("clearBtn");
const callButton = document.querySelectorAll(".calling");

function addCall(name, number) {
    const callItem = document.createElement("div");
    callItem.classList.add("p-2", "bg-gray-100", "rounded");

    callItem.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-medium">${name}</span>
        <span class="text-xs text-gray-500">${getCurrentTime()}</span>
      </div>
      <p class="text-sm text-gray-600">${number}</p>
    `;

    callHistoryEl.appendChild(callItem);
}

callButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card"); // your card container
        const name = card.querySelector(".name").innerText;
        const number = card.querySelector(".phone-no").innerText;

        addCall(name, number);
    });
});

clearBtn.addEventListener("click", () => {
    callHistoryEl.innerHTML = "";
});



 
  