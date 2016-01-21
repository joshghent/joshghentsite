$(document).ready(function(){
	$(".button-collapse").sideNav();
    
    var year_obj = new Date();
    var current_year = year_obj.getFullYear();
    var copyright_symbol = '\u00A9'
    
    $("#copyright_year").text(copyright_symbol + ' Josh Ghent ' + current_year);
});
