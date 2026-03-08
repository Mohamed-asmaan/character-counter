// Character limit
var maxChars = 200;

// Get elements from the page
var textarea = document.getElementById("message");
var counterEl = document.getElementById("counter");
var warningEl = document.getElementById("warning");

// Update the counter when user types
function updateCounter() {
  var currentLength = textarea.value.length;
  var remaining = maxChars - currentLength;

  counterEl.innerHTML = currentLength + "/" + maxChars + " characters (" + remaining + " remaining)";

  if (currentLength >= maxChars) {
    textarea.className = "limit-reached";
    warningEl.innerHTML = "Character limit reached. You cannot type more.";
  } else {
    textarea.className = "";
    warningEl.innerHTML = "";
  }
}

// Show counter when page loads
updateCounter();
