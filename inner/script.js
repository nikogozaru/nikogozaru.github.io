$(document).ready(function(){
  $(".icon").hover(
   function(e){
       $(".info_box").show();
   },
   function(e){
       $(".info_box").hide();
  });
