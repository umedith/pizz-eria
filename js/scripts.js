$(document).ready(function() {
    //BUSINESS LOGIC
    function placeOrder(size, crust, topping, numberofpizzas) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = topping;
        this.sizeNumberOfPizzas = numberofpizzas;
    }
    placeOrder.prototype.summary = function() {

        return "pizzasize: " + this.sizeChoice + ", crust:" + this.sizeCrust + ", topping:" + this.sizeTopping + ", numberofpizzas:" +this.sizeNumberOFPizzas;
    };

    
    

      //USER INTERFACE
      $("#submit").click(function() {
        var size = $('#size').val();
        var crust = $('#crust').val();
        var numberofpizzas = $("#numberofpizzas").val();
        var topping = [];
        $("input[type=checkbox]:checked").each(function() {
            topping.push($(this).val());
        });
        console.log(topping);

        var newOrder = new placeOrder(size, crust, topping, numberofpizzas);
        console.log(newOrder);
        $('ul#placeorderlist').append("<li>" + newOrder.summary() + "</li>");

        var anotherTopping = 0;
        for (var a = 0; a < topping.length; a++) {
            anotherTopping += parseInt(topping[a]);
        }


        var total = parseInt(size) + parseInt(crust) + parseInt(anotherTopping) + parseInt(numberofpizzas);
        console.log(total);
        $("#total").text(total);
    });

    $('#delivery').click(function() {

        alert("the delivery cost is 2000");
        var a = prompt("enter ur location");
        alert("your order will be delivered to" + " " + a);
    });


});