//find the largest string
var largest = numbers.reduce(function(a,b){
	return a > b ? a : b
})

//find the longest string 
var largest = numbers.reduce(function(a,b){
	return a.length > b.length ? a : b

//find even numbers
var evens numbers.filter(function(value){
	return value % 2 === 0
})

//find odd numbers
find even numbers
var odds numbers.filter(function(value){
	return value % 2 === 1
})

//find words that containis
var words = strings.filter(function(value){
	return (value.indexOf('is') !== -1)
})

//join both arrays together
var arr = numbers.concat(strings)

jsteachers = instructors.filter(function)(value){
	return value.teaches === 'JavaScript'
}


.sort(function)(a,b){
	return 1,0,-1
}.sort(function)(a,b){
	if (a > b)
		return 1
	else if (a >)
}


----------------------------------
//div id = foo
var name = "JR"
foo.innerHTML = `
<h1>Hello ${name}</h1>`

var foo=document.querSelector("#foor")
OR
var foo=document.getElementbyId('foo')

---------

var sum = items.reduce(funciont(a,b){
	return a + b.price
}), 0
var answer1 = documnet.querSelector("#answer1")answer1.HTML = `The sum is ${sum}`