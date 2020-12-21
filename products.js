

// for choosing the number of pieces

function numberofpieces(id) {
  document.getElementById('id').innerHTML = add(); }

  var add = (function () {
    var counter=0;
    return function () {counter += 1; return counter;}
  })();
  

// total amount for the total number of pieces of the product

function total(b,a) {
  document.getElementById('b').innerHTML = addition(a); }

  var addition = (function (a) {
    var counter=0;
    return function () {counter += a; return counter;}
  })();
  



// grand total for all the products

var grandtotal = document.querySelectorAll('.total');

values = [];

grandtotal.forEach(function(insert) {

    values.push(insert.value); }

  var sum = values.reduce(addup);

  function addup(total, value, index, array) {
    return total + value; }

  function calculate () {document.getElementById("cart").innerHTML = sum };


  