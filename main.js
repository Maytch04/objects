//number 1
var sum = items.reduce(function(a,b){
	return a + b.price
},0)
var answer1 = document.querySelector("#answer1").innerHTML = `The sum is ${sum}`

//number 2
function ans2(){
	var content = "";
	var costRange = items.filter(function(value){
		return (value.price >=14 && value.price <=18)
	}).forEach(function(item){
		content+=`<li>${item.price}</li>`;
		document.querySelector("#answer2").innerHTML = content
	});
	
}ans2()

//number3

function ans3(){
	var content = "";
	var gbp = items.filter(function(value){
		return(value.currency_code === "GBP")
	}).forEach(function(item){
		content+=`<li>${item.title} costs &pound;${item.price}</li>`
	});
	document.querySelector("#answer3").innerHTML = content
}
ans3()

//number 4
function ans4(){
	var content = ""; 
	var isWood = items.filter(function(value){
		return value.materials.includes('wood')
	}).forEach(function(item){
		content+=`<li>${item.title} QUANTITY: ${item.quantity} MATERIALS: ${items.materials} </li>`
	})
	document.querySelector("#answer4").innerHTML = content
}
ans4()

//number 5
function ans5(){
	var content = ""; 
	var eightOrMore = items.filter(function(value){
		return(value.materials.length > 8)
	}).map(function(item){
		content +=`<li>${item.title}</li>`
	})
	document.querySelector("#answer5").innerHTML = content
}
ans5()

//number 6
function ans6(){
	var content = ""; 
	var whoMade = items.filter(function(value){
		return(value.who_made.includes('i_did'))
	}).length;

	document.querySelector('#answer6').innerHTML = whoMade;
}
ans6()