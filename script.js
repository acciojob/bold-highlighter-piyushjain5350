function highlight() {
    //Write your code here
	const target=document.getElementsByTagName('strong');
	console.log(target)
	
	// const targetArray = Array.from(target); // Convert HTMLCollection to array
	for (let i = 0; i < target.length; i++) {
         target[i].style.color = 'green';
    }
}

const para=document.getElementsByTagName("p")[0];
para.addEventListener("mouseover",highlight);
console.log(para);

function return_normal() {
    //Write your code here
	const target=document.getElementsByTagName("strong");

	for (let i = 0; i < target.length; i++) {
         target[i].style.color = 'black';
    }
	
}
para.addEventListener("mouseout",return_normal);
