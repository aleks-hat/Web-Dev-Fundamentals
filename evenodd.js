//Basic JavaScript example for printing all odd or even numbers in a loop

//print even
for(let i=0; i<=20; i+=2) {
  console.log(i);
} 

//print odd
for(let i=0; i<=20; i++) {
    if (i&2 != 0){
        console.log(i);
    }
} 
