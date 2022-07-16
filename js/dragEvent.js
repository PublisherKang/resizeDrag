const warp = document.getElementById("wrap");
const btn = document.getElementById("button");

let x = 0;
let leftWidth = 0;

const mouseDownHandler = (e) => {
  // e.preventDefault();
  x = e.clientX;

  leftWidth = warp.getBoundingClientRect().width;
  // console.log(e);
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = (e) => {
  const dx = e.clientX - x;

  const resizeWidth = leftWidth + dx;
  // console.log(dx);
  // console.log(resizeWidth);
  warp.style.width = `${resizeWidth}px`;

  console.log(wrap.offsetWidth);
};

const mouseUpHandler = (e) => {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mousedown", mouseDownHandler);
};

btn.addEventListener("mousedown", mouseDownHandler);
