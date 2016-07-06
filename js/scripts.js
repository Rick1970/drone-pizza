var sizeTotal;
var toppingTotal;

function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.currentOrder = function() {
  return this.size + " " + this.toppings;
};

var inputtedToppings = [];

$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#input1").val();
    var inputtedTopping = $("#input2").val();
    var newOrder = new Pizza(inputtedSize, inputtedTopping);

    $("ul#final").append("<li>" + newOrder.currentOrder() + "</li>");
    $("ul#finalprice").append("<li>" + "$" + newOrder.total() + "</li>");


  });
});
