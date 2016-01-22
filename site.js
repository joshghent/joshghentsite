$(document).ready(function(){
	$(".button-collapse").sideNav({
        closeOnClick: true
    });
    
    var year_obj = new Date();
    var current_year = year_obj.getFullYear();
    var copyright_symbol = '\u00A9'
    
    // This will add a copyright notice to the bottom of the site in the footer. We get the current year by using the native getFullYear() method 
    // SAMPLE OUTPUT: C Josh Ghent 2016
    $("#copyright_year").text(copyright_symbol + ' Josh Ghent ' + current_year);
    
    // Animate Skills progress bars
    $('#skill_javascript').animate({width: '60%'}, 250);
    $('#skill_html').animate({width: '70%'}, 250);
    $('#skill_css').animate({width: '45%'}, 250);
    $('#skill_sql').animate({width: '30%'}, 250);
});