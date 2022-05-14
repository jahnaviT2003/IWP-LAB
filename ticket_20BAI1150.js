function calcCost() {
var no_adults = parseInt(document.getElementById("t1").value);
var no_child = parseInt(document.getElementById("t2").value);
const total = ((parseInt(no_adults)*10) + (parseInt(no_child)*5))
document.getElementById("t3").value = total; 
}
