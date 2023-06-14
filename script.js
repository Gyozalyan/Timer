let minute = "0",
  second = "0",
  milsec = "0",
  timer;

function currentTime() {
  return (
    (minute < 10 ? "0" + minute : minute) +
    ":" +
    (second < 10 ? "0" + second : second) +
    ":" +
    (milsec < 10 ? "0" + milsec : milsec)
  );
}

document.getElementById("timer").innerHTML = currentTime();

const start = document.querySelector("#start");
const stop = document.querySelector("#stopWatch");
const res = document.querySelector("#restart");
const saveTime = document.querySelector("#saving");
const clearTime = document.querySelector("#clear");

start.onclick = starting;
stop.onclick = stoping;
res.onclick = restart;
saveTime.onclick = print;
clearTime.onclick = clear

function run() {
  document.getElementById("timer").innerHTML = currentTime();

  milsec++;

  if (milsec === 100) {
    milsec = 0;
    second++;
  }

  if (second === 60) {
    second = 0;
    minute++;
  }
}

function stopTimer(){
  clearInterval(timer);
  timer = false;
}

function starting() {
  if (!timer) {
    start.innerText = "Pause";
    timer = setInterval(run, 10);
  } else {
    start.innerText = "Start";
    stopTimer()
  }
}


function stoping(){
  stopTimer()
   minute = "0",
  second = "0",
  milsec = "0",
  document.getElementById("timer").innerHTML = currentTime();
  start.innerText = "Start"
}

function restart(){
  stoping()
  starting()
}

function print(){
  const li = document.createElement('li')
  li.innerText = currentTime();
  lap.appendChild(li)
}

function clear (){
  lap.innerHTML = null
}
