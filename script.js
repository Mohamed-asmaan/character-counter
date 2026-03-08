const MAX_CHARS = 200;
const textarea = document.getElementById('message');
const counterEl = document.getElementById('counter');
const warningEl = document.getElementById('warning');

function updateCounter() {
  const currentLength = textarea.value.length;
  const remaining = MAX_CHARS - currentLength;

  counterEl.textContent = currentLength + "/" + MAX_CHARS + " characters (" + remaining + " remaining)";

  if (currentLength >= MAX_CHARS) {
    textarea.classList.add('limit-reached');
    warningEl.textContent = 'Character limit reached. You cannot type more.';
  } else {
    textarea.classList.remove('limit-reached');
    warningEl.textContent = '';
  }
}

textarea.addEventListener('input', updateCounter);

// Initial state
updateCounter();
