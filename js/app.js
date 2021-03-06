//Movement Animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const photo = document.querySelector(".photo");
const socialmedia = document.querySelector(".socialmedia");

// interest
const interest = document.querySelector(".interest");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener("mouseenter", (e) => {
	card.style.transition = "all 0.5s ease";
	//Popout
	title.style.transform = "translateZ(150px)";
	socialmedia.style.transform  = "translateZ(150px)";
	photo.style.transform = "translateZ(100px)";
	description.style.transform = "translateZ(125px)";
	interest.style.transform = "translateZ(150px)"
  });

  container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//Popback
	title.style.transform = "translateZ(0px)";
	socialmedia.style.transform  = "translateZ(0px)";
	photo.style.transform = "translateZ(1px)";
	description.style.transform = "translateZ(0px)";
	interest.style.transform = "translateZ(0px)";	
  });

