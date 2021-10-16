const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]');
const min = document.querySelector('[data-value="mins"]');
const sec = document.querySelector('[data-value="secs"]');
const div = document.querySelector('#timer-1');

const timer = {
  start() {
    const targetDate = new Date('Jan 1, 2022');

    setInterval(() => {
      const currentTime = new Date();

      const deltaTime = targetDate - currentTime;

      const time = getTimeComponents(deltaTime);

      updateClockFace(time);
      console.log(currentTime);
      console.log(targetDate);
    }, 1000);
  },
};
timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function updateClockFace({ days, hours, mins, secs }) {
  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  min.textContent = `${mins}`;
  sec.textContent = `${secs}`;
}
