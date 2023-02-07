// 1 Ігра спіймай шарік

const x = document.getElementById("cirkl");
x.addEventListener("mouseover", function () {
  const rand = Math.floor(Math.random() * 1200);
  const rand2 = Math.floor(Math.random() * 700);
  x.style.left = rand + "px";
  x.style.top = rand2 + "px";
});
