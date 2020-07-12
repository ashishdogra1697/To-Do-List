//click on lists to remove or line thorugh


//click on x to delete todo
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500, function(){
   $(this).remove();
   });
    event.stopPropagation();
});
// add todo through input
$("input[type='text']").keypress(function(event){
  if(event.which=== 13){
    var todo= $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash '></i></span> " + todo +"</li>");
  }
});
//adding pencil icon to toggle input
$(".fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle();
});