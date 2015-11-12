// Determine if string
var string = prompt("Enter a string?");

console.log (string);

if (typeof string === "string" ) {
  alert("I'm a string");
};

// Determine if smaller

function determine() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  input1 = parseFloat(input1);
  input2 = parseFloat(input2);

  console.log (input1);
  console.log (input2);

 if (input1 < input2) {
  alert("input 1 is smaller")
} else {
  alert("input 2 is smaller")
}
};

//Concatenates n strings

