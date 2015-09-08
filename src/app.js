var homePageContent = "";
var blogPageContent = "";
var aboutMePageContent = "";
var myWorkPageContent = "";

function hashHandler(){
  if(location.hash == "#blog"){
    $("#pageContent").html(blogPageContent);
  } else if(location.hash == "#aboutMe") {
    $("#pageContent").html(aboutMePageContent);
  } else if(location.hash == "#myWork") {
    $("#pageContent").html(myWorkPageContent);
  } else if(location.hash == "") {
    $("#pageContent").html(homePageContent);
  } 
}
$(document).ready(function(){
  $(document).foundation();
  homePageContent = $("#pageContent").html();
  $.ajax({url:"blog.html",cache:false}).done(function(html){
    blogPageContent=html;
    $.ajax({url:"aboutMe.html",cache:false}).done(function(html){
      aboutMePageContent=html;
      $.ajax({url:"myWork.html",cache:false}).done(function(html){
        myWorkPageContent=html;
        $(window).bind("hashchange",hashHandler);
        hashHandler();
      });
    });
  });
});
