function convertCurrency()

{

var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var xmlhttp = new XMLHttpRequest();
var url ="https://openexchangerates.org/api/latest.json?app_id=730a54266d924f719c7bafc7ca2952c7";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
{
var result = xmlhttp.responseText;
var jsResult = JSON.parse(result);
var oneUnit = jsResult.rates[to]/jsResult.rates[from];
var amt = document.getElementById("fromAmount").value;
document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
}


}
}
