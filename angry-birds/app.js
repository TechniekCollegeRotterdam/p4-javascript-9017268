//Oefening angry-birds

 
 const nameChanged = function(event) { 
       console.log(event); 
   } 

    //. is voor class
    //# is voor id
    //niks is voor html-tags

const bird = document.querySelector(".bird");

let px = 0;

addEventListener("click", function(){
px = px + 50;

bird.style.left = px + "px";


//console.log("geklikt");
})

