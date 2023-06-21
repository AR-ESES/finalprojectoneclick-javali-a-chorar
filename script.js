const javali = document.querySelector(".javali");
const pedra = document.querySelector(".pedra");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!javali.classList.contains("jump")) {
    javali.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      javali.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}


setInterval( () => {
  let javaliBottom = parseInt(
    window.getComputedStyle(javali).getPropertyValue("bottom")
  );
  let pedraLeft = parseInt(
    window.getComputedStyle(pedra).getPropertyValue("left")
  );
  let javaliRight = parseInt(
    window.getComputedStyle(javali).getPropertyValue("right")
  );


  if (pedraLeft <= javaliRight && pedraLeft < 100 && javaliBottom <= 50) 
  {
    document.getElementById("gameOver").style.display = "block";


   window.location.replace("gameOver.html");

    score.innerHTML = `SCORE: ${count}`;
  }
  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

function getRandomTimer(min,max) {
  return Math.random(min,max);
}

/*function startScenario() {

  do{
   let treeTimer= Math.random(5000,10000);

  }while(true)

  if (!javali.classList.contains("jump")) {
    javali.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      javali.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}*/

//arvores 5-10s
//nuvens 5-10s
//passaros 