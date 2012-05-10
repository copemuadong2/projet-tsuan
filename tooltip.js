/**
 * A jQuery plugin tooltip.
 * Author: TRINH Thi Thanh Xuan
 * Version: 1.8
 */
(function($){

	//attache la fonction tooltip à jQuery
	$.fn.tooltip= function(options){
		console.log("a");
		$('a[rel=tool]').mouseover(function(e) {

			//var data = $('#tooltip').load('jquerytooltip_page2.html');
			//console.log(data);
			var tool = document.createElement('div');
			var id='tool'+Math.floor(Math.random()*1000);
			$(this).data('numid',id);
			$(tool).addClass("tipBody").attr('id',id);

			
			$(this).append(tool);
			
			$(tool).css({'top':'40px','left':'70px'}).fadeIn('slow');
			$(tool).load('jquerytooltip_page2.html p');
			
		}).mouseout(function() {
		
			var id = $(this).data('numid');
			console.log(id);
			$("#"+id).remove();
				
		});
		
	};

})(jQuery);
