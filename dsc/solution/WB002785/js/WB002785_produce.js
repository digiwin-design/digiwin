$(function(){
	// PICS痛點、解決方案轉換
	var $win = $(window);
	var $htmlBody = $('html, body');
	var navHeight = $('#navLink').outerHeight(true);
	$('.btnGroup .btn').click(function(){
		var now = $(this).index();
		var move = now * 1000 * -1;
		var nowParentsTop = $(this).parents('.picsDetail').offset().top - navHeight;
		$(this).parent().siblings('.picsContent').stop().animate({ left: move }, function(){
			$htmlBody.stop().animate({scrollTop : nowParentsTop });
		});
		$(this).addClass('now').siblings().removeClass('now');	
	});

	//階段選單
	var winHeight = $win.height();
	var docHeight = $(document).height();
	var diff = docHeight - winHeight;
	var	$rightList = $('#rightList');
	var	$rightListA = $('#rightList li').children('a');
	var	_rightListArray = [];
	var	_buffer = 25;
			
	$.each($rightListA, function(i){
		var $a = $rightListA.eq(i);
		var	_href = $a.prop('hash');
		var	$tmp = $(_href);
		var	_tmpOffsetTop = Math.ceil($tmp.offset().top);
		var	_tmpHeight = $tmp.outerHeight(true);
		
		_rightListArray[i] = {
			rightListA : $a,
			top : _tmpOffsetTop,
			bottom : _tmpOffsetTop + _tmpHeight
		};		
	})

	/*判斷是否從其他頁的錨點連結過來的*/
	var nowHash = window.location.href.split('#')[1];
	var hashIndex;
	if(nowHash){
		switch (nowHash) {
			case 'Block01':
				hashIndex = 0;
				break;
			case 'Block02':
				hashIndex = 1;
				break;
			case 'Block03':
				hashIndex = 2;
				break;
			case 'Block04':
				hashIndex = 3;
				break;
		}
		$htmlBody.stop().animate({
			scrollTop: Math.ceil(_rightListArray[hashIndex].top - navHeight)
		}, 400);
	}

	// var isClick = false;
	$('#rightList li, #picsTop li').click(function(){
		var _thisNum = $(this).index();
		$htmlBody.stop().animate({
			scrollTop: Math.ceil(_rightListArray[_thisNum].top - navHeight)
		}, 400);
 		return false;	
	})	

	$win.scroll(function(){
		var scrollTop = $win.scrollTop();
		if(scrollTop >= _rightListArray[0].top - navHeight){
			$('#rightList').fadeIn();
			scrollTop = scrollTop + navHeight;
			for(var i = 0; i < _rightListArray.length; i++){
				var rightListArray = _rightListArray[i];
				if(scrollTop >= rightListArray.top - navHeight*3 && scrollTop < rightListArray.bottom - navHeight*3){
					$('#rightList li').removeClass('selected');
					rightListArray.rightListA.parent().addClass('selected');
					return false;
				}else{
					$('#rightList li').removeClass('selected');
				}
			}
		}else{
			$('#rightList').fadeOut();
		}
	}).scroll();
})
