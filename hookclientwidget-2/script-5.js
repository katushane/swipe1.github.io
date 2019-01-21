var chooseDate = document.querySelectorAll('.quick-write-date'); 
var quickWriteTop = document.querySelectorAll('.quick-write-top'); 


let i=1;
quickWriteTop.forEach(function (elem) {
	$(elem).attr("attrVal", i);
	i++;
});

i=1;

chooseDate.forEach(function (elem) {
	$(elem).attr("attr", i);
	i++;
});


let width1 = $('#mast').width();
let height1 = $('#mast').height();
$('.card-top').css('height', height1)
$('.mycontainer').css('height', height1)

$('.mycontainer').css('width', width1)
$('.quick-write-top').css('width', width1)

chooseDate.forEach(function (date) { 

	let val=$(date).attr('attr') 
	let blockQWT;
	let lastElem; 
	let lastVal; 
	let lastBlock; 
	date.addEventListener('click', function(event){ 
		lastElem=$('.gg') 
		lastVal=$(lastElem).attr('attr') 
		lastBlock=$('div[attrVal='+lastVal+']') 
		blockQWT=$('span[attrVal='+val+']');


		if (lastVal!=undefined) {
			if($(this).attr('attr')<$(lastElem).attr('attr')) { 
				$(this).addClass('gg'); 
				$(lastElem).removeClass('gg'); 
				goRight();
				//setTimeout(function() { $(lastBlock).css('display','none') }, 100); 
				// $(lastBlock).css('display','none') 
				// $(blockQWT).animate({width: "show"},600) 

			} 
			if($(this).attr('attr')>$(lastElem).attr('attr')) { 
				$(this).addClass('gg'); 
				$(lastElem).removeClass('gg'); 
				goLeft();
				//setTimeout(function() { $(lastBlock).css('display','none') }, 100); 
				
				// $(lastBlock).css('display','none') 
				// $(blockQWT).animate({width: "show", right:0},600) 

			} 
			if($(this).attr('attr')==$(lastElem).attr('attr')){ 
				date.classList.remove('gg'); 

				$('.mycontainer').animate({height: "hide"},500) 
				//$('.mycontainer').css('display', 'none')
				// $(blockQWT).parents().css( 'display', 'none' );
			} 
		}
		else { 
			date.classList.add('gg'); 
			//$(blockQWT).animate({height: "show"},500) 
			$('.mycontainer').animate({height: "show"},500) 
			//$('.mycontainer').css('display', 'block')
			if ($(this).attr('attr')==1)
			{
				$('.innerLiner').css('margin-left', '0px')
			}
			if ($(this).attr('attr')==2)
			{
				$('.innerLiner').css('margin-left', -width1 - 4)
			}
			if ($(this).attr('attr')==3)
			{
				$('.innerLiner').css('margin-left', -width1*2 - 8)
			}
			// $(blockQWT).parent().siblings('.innerLiner').css({'display': 'block'})
		} 
	}) 
});

function goLeft(){ // inner stuff slides left
	var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin - width1); // extra 2 for border
	$( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
}
function goRight(){ // inner stuff slides right
	var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin + width1); // extra 2 for border
	$( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
}