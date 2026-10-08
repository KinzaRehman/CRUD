/*The different datatypes (primitive and non-primitive) and how to use them*/ 


/* two objects that look the same but not equal in js */ 
let object1 = { 
    name: "kinza"
}

let object2 = { 
    name: "kinza"
}
console.log(object1 === object2); 
//this prints false because in memory theyre in different places , not comparing actual content within the object 


/*What is a higher-order function? */ 


//a higher order function takes the function as an argument or its returning the function within a fucntion
forEach(element => {
    
});















/*How does map() work, and what is its purpose? */ 

console.log([1,2,3].map(num => num *10))


/* How does filter() & reduce() work? */ 

let new_array = [1, 2, 3, 4]; 

let filter_practice = new_array.filter(num => {
    if ( num % 2 === 0)  {
        return true;
    }
})

console.log(filter_practice)

