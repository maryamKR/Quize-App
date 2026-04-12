const params = new URLSearchParams(window.location.search);

const score = params.get("score");
const total = params.get("total");

document.getElementById("score").innerText = score;
document.getElementById("out_of").innerText = total;