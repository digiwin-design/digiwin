// JavaScript Document
$(function(){

	/*典範客戶*/
	var $caseTxt = $('#caseTxt>li'),
		_caseHeight = $caseTxt.height(),
		$caseDes = $('.caseDes'),
		_caseDesHeight = $caseDes.height(),
		_speed = 200;

	$caseTxt.hover(function(){
		var $this = $(this),
			$thisDes = $this.find('.caseDes');
		$thisDes.stop().animate({
			top:_caseHeight - _caseDesHeight
		}, _speed);
	}, function(){
		var $this = $(this),
			$thisDes = $this.find('.caseDes');
		$thisDes.stop().animate({
			top:_caseHeight-33
		}, _speed);

	})

	/*需求與困擾*/
	$('#problemsTxt>li:nth-child(3n)').addClass('end');
	var $problemsTxt = $('#problemsTxt>li'),
		_proHeight = $problemsTxt.height(),
		$proDes = $('.proDes'),
		_proDesHeight = $proDes.innerHeight();

	$problemsTxt.hover(function(){
		var $this = $(this),
			$thisDes = $this.find('.proDes');
		$thisDes.stop().animate({
			top:_proHeight - _proDesHeight
		}, _speed);
	}, function(){
		var $this = $(this),
			$thisDes = $this.find('.proDes');
		$thisDes.stop().animate({
			top:_proHeight
		}, _speed);

	})
	
	// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			input.val('');
			}
		})
	}); 

	// var historyHash = window.location.hash;
	// if(historyHash != ''){
	// 	$htmlBody.stop().animate({
	// 		scrollTop: Math.ceil($(historyHash).offset().top - _navLinkOuterHeight - _buffer)
	// 	}, 400);		
	// }

})
