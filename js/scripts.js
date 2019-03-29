// self invoking function // invisible in browser
(function(){
  var button = document.querySelector("#getNumbers"),
      output = document.querySelector("#showNumbers");

      function getRandom(min, max){
        return Math.round(Math.random() * (max - min) + min);
      }

      function showRandom() {
        var numbers = [],
        random,
        i;

        for(i = 0; i < 6; i++) {
          random = getRandom(1, 49);

          while(numbers.indexOf(random) !== -1){
            random = getRandom(1, 49);
          }
            numbers.push(random);

        }
        numbers.sort(function(a,b){return a -b});
        output.value = numbers.join(", ");
        console.log(numbers);
      }
    button.onclick = showRandom;
})();













/*
var button = document.querySelector("#getNumbers"),
      output = document.querySelector("#showNumbers");

      function getRandom(min, max){
        return Math.round(Math.random() * (max - min) + min);

      }

      function showRandom() {
        var numbers = [];
        var random;
        var i;

        for(i = 0; i <6; i++){
          random = getRandom(1, 100);

          while(numbers.indexOf(random) !== -1){
            random = getRandom(1, 100);

          }
          numbers.push(random);
        }
        output.value = numbers.join(" x ");
          console.log(numbers);

      }


      button.onclick = showRandom;
*/















/*



  var button = document.querySelector("#getNumbers"),
      output = document.querySelector("#showNumbers");


// random number in range of min max

function getRandom(min, max){

  return Math.round(Math.random() * (max - min) + min);

}

function showRandom(){
  var numbers = [],
      random,
      i;

      for(i = 0; i <6; i++){
          random = getRandom(1, 49);
          //console.log([i +1] + ". " + random);
          numbers.push(random);
    }
    console.log(numbers);
}

button.onclick = showRandom;





function showRandom(){
  var numbers = [],
      random;

      for (var i = 0; i < 6; i++) {
        random = getRandom(1, 49);
        console.log("number: " + [ i + 1] + " is " + random);

      }
console.log("-------------");
}

button.onclick = showRandom;

*/
