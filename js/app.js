let game = document.querySelector(".game");
let dinosaur = document.querySelector(".dinosaur");
let cactusdino = document.querySelector(".cactusdino");
let replay = document.querySelector(".replay");
let tras = document.querySelector(".tras");
let container = document.querySelector(".container");

container.addEventListener("click", () => {
  if (dinosaur.classList != "dino-animation") {
    dinosaur.classList.add("dino-animation");
  }
  setTimeout(function () {
    dinosaur.classList.remove("dino-animation");
  }, 500);
});
document.addEventListener("keydown" , (e)=>{
    if ((e.key = " " && dinosaur.classList != "dino-animation")) {
      dinosaur.classList.add("dino-animation");
    }
      setTimeout(function () {
        dinosaur.classList.remove("dino-animation");
      }, 700);
});





let checkDead = setInterval(() => {
  let dinoTop = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("bottom")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactusdino).getPropertyValue("left")
  );
  if (cactusLeft < 30 && cactusLeft > 0 && dinoTop <= 61) {
   dinosaur.style.display = "none";
   cactusdino.style.display = "none";
   tras.style.display = "none";
     replay.style.display = "block";
   



  }
}, 10);

replay.addEventListener("click", () => {
  dinosaur.style.display = "block";
  cactusdino.style.display = "block";
  tras.style.display = "block";
  dinosaur.classList.remove("dino-animation");
  replay.style.display = "none";

});

document.addEventListener("keydown", (e) => {
  if ((e.key === "Enter")) {

      dinosaur.style.display = "block";
      cactusdino.style.display = "block";
      tras.style.display = "block";
      dinosaur.classList.remove("dino-animation");
      replay.style.display = "none";
  }
  
});



