function button() {
	if (($("#username").val() != null && $("#username").val() != "" ) && ($("#password").val() != null && $("#password").val() != "")) {
		$(".loginBtn").css("background-color", "#2541B2");
		$(".loginBtn").css("color", "#FFFFFF");
		$(".loginBtn").hover(function(){
			$(this).css("background-color", "#FFFFFF");
			$(this).css("color", "#2541B2");
		}, function() {
			$(this).css("background-color", "#2541B2");
			$(this).css("color", "#FFFFFF");
		});
	}
}

function login(){
		
}