// /business logic
function Order(size, toppings){
  this.size = size;
  this.toppings = toppings;

}


$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("input#new-size").val();
    var inputtedTop = $("input#first-top").val();
    var newOrder = new Order(inputtedSize, inputtedTop);
    
    $("ul#your-order").append("<li><span class='order'>" + newOrder.size + "</span></li>");
    $(".order").last().click(function(){
      $("#show-order").show();
      $("#show-order h2").text(newOrder.size);
      $(".new-size").text(newOrder.size);
      $(".first-top").text(newOrder.toppings);

    });
    $("input#new-size").val("");
    $("input#first-top").val("");

  });
});
