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



$(".done-button").click(function() {
  $(this).parent().wrap("<strike>") ;
});

$('ul').on('click', 'li', function(event){
  $(this).wrap("<strike>");
});




})
function addItem(){
  var newItem = $("#add-item").val()
  if (newItem == "") {
    return alert("please enter an item")
    }
  else {
    $('#grocery-list').append('<li>' + newItem + '<button class="done-button">Done</button></li>')
    $("#add-item").val("")
  }

}
