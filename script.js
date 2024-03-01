function getValues() {
  const deadline = new Date(2024, 2, 7, 11, 30, 0);
  const now = new Date();
  const t = deadline.getTime() - now.getTime();

  const d = Math.floor(t / (1000 * 60 * 60 * 24));
  const h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((t % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = `${d} DAYS`;
  document.querySelector(".hours").textContent = `${h} HOURS`;
  document.querySelector(".minutes").textContent = `${m} MINS`;
  document.querySelector(".seconds").textContent = `${s} SECS`;

  console.log({ d, h, m, s });
}

setInterval(getValues, 1000);
