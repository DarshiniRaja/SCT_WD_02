let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let lapCounter = 1;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (timer !== null) return; 
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  timer = null;
  document.getElementById("laps").innerHTML = "";
  lapCounter = 1;
}

function lapStopwatch() {
  if (timer === null) return; 
  const lapTime = document.getElementById("display").innerText;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.innerText = `Lap ${lapCounter++}: ${lapTime}`;
  lapList.appendChild(li);
}
