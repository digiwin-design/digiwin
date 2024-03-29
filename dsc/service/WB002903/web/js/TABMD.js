let N = 1, ulHeight, boxHeight;

for (var i = 1; i <= 6; i++) {
    document.getElementById('TAB' + i).onmouseover = showIT; //選擇ID=TAB+數字  摸到變成showIT
}
document.getElementById('TAB1').className = 'NOWTAB'; //先設定TAB1的CSS > NOWTAB

function showIT() {
    //執行showIT

    for (var i = 1; i <= 6; i++) {
        document.getElementById('BOX' + i).style.display = 'none'; //先將BOX都先收起來
        document.getElementById('TAB' + i).className = ''; //消除套用的不然不會變回來
    }

    N = this.id.substr(3); //宣告N=第四個數字.程式是由0開始算 0. 1 . 2 .3
	
	document.getElementById('BOX' + N).style.display = 'block'; //選中的會出現
	
    setHeight();

    this.className = 'NOWTAB'; //CSS > NOWTAB
}

function setHeight() {
	ulHeight = $('#tabMenu').outerHeight(true);
    boxHeight = $('#BOX' + N).outerHeight(true);

    $('.TABMD')
        .stop(true)
        .animate({ height: boxHeight + ulHeight });
}

$(window).on('resize', function() {
    setHeight();
});
