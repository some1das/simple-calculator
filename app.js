
function dis(val){
	
	document.getElementById("display").value+=val;
	
}
function result()
{
	var x=document.getElementById("display").value;
	var y=eval(x);
	document.getElementById("display").value=y;
}
function clr()
{
	document.getElementById("display").value="";
}
