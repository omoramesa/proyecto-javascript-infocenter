function showUserMenu(){
	if($("#area").data("showing") == undefined || $("#area").data("showing") == null || $("#area").data("showing") == "" || $("#area").data("showing") == false){
		$(".showUserMenu").show();
		$("#area").data("showing", true);	
	} else{
		$(".showUserMenu").hide();
		$("#area").data("showing", false);
	}
}

function showMenu(){
	if($("#lateral-menu").data("showing") == undefined || $("#lateral-menu").data("showing") == null || $("#lateral-menu").data("showing") == "" || $("#lateral-menu").data("showing") == false){
		$(".menu").css("width", '250px');
		$(".userMenu").css("width", '380px');
		$(".userMenu").css("align-content", 'right');
		$("#menuTitle").append("<p id='title' style='color: white; align-content: center; position: relative; padding-top: 15px;'>Menú</p>");
		$("#lateral-menu").data("showing", true);
	} else{
		$(".menu").css("width", '30px');
		$(".userMenu").css("width", '20px');
		$(".userMenu").css("align-content", 'left');
		$("#title").remove();
		$("#lateral-menu").data("showing", false);
	}
}