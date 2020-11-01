//Movement Animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventlistener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) /25;
	let yAxis = (window.innerHeight / 2 - e.pageY) /25;
	card.style.trasnform = `rotateY(${Yaxis}deg) rotateX(${xAxis}deg)`;
} 




