$(function(){
    $win = $(window);
    var htmlbody = $('html,body');
    var navHeight = $('.navLink').outerHeight(true);
    var numArr = []; // 定义一个空数组
    var txt = $('.secSect1'); 
    for (var i = 0; i < txt.length; i++) {
        numArr.push(parseInt(txt.eq(i).offset().top)); 
    }
    $('#rightList li, #firBanner ul li').click(function(){
        var _thisNum = $(this).index();
        $(this).addClass('selelinked').siblings().removeClass('selelinked');
        htmlbody.stop().animate({
            scrollTop: numArr[_thisNum] - navHeight
        }, 600);
            return false;   
        })  

    
    $win.scroll(function(){
        var rightLi = $('#rightList li');               
        var scrollTop = $win.scrollTop();
        if(scrollTop >= numArr[0] - navHeight){
            $('#rightList').fadeIn();
            scrollTop = scrollTop + navHeight;
            
            for(var i = 0; i < rightLi.length; i++){
                // var rightListArray =rightLi[i];
                if(scrollTop >= numArr[i]- navHeight && scrollTop < numArr[i+1]- navHeight){

                    $('#rightList li').removeClass('selelinked')
                    
                    $('#rightList li').eq(i).addClass('selelinked');
                
                    return false;
                } else if(scrollTop >= numArr[rightLi.length-1]- navHeight){
                    $('#rightList li').removeClass('selelinked');                   
                    $('#rightList li').eq(i).addClass('selelinked');
                }
            }
        }else{
            $('#rightList').fadeOut();
        }
    }).scroll();
})