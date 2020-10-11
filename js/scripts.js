
var deliveryaddress;
function insert(myForm){

	var a = prompt("Please enter your delivery address", "Your address here");
	document.getElementById('address').value = a; 
	deliveryaddress=a;
}

function total(myForm){
	var total = 0;
    var topping = 300;
    var crust = 500;
    var count= 0;
    var countcrust=0;

	if(document.getElementById('small').checked){

		total+= 1000;
	}
	if(document.getElementById('medium').checked){

		total+= 2500;
	}
	if(document.getElementById('large').checked){

		total+= 4000;
	}
	if(document.getElementById('topping0').checked){
		count++;
	}
	if(document.getElementById('topping1').checked){
		count++;
	}
	if(document.getElementById('topping2').checked){
		count++;
    }
    if(document.getElementById('topping3').checked){
		count++;
    }
    if(document.getElementById('crust0').checked){
        countcrust++;
    }
    if(document.getElementById('crust1').checked){
        countcrust++;
    }
    if(document.getElementById('crust2').checked){
        countcrust++;
    }
	
	

    totaltops= count * topping;
    totalcrust= countcrust * crust;
    totalPrice= totaltops + totalcrust +total;
	ordering=2000;
	
	num=document.getElementById("number").value;
	var aN= parseInt(num);

	var sumtotalPrice = totalPrice*aN;

	if(document.getElementById('delivery').checked){
		sumtotalPrice+= ordering;
	}
	
	if(document.getElementById('delivery').checked){
		alert('Your Total will be '+ sumtotalPrice+ 'rwf  delivered to '+ deliveryaddress);
	}else{
		alert('Your Total will be '+ sumtotalPrice+ ' rwf and will be ready for pickup in 30 minutes');
	}
}

function blank(myForm){
	document.getElementById('pickup').checked=true;
	document.getElementById('small').checked=true;
	document.getElementById('address').value="";
	for(var a=0; a<13; a++){
		var topname = "topping" + a;
		document.getElementById(topname).checked=false;
	}

}

insert(myForm);
total(myForm);
blank(myForm);

