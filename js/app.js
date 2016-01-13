$(document).ready(function() {
console.log("hello")

$(".add-button").click(function(){
  addItem()
})

$("#add-item").keydown(function(e) {
  var code = e.which;
  if(code==13) {
    addItem()
  }
})

$(".remove-button").click(function() {
  $('li').remove();
})











})
function addItem(){
  var newItem = $("#add-item").val()
  if (newItem == "") {
    return alert("please enter an item")
    }
  else {
    $('#grocery-list').append('<li>' + newItem + '<button class="remove-button">Remove Item</button></li>')
    $("#add-item").val("")
  }

}
