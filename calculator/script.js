// Access the display element
const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

// Function to append input to the display
function appendInput(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Function to clear the input field
function clearInput() {
  display.value = "0";
}

// Function to calculate the result
function calculate() {
  try {
    // Replace × and ÷ for evaluation
    const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(expression);

    // Save to history and display the result
    saveHistory(`${display.value} = ${result}`);
    display.value = result.toString();
  } catch {
    display.value = "Error";
  }
}

// Function to save a calculation to history
function saveHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

// Function to clear the history
function clearHistory() {
  historyList.innerHTML = "";
}
