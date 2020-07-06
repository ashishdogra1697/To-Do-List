//click on lists to remove or line thorugh
$("li").click(function(){
   $(this).toggleClass("complete");
});

//click on x to delete todo
$("span").click(function(event){
   $(this).parent().fadeOut(500, function(){
   $(this).remove();
   });
    event.stopPropagation();
});