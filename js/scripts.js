$(document).ready(function() {
    //BUSINESS LOGIC
    function placeOrder(size, crust, toppings) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = toppings;


    }
    placeOrder.prototype.summary = function() {

        return "pizzasize: " + this.sizeChoice + ", crust:" + this.sizeCrust + ", toppings:" + this.sizeTopping;
    };