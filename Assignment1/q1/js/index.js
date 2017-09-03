function addField(n) {
	 var tr=n.parentNode.parentNode.cloneNode(true);
     document.getElementById('table1').appendChild(tr);
}
	
function removeField(n) {
		var tr2=n.parentNode.parentNode.rowIndex;
		document.getElementById('table1').deleteRow(tr2);
}

function fetchButton(n) {
	var data=n.parentNode.parentNode.children;
	var x=data[0].childNodes[0].value;
	var y=data[1].childNodes[0].value;
	window.alert("Name: " + x + "   Number: " + y);

}