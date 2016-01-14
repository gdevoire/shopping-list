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

$("#grocery-list").on("change", ".done-button",function(e) {
  var groceryItem = $(this).next()
  if( $(this).is(":checked")) {
    groceryItem.addClass("strike")
  }
  else {
    groceryItem.removeClass("strike")
  }

})

$(".remove-button").click(function() {
  $("#grocery-list").find('.done-button:checked').closest('li').remove();
})




})
function addItem(){
  var newItem = $("#add-item").val()
  if (newItem == "") {
    return alert("please enter an item")
    }
  else {
    $('#grocery-list').append('<li> <input type="checkbox" class="done-button"><span>'  + newItem + "</span></li>")
    $("#add-item").val("")
  }

}
