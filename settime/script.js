const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");
const p = document.querySelector(".num");

let count = 0;
let timer
let isTimerCreated=false

start.addEventListener("click", function () {
    if (isTimerCreated) {
        return
    }
   timer = setInterval(() => {
    count++;
    p.textContent = count;
  }, 1000);
  isTimerCreated=true
});

reset.addEventListener("click", function () {
    clearInterval(timer)
    isTimerCreated=false
    count=0
    p.textContent = count;
});

stop.addEventListener("click", function () {
  clearInterval(timer);
  isTimerCreated=false
});

