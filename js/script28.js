function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) return alert("Please select your date of birth.");

  const dobDate = new Date(dob);
  const today = new Date();

  let year = today.getFullYear() - dobDate.getFullYear();
  let month = today.getMonth() - dobDate.getMonth();
  let day = today.getDate() - dobDate.getDate();

  if (day < 0) {
    month--;
    day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  document.getElementById("year").innerText = year;
  document.getElementById("month").innerText = month;
  document.getElementById("day").innerText = day;
}
