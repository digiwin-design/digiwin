$(function(){
    var $win = $(window);
    var winHeight = $(window).height();
    var $doc = $(document);
    var $htmlBody = $('html, body');
    var rightIconShow = false;
    var adClose = true;
    var adShowOnce = false;//判斷廣告是否已經預設顯示過一次
    var adShowSpeed = 600;

    //載入廣告內容
    var url = location.href;
    var clearHash = url.split('#')[0];
    var href = clearHash.substr(url.lastIndexOf('/') + 1);
    var pageData;

    $.getJSON('adData.json', function(adData){
        //首頁
        if(href == ''){
            href = 'index.htm';
        }
        pageData = adData[href];

        if(pageData){
            $('.adLink').attr('href', pageData.adLink);
            $('.adImg').attr({'src':pageData.adImg, 'alt':pageData.adImgAlt});
            $('.adIcon, .adIconMobile a').text(pageData.adImgAlt);
            $('.adTxt').text(pageData.adTxt);
            $('#adBox .readMore, .adIconMobile a').attr('href', pageData.adLink);
        }else{
            $('#adBox, .adIcon').hide();
        }
    });

    function openAdBox(){
        $('#adBox').stop().animate({right:0, bottom:0}, adShowSpeed);
        adClose = false;
    }

    function closeAdBox(){
        $('#adBox').stop().animate({right:'-300px', bottom:'-500px'}, adShowSpeed);
        adClose = true;
    }
	
    //頁面滾過視窗高度*0.75時，顯示廣告；滾過視窗高度*1.75時，隱藏廣告
    $win.scroll(function(){
        var winTop = $win.scrollTop();
        if(winTop > winHeight*0.75 && winTop <= winHeight*1.75){
            if(adClose && !adShowOnce){
                openAdBox();
            }				
        }else if(winTop > winHeight*1.75 || winTop < winHeight*0.75){
            if(!adClose){
                closeAdBox();
                adShowOnce = true;
            }
        }

        if(winTop > winHeight*0.75){
            if(!rightIconShow){
                $('#rightIcon').stop().fadeIn();
                rightIconShow = true;
            }
        }else{
            $('#rightIcon').stop().fadeOut();
            rightIconShow = false;
        }
    }).scroll();

    //滑過廣告顯示說明
    $('#rightIcon').on('click', '.adIcon', function(){
        openAdBox();
    });

    //回頁首
    $('#rightIcon').on('click','.goTop', function(){
        $htmlBody.animate({scrollTop : 0});
    }
    );

    $('#adBox .closeBox').click(function(){
        closeAdBox();
        adShowOnce = true;
    });
});