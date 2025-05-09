const btn = document.getElementById("btn");
const cav = document.getElementById("myCanvas");
const ctx = cav.getContext("2d");

const canvasDraw = () => {
  var x = 0;
  var y = 0;
  let drawing = false;

  cav.onmousedown = (e) => {
    drawing = true;
    x = e.offsetX;
    y = e.offsetY;
    ctx.strokeStyle = "#279eff";
  };

  cav.onmousemove = (e) => {
    if (drawing == true) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      x = e.offsetX;
      y = e.offsetY;
    }
  };

  cav.onmouseup = () => {
    drawing = false;
  };

  btn.style.display = "block";
  btn.innerHTML = "Reset";
  btn.addEventListener("click", () => {
    ctx.reset();
  });
};

// canvasDraw();

// -----------------------------------------------------------

const drawCharts = () => {
  const charts = [
    [100, 100, "#EF9595"],
    [250, 200, "#053B50"],
    [400, 300, "#EFB495"],
    [550, 400, "#64CCC5"],
    [700, 500, "#EEEEEE"],
    [850, 580, "#053B50"],
  ];

  charts.forEach((chart) => {
    ctx.fillStyle = chart[2];
    ctx.fillRect(chart[0], chart[1], 80, 600);
  });
};

// drawCharts();

// ------------------------------------------------------------------

const drawText = () => {
  ctx.shadowOffsetX = 8;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.font = "bold 60px Sans-Serif";
  const gradient = ctx.createLinearGradient(0, 0, 0, 100);
  gradient.addColorStop(0.5, "#279eff");
  gradient.addColorStop(1, "#000");

  ctx.fillStyle = gradient;
  ctx.fillText("Hello world!", 300, 200);
};

// drawText();

// ------------------------------------------------------------------------

const writeInStorage = () => {
  localStorage.setItem("name", "Yousif");
  localStorage.setItem("email", "YousifM.Helal@gmail.com");

  btn.style.display = "block";
  btn.innerHTML = "Increment";
  sessionStorage.setItem("counter", "1");

  btn.addEventListener("click", () => {
    sessionStorage.counter = Number(sessionStorage.counter) + 1;
    console.log(sessionStorage.counter)
  });

  document.querySelector(
    "h2"
  ).innerHTML = `My name is: ${localStorage.name} & My email is: ${localStorage.email}`;
};

writeInStorage();



