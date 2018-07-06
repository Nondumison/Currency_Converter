function convertCurrency()

{

let from = document.getElementById("from").value;
let to = document.getElementById("to").value;
let xmlhttp = new XMLHttpRequest();
const url ="https://openexchangerates.org/api/latest.json?app_id=730a54266d924f719c7bafc7ca2952c7";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
{
let result = xmlhttp.responseText;
let jsResult = JSON.parse(result);
let oneUnit = jsResult.rates[to]/jsResult.rates[from];
let amt = document.getElementById("fromAmount").value;
document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
}


}


}
