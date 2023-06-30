function highlight() {
    //Write your code here
	const target=document.getElementsByTagName("strong");
	
	const targetArray = Array.from(target); // Convert HTMLCollection to array
    
    targetArray.forEach((element) => {
        element.classList.add("color-change")
    });

}

const para=document.getElementByTagName("p")[0];
para.addEventListener("hover",highlight());

function return_normal() {
    //Write your code here
	const target=document.getElementsByTagName("strong");
	
	const targetArray = Array.from(target); 
    
    targetArray.forEach((element) => {
        element.classList.remove("color-change")
    });
  
}
