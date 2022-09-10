//countdown time
var countDownDate = new Date("September 9, 2022 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "AKAN SEGERA HADIR SELANJUTNYA";
  }
}, 1000);

// Get Button
var mybutton = document.getElementById("myBtn");

// When User Scroll down from top of document, show Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When user clicks on Button, scroll to the top of document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome ,IE
}

// loader animation page
// set delay loader 1s
var delay = 900;

function loader(){
	setTimeout(function(){
		$("#loading").hide();
		$(".loading").hide();
	},delay);
};

// Script For AOS animation	
  AOS.init();

// version website
var versionWebsite = "V.4.5.0";
  // console.log("Web Version " + versionWebsite);