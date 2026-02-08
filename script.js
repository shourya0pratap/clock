const hourHand = document.querySelector("#hour-hand");
const minHand = document.querySelector("#min-hand");
const secHand = document.querySelector("#sec-hand");

function updateClock() {
  const now = new Date();

  const millisec = now.getMilliseconds();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  // 1. Seconds: 6 degrees per second
  const secDegrees = sec * 6 + 0.006 * millisec;

  // 2. Minutes: 6 degrees per minute + a little bit for the seconds passed
  const minDegrees = min * 6 + sec * 0.1;

  // 3. Hours: 30 degrees per hour + a little bit for the minutes passed
  // We use % 12 to convert 24h time to 12h time
  const hourDegrees = (hour % 12) * 30 + min * 0.5;

  // Apply rotations while maintaining the horizontal centering
  secHand.style.transform = `translateX(-50%) rotate(${secDegrees}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

updateClock();
setInterval(updateClock, 16);