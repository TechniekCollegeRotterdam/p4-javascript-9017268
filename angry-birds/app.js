//Oefening angry-birds


const nameChanged = function (event) {
       // console.log(event); 
}

//. is voor class
//# is voor id
//niks is voor html-tags

const bird = document.querySelector(".bird");

let px = 0;

addEventListener("click", function () {
       px = px + 50;

       bird.style.left = px + "px";


       //console.log("geklikt");
})








window.addEventListener("keydown", function (event) {
       console.log(event.key);

       if (event.key == "ArrowRight") {
              px = px + 50;

              bird.style.left = px + "px";
              bird.src = "img/b-right.svg";

       }
       
       if (event.key == "ArrowLeft") {
              px = px - 50;

              bird.style.left = px + "px";
              bird.src = "img/b-left.svg";
       }

       if (event.key == "ArrowUp") {
              px = px + 50;

              bird.style.bottom = px + "px";
              bird.src = "img/b-up.svg";
       }

       if (event.key == "ArrowDown") {
              px = px - 50;

              bird.style.bottom = px + "px";
              bird.src = "img/b-down.svg";
       }

})