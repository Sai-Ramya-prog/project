function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  const resultArea = document.getElementById("result");
  let primes = [];

  if (isNaN(start) || isNaN(end) || start > end) {
    resultArea.value = "Please enter a valid range.";
    return;
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  resultArea.value = primes.length ? primes.join(", ") : "No prime numbers found.";
}
