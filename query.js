//Keep nav bar in view at the top of the window scroll edge
$(document).ready( function() {

    $(window).scroll( function() {
        if ($(window).scrollTop() > $('#header').offset().top)
            $('.navImage').addClass('floating');
        else
            $('.navImage').removeClass('floating');
    } );

} );

//Allow user-interaction of slide switching
$('#introTab').on({
    'click': function() {
         var src = ($('#slide').attr('src') === 'lightForest.jpg')
            ? 'flyingBird.jpg'
            : 'taiChi.jpg';
         $("#slide").attr('src', src);
    }
});

/* $(function(){
	$("#introTab").click(function() {
		if ($(this).is("[src=lightForest.jpg]")) {
			$("#slide").attr("src", "flyingBird.jpg");
		} else if ($(this).is("[src=flyingBird.jpg]")) {
			$("#slide").attr("src", "starfish.jpg");
		} else {
			$("#slide").attr("src", "lightForest.jpg")
		};
	});
});
*/


//Switch jpg slide in the introBox
var count = 1;

function transition() {

	if (count === 1) {
		$("#slide").attr("src", "flyingBird.jpg");
		count = 2;
	} else if (count === 2) {
		$("#slide").attr("src", "taiChi.jpg");
		count = 3;
	} else if (count === 3) {
		$("#slide").attr("src", "lightForest.jpg")
		count = 1;
	}
}
setInterval(transition, 5000);
