const params = new URLSearchParams(window.location.search);

const score = params.get("score");
const total = params.get("total");

document.getElementById("score").innerText = score;
document.getElementById("out_of").innerText = total;

let replayBtn = document.getElementById("replay")
const subject = new URLSearchParams(window.location.search).get("subject");
replayBtn.addEventListener("click", () => {
  window.location.href = `A_quize.html?subject=${subject}`;
});

