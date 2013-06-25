// Program is now a function!
function fizzbuzz(){
for (var i = 0, j = ''; i < 100; i++){
    if (i % 3 == 0){
       j += "Fizz"}
    if (i % 5 == 0){
       j += "Buzz"}
    if (j == ""){
        j = i}
    console.log(j)
    j = '';
}
}

