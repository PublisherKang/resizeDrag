const warp = document.getElementById("wrap");
const btn = document.getElementById("button");

let x = 0;
let leftWidth = 0;

const mouseDownHandler = (e) => {
  // e.preventDefault();
  x = e.clientX;

  //현재 바 사이즈
  leftWidth = warp.getBoundingClientRect().width;
  // console.log(leftWidth);

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = (e) => {
  const dx = e.clientX - x;

  const resizeWidth = leftWidth + dx;
  // console.log(dx);
  // console.log(resizeWidth);
  warp.style.width = `${resizeWidth}px`;

  // console.log(wrap.offsetWidth);

  //엘리먼트 사이즈가 400보다 크다면 고정 시키기
  if (wrap.offsetWidth > 400) {
    // console.log("a");
    wrap.style.width = `400px`;
  }
};

const mouseUpHandler = (e) => {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mousedown", mouseDownHandler);
};

btn.addEventListener("mousedown", mouseDownHandler);
