if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
	
  // true for mobile device
	var heading = $("#heading");
	heading.addClass("invisible");
	var padder = $(".padder");
	var size = padder.css("margin-top");
	size = size.slice(0,-2);
	console.log(size);
	$(".padder").attr("style", "margin-top: "+size*0.75+"px !important");
	// $('#elem').attr('style', 'width: 100px !important');
	console.log(padder.css("margin-top"));

	$("#gallery").css("font-size","2em");
}
else{
	var heading = $("#heading");
 	heading.removeClass("invisible");
}


//Check to see if the window is top if not then display button
 $(window).scroll(function(){

  // Show button after 100px
  var showAfter = 100;
  if ( $(this).scrollTop() > showAfter ) { 
   $('.back-to-top').fadeIn();
  } else { 
   $('.back-to-top').fadeOut();
  }
 });
 
 //Click event to scroll to top
 $('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0});
  return false;
 });