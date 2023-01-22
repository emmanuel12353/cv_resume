$(document).ready(function() {
$('.toggle-button').click(function() {
$('.navbar-links').toggle();
$("html, body").toggleClass("body-overflow");
});
if(window > 600) {
 $('.navbar').show();
 }
});
