var myArray = []

for (let i = 0; i < 21; i++){
  myArray.push(i);
}

console.log(myArray);


function clearArray(){
  let i = myArray.length;
while (myArray.length >= 0){
console.log('countdown ${i}');
i--;
}
}

clearArray();


