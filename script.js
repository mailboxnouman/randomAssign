// Question 1
for (var i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// // or


for(var i = 2; i<= 50; i += 2)

console.log(i)

// Question 2

for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// // or

for(var i = 1; i<= 50; i += 2)

console.log(i)


// Question 3


for(var i = 1; i <= 50; i++){
    console.log(i,i % 2 === 0 ? " Even " : " Odd ");
     
}




// Question 4

var line = 20; 

for (var i = 1; i <= line; i++) {
  var numStored = "";
  for (var j = 1; j <= i; j++) {
    numStored += j;
  }
  console.log(numStored); 
}



// Question no. 5

var data = [
    
  {name: "Muhammad Nouman" ,
   age : 23 , 
   class : "web development"},



 { name: "Ali" ,
   age : 22 ,
   class : "web development"},



  {name: "Bilal" ,
   age : 24 ,
   class : "web development"},



 { name: "Zain" ,
   age : 20 ,
   class : "web development"},

  {name: "Muhammad Nouman" ,
   age : 23 , 
   class : "web development"},



 { name: "Ali" ,
   age : 22 ,
   class : "web development"},



  {name: "Bilal" ,
   age : 24 ,
   class : "web development"},



 { name: "Zain" ,
   age : 20 ,
   class : "web development"},



  {name: "Bilal" ,
   age : 24 ,
   class : "web development"},



 { name: "Zain" ,
   age : 20 ,
   class : "web development"}

];

for (var i = 0; i < data.length; i++) {
var student = data[i];
console.log(`Name : ${student.name}, Age: ${student.age}, Class: ${student.class}`)
} 








