<template>
    <div>
        <div id="contact" class="section">
            <div class="container">
                <p class="title">各行各業、不同企業規模皆有成功案例及解決方案，歡迎免費諮詢索取</p>
                <p class="sectionDesc-center">
                    需要立即的支援與服務請直撥免付費專線
                    <a href="tel:0800009890">0800-009-890</a>
                </p>
                <div id="form">
                    <form>
                        <a id="fromSource" href="javascript:;" v-text="source"></a>
                        <div class="inforCheck">
                            <label for="demand01">
                                <input
                                    name="contact-demand"
                                    class="contact-demand"
                                    id="demand01"
                                    type="checkbox"
                                    value="索取解決方案相關資料。"
                                /> 索取解決方案相關資料。
                            </label>
                            <div class="outline">若您有其他建議或想法，歡迎與我們分享：</div>
                            <div class="consult-cont">
                                <p class="inputTitle"></p>
                                <textarea id="contact-query" cols="40" rows="4" maxlength="500"></textarea>
                                <p class="wordNum">
                                    可輸入
                                    <span class="remaining">500</span> 字
                                </p>
                            </div>
                        </div>

                        <div class="basciInfo">
                            <div class="outline">
                                <input
                                    type="text"
                                    name="contact-company"
                                    id="contact-company"
                                    class="contact"
                                />
                                <p class="inputTitle">
                                    公司名稱
                                    <span class="fillHint">(請填寫完整公司名稱)</span>
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="outline">
                                <input
                                    type="text"
                                    name="contact_person"
                                    id="contact_person"
                                    class="contact required"
                                />
                                <p class="inputTitle">
                                    <span class="requiredHint">*</span>聯絡人
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="outline">
                                <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    class="contact required"
                                />
                                <p class="inputTitle">
                                    <span class="requiredHint">*</span>聯絡電話
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="outline">
                                <input
                                    type="text"
                                    name="contact-email"
                                    id="contact-email"
                                    class="contact required"
                                />
                                <p class="inputTitle">
                                    <span class="requiredHint">*</span>E-mail
                                    <span class="fillHint">(例：example@digiwin.com)</span>
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="outline">
                                <input
                                    type="text"
                                    name="contact-dept"
                                    id="contact-dept"
                                    class="contact"
                                />
                                <p class="inputTitle">
                                    部門
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="outline">
                                <input
                                    type="text"
                                    name="contact-job"
                                    id="contact-job"
                                    class="contact"
                                />
                                <p class="inputTitle">
                                    職稱
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="verifica clearfix">
                                <div class="outline">
                                    <input type="text" name id="identCode" class="identCode" />
                                    <p class="inputTitle">
                                        <span class="requiredHint">*</span>請輸入驗證碼
                                    </p>
                                </div>
                                <input type="button" id="vericodePic" />
                                <span class="renovCode"></span>
                                <span id="codeSuces"></span>
                            </div>
                        </div>
                        <div class="btnBlock">
                            <input type="button" id="submit" value="提交資料" />
                            <div class="agreeLabel">
                                <label for="agree">
                                    <input type="checkbox" name="agree" value id="agree" checked /> 我同意接受鼎新電腦
                                    <a
                                        class="links"
                                        href="http://tw.digiwin.biz/legal.html"
                                        target="_blank"
                                    >隱私權聲明</a>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- loading -->
        <div id="loading">
            <p>
                <i></i>資料提交中，請稍後
            </p>
        </div>

        <!-- thx page -->
        <div id="thx">
            <div id="thxContent">
                <div class="close">X</div>
                <p class="title">資料己送出</p>
                <p class="thxparg"></p>
                <p class="suprtCall">
                    <span>如需要立即的支援與服務，</span>
                    <span>請直撥免付費專線 0800-888-162，謝謝！</span>
                </p>
                <p class="thxSourLoad1">
                    <a id="SourLoadLink" href target="_blank">資料下載</a>
                </p>
                <p id="goIndex">
                    <a href="javascript:;">繼續瀏覽網站</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/vendor/xcConfirm';
import '@/assets/vendor/xcConfirm.css';
export default {
    props: {
        source: {
            type: String
        }
    },
    methods: {
        init() {
            /**
             * FORM
             */
            var code;
            var codeSuces = document.getElementById('codeSuces');
            var statu_k = -1;
            //产生验证码 
            window.addEventListener('load', createCode);
            function createCode() {
                codeSuces.innerHTML = '';
                statu_k = -1;
                code = '';
                document.getElementById('identCode').value = '';
                var codeLength = 4;
                var checkCode = document.getElementById('vericodePic');
                var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
                for (var i = 0; i < codeLength; i++) {
                    var index = Math.floor(Math.random() * 36);
                    code += random[index];
                }
                checkCode.value = code;
            }

            //校验验证码  
            function validate() {
                var inputCode = document.getElementById('identCode').value.toUpperCase();
                if (inputCode.length <= 0) {
                    codeSuces.innerHTML = '請輸入驗證碼';
                    // codeSuces.style.color = "#FF3E4B";
                    statu_k = 0;

                }
                else if (inputCode != code) {
                    createCode();
                    document.getElementById('identCode').value = '';
                    codeSuces.innerHTML = '驗證碼輸入錯誤，請重新輸入。';
                    // codeSuces.style.color = "#FF3E4B";
                    statu_k = 0;

                }
                else {

                    // codeSuces.innerHTML = "验证成功！";
                    //  codeSuces.style.color = "#43A7C9";
                    statu_k = 1;
                }
            }

            $(document).ready(function () {
                var chenkInfo = [];
                var chenk = new Array();
                var chenkStr = '';
                var timeAjaID;
                var s = [];
                var str = '';

                function validateEmail($email) {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailReg.test($email);
                }


                // 勾选其他复选框填写内容
                function otherSta() {
                    var othChec = $('#othChecCont,.othChecCont');
                    othChec.click(function () {
                        if (othChec.is(':checked')) {
                            $('#contact-other').removeAttr('disabled');
                        } else {
                            $('#contact-other').attr('disabled', true);
                            $('#contact-other').val('');
                        }
                    });
                }
                otherSta();
                //跨国工厂选择
                function hasCountCho() {
                    $('.hascoLa').click(function () {
                        $('.transnat').show();
                        s = [];
                        $('.choNySpan').empty();
                    });
                    CountCho();
                }
                hasCountCho();
                function noCount() {
                    $('.nocoLa').click(function () {
                        $('.listCheck input').removeAttr('checked');
                        s = [];
                        str = '';
                        $('.choNySpan').empty();
                    });
                }
                noCount();
                //获取跨国国家
                function CountCho() {
                    $('.toSerBtn').bind('click', function () {
                        var choCo = $('.listCheck input');
                        for (var i = 0; i < choCo.length; i++) {
                            (function (arg) {
                                if (choCo.get(i).checked) {
                                    s.push(choCo[i].value);
                                }
                            })(i);
                        }
                        if (s.length == 0) {
                            alert('請勾選跨國工廠營運所在地，若無符合地區請勾選「其他」；若無跨國工廠營運請點擊「X」。');
                            s = [];
                            str = '';
                            $('.choNySpan').empty();
                        } else {
                            $('.transnat').hide();
                            str = s.join(',');
                            $('.choNySpan').append('已選擇:' + '<span>' + str + '</span>');
                        }

                    });
                    $('.closeChose').bind('click', function () {
                        s = [];
                        str = '';
                        $('.choNySpan').empty();
                        $('.transnat').hide();
                        $('.choNy input').removeAttr('checked');
                    });
                }

                // 关闭感谢页
                $('.close,#goIndex').on('click', function () {
                    $('#thx').fadeOut();
                    createCode();
                });

                // 依據目前網址取得文宣編號
                function getSource() {
                    var result = /WB\d{6}/.exec(location.pathname);
                    if (result) {
                        return result[0];
                    }
                    else {
                        return document.querySelector('#fromSource').innerText;
                    }
                }

                function addAjax() {
                    var thisName = getSource();
                    var thisURL = decodeURI(window.location.href);
                    var thisGaURL = decodeURI(window.location.pathname);
                    var thisLoadLink = decodeURI($('#SourLoadLink').attr('href'));
                    var thisTitle = document.title;
                    var comCont = $('#contact-company').val() || '';
                    var teleCont = $('#telephone').val() || '';
                    var exteCont = $('#extension').val() || '';
                    var addrCont = $('#address').val() || '';
                    var contactPer = $('#contact_person').val() || '';
                    var emailCont = $('#contact-email').val() || '';
                    var mobileCont = $('#contact-mobile').val() || '';
                    var departCont = $('#contact-dept').val() || '';
                    var jobTitCont = $('#contact-job').val() || '';
                    var queryCont = $('#contact-query').length && $('#contact-query').val().replace(/"/g, '\'') || '';
                    var otherCont = $('#contact-other').val() || '';

                    var tJSON = '{"doc_no": "' + thisName + '",' +
                        '"source": "' + thisTitle + '" ,' +
                        '"page_dir": "' + thisURL + '" ,' +
                        '"company": "' + comCont + '",' +
                        '"telephone": "' + teleCont + '",' +
                        '"extension": "' + exteCont + '",' +
                        '"address": "' + addrCont + '",' +
                        '"contact_person": "' + contactPer + '",' +
                        '"email": "' + emailCont + '",' +
                        '"mobile": "' + mobileCont + '",' +
                        '"department": "' + departCont + '",' +
                        '"job_title": "' + jobTitCont + '",' +
                        '"req_sys": "' + chenkStr + '",' +
                        '"dm_ask": "' + chenkInfo[0] + '",' +
                        '"get_file": "' + thisLoadLink + '" ,' +
                        '"query": "' + queryCont + '",' +
                        '"other": "' + otherCont + '",' +
                        '"country": "' + str + '"}';
                    // console.log(tJSON);
                    $.support.cors = true;
                    $.ajax({
                        type: 'POST',
                        // crossDomain: true,
                        // contentType: "application/json; charset=utf-8",
                        url: 'https://misws.digiwin.com/WebPageData/Service.asmx/SaveData',
                        dataType: 'json',
                        data: { data: tJSON },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.error(textStatus);
                        },
                        success: function (data) {

                            console.log(data.msg);
                            console.log(data.farm);
                            // 根据是否勾选索取资料、公私田以及下载资料链接，显示感谢页内容
                            if (chenkInfo[0] == 'N' || chenkInfo[0] == 'undefined' || chenkInfo[0] == '') {
                                $('.thxparg').html('');
                                $('.thxparg').html('我們會盡快處理您的e化需求');
                                $('.thxSourLoad1').hide();
                                $('#goIndex').removeClass('thxSourLoad2');
                            } else {
                                var SourLoadLink = $('#SourLoadLink').attr('href');
                                if (SourLoadLink == '' || data.farm == 'N') {
                                    $('.thxparg').html('');
                                    $('.thxparg').html('您所索取的資料，<br />將在3個工作天內寄發至您指定的 Email');
                                    $('.thxSourLoad1').hide();
                                    $('#goIndex').removeClass('thxSourLoad2');
                                } else if (data.farm == 'Y' && SourLoadLink != '') {
                                    $('.thxparg').html('');
                                    $('.thxparg').html('我們會盡快處理您的 e化需求');
                                    $('.thxSourLoad1').show();
                                    $('#goIndex').addClass('thxSourLoad2');
                                }
                            }
                            $('#loading').fadeOut();
                            $('#thx').fadeIn();
                            chenk = [];
                            chenkStr = '';
                            chenkInfo = [];
                            // reset();
                            dataLayer.push({
                                'event': 'FormSubmission',
                                'formTitle': thisTitle,
                                'formURL': thisGaURL
                            });
                            createCode();
                        }
                    });
                }

                $('#submit').click(function () {
                    var emailError = false;
                    var contactNotFinish = false;
                    var choUlLiNotFinish = false;
                    var demandNotFinish = false;
                    var consContNotFinish = false;
                    var tranNotFinish = false;
                    //管理系统复选框的选择
                    var chenkBox = $('input.contact-demand');
                    for (var i = 0; i < chenkBox.length; i++) {
                        if (chenkBox.get(i).checked) {
                            var value = chenkBox.get(i).value;
                            chenk.push(value);
                        } else {

                        }
                    }
                    chenkStr = chenk.join('、');

                    //是否获取资料
                    var dm_ask = $('#dm_ask');

                    if (dm_ask.length == 0) {
                        chenkInfo[0] = '';
                    } else {
                        if (dm_ask.is(':checked')) {
                            chenkInfo.push('Y');
                        } else {
                            chenkInfo.push('N');
                        }
                    }
                    // 确认公司名称，联系电话、分机、公司地址、联络人、E-mail、行动电话是否少填写
                    function fnContact() {
                        $('.contact').removeClass('noInput');
                        var requiLen = $('.required').length;
                        var Email = $('#contact-email');
                        var contactEmai = $('#contact-email').val();

                        requiLen > 0 ? requiLenFn() : contactEmaiFn();
                        function requiLenFn() {
                            for (var i = 0; i < $('.required').length; i++) {
                                var contactValue = $('.required').eq(i).val();
                                var contactPlaceholder = $('.required').eq(i).attr('placeholder');
                                if (contactValue == '' || contactValue == contactPlaceholder) {
                                    contactNotFinish = true;
                                    $('.required').eq(i).addClass('noInput');
                                }

                                Email.hasClass('required') == true ? contactReEmai() : contactEmaiFn();
                            }
                        }

                        function contactEmaiFn() {
                            if (contactEmai.length > 0 && !validateEmail(contactEmai)) {
                                emailError = true;
                                contactNotFinish = true;
                                $('#contact-email').addClass('noInput');
                            } else {
                                emailError = false;
                                $('#contact-email').removeClass('noInput');
                            }
                        }
                        function contactReEmai() {
                            if (contactEmai.length == 0) {
                                contactNotFinish = true;
                                emailError = true;
                                $('#contact-email').addClass('noInput');
                            } else {
                                if (!validateEmail(contactEmai)) {
                                    contactNotFinish = true;
                                    emailError = true;
                                    $('#contact-email').addClass('noInput');
                                } else {
                                    emailError = false;
                                }
                            }
                        }
                    }
                    fnContact();


                    // 确认需求内容复选框是否少填写
                    function fnChenk() {
                        var chenkContain = chenk.length;
                        var requiredCheck = $('.demandCheck').hasClass('requiredCheck');
                        if (requiredCheck == true) {
                            if (chenkContain == 0) {
                                demandNotFinish = true;
                                $('.demandCheck').addClass('noInput');
                            } else {
                                demandNotFinish = false;
                                $('.demandCheck').removeClass('noInput');
                            }
                        } else {
                            demandNotFinish = false;
                            $('.demandCheck').removeClass('noInput');
                        }

                        if ($('#othChecCont').is(':checked')) {
                            if ($('#contact-other').val() == '') {
                                demandNotFinish = true;
                                $('#contact-other').addClass('noInput');
                            } else {
                                demandNotFinish = false;
                                $('#contact-other').removeClass('noInput');
                            }
                        }
                    }
                    fnChenk();

                    // 确认咨询内容是否必填
                    function fnConsult() {
                        if (document.querySelector('#contact-query') === null) return;
                        var Consulting = $('#contact-query').val().replace(/"/g, '\'');
                        var requiredConsu = $('#contact-query').hasClass('requiredConsu');
                        if (Consulting == '' && requiredConsu == true) {
                            consContNotFinish = true;
                            $('#contact-query').addClass('noInput');
                        } else {
                            consContNotFinish = false;
                            $('#contact-query').removeClass('noInput');
                        }
                    }
                    fnConsult();
                    //确认跨国公司是否必选
                    function transChoFun() {
                        var choCountry = $('.choNy input');
                        var requiredTran = $('.requiredTran').hasClass('requiredTran');
                        if (requiredTran == true) {
                            for (var i = 0; i < choCountry.length; i++) {
                                if (choCountry.eq(i).is(':checked')) {
                                    tranNotFinish = false;
                                    choCountry.removeClass('noInput');
                                    return;
                                } else {
                                    tranNotFinish = true;
                                    choCountry.addClass('noInput');
                                }
                            }
                        } else {
                            tranNotFinish = false;
                            choCountry.removeClass('noInput');
                        }
                    }
                    transChoFun();
                    if ($('#agree').is(':checked')) {
                        if (statu_k == 1) {

                            if (!emailError && !contactNotFinish && !demandNotFinish && !consContNotFinish && !tranNotFinish) {
                                $('#loading').fadeIn();
                                clearTimeout(timeAjaID);
                                timeAjaID = setTimeout(function () {
                                    timeAjaID = addAjax();
                                }, 2000);

                            } else {
                                var txt = '尚有聯絡資料未填寫或Email格式錯誤，請重新確認。';
                                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                                // alert('请输入正确的邮箱地址！')
                                chenk = [];
                                chenkStr = '';
                                chenkInfo = [];
                            }

                        } else {
                            var txt = '請輸入正確的驗證碼。';
                            window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                            // alert('请输入正确验证码！')
                            chenk = [];
                            chenkStr = '';
                            chenkInfo = [];
                        }
                    } else {
                        var txt = '請點選同意鼎新電腦隱私權聲明，謝謝。';
                        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                        // alert('请点选同意鼎新电脑隐私权，谢谢')
                        chenk = [];
                        chenkStr = '';
                        chenkInfo = [];
                    }
                });

                $('#identCode').blur(function () {
                    validate();
                });

                $('.renovCode').click(function () {
                    createCode();
                });

            });
            
            
            
            /**
             * CONTACT
             */
            document.querySelector('form').reset();
            //諮詢內容顯示可輸入字數
            var textarea = document.querySelector('#contact-query');
            var showRemainWord = document.querySelector('.remaining');

            if (textarea) {
                textarea.addEventListener('keyup', calWord);
            }

            function calWord(e) {
                var wordNum = textarea.value.length;
                var remaindWord = textarea.getAttribute('maxlength') - wordNum;
                if (remaindWord >= 0) {
                    showRemainWord.innerHTML = remaindWord;
                } else {
                    showRemainWord.innerHTML = 0;
                }
            }

            //focus時改變欄位名稱的位置
            var input = document.querySelectorAll('.contact');
            var verificaNum = document.querySelector('#identCode');

            for (var i = 0; i < input.length; i++) {
                input[i].addEventListener('focus', changePos, false);
                input[i].addEventListener('blur', changePos, false);
            }

            verificaNum.addEventListener('focus', changePos, false);
            verificaNum.addEventListener('blur', changePos, false);

            function changePos(e) {
                var _this = e.target;
                var eventType = e.type;
                var inputValue = _this.value;
                var titleClassList = _this.parentNode.children[1].classList;
                titleClassList.add('focus');

                if (eventType == 'blur') {
                    if (inputValue == '' || inputValue == undefined) {
                        titleClassList.remove('focus');
                    } else {
                        _this.classList.remove('noInput');
                    }
                }
            }
        }
    },
    mounted() {
        this.init();
    },
}
</script>

<style>
#contact {
    position: relative;
    margin: 0 auto;
    padding-top: 47px;
    padding-bottom: 47px;
    max-width: 1920px;
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 20px;
    line-height: 1.5;
}
#contact .title {
    text-align: center;
    font-size: 36px;
    line-height: 1.4;
}
#contact .title i {
    color: #f7800d;
}
#contact .sectionDesc-center {
    margin: 0 auto 30px;
    padding: 0 140px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
}
#contact .sectionDesc-center a {
    display: inline-flex;
    margin-left: 5px;
    color: #ffae00;
    vertical-align: super;
    font-size: 36px;
    align-items: center;
}
#contact .sectionDesc-center a::before {
    display: inline-block;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #ffae00;
    border-radius: 50%;
    content: "";
    text-align: center;
    font: normal normal normal 18px/1 FontAwesome;
    line-height: 30px;
}
#contact .links {
    color: #fe5757;
}
#contact .links:hover {
    color: #ee0101;
}
#contact .highLight {
    color: #fe5757;
}
#contact .mobileStyle {
    display: none;
}

#form {
    border: 1px solid #ccc;
}
#form h3 {
    background-color: #d6d6d6;
    text-align: center;
    line-height: 50px;
}
#form .inforCheck,
#form .demandContent,
#form .basciInfo {
    padding: 30px 100px;
}
#form .inforCheck {
    display: flex;
    background-color: #215e8b;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
}
#form .inforCheck .outline {
    position: relative;
    float: left;
    margin: 10px 5px 5px 0;
    text-align: left;
    line-height: 30px;
}
#form .inforCheck .oneline {
    position: relative;
    float: left;
    clear: both;
    margin: 20px 5px 5px 0;
    width: 100%;
    text-align: left;
    line-height: 30px;
}
#form .inforCheck label {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    color: #ff0;
    font-size: 20px;
}
#form .inforCheck-caption {
    margin-bottom: 10px;
    width: 100%;
}
#form .inputTitle {
    margin-bottom: 4px;
    font-size: 20px;
}
#form .inputTitle .requiredHint {
    margin-right: 4px;
    color: #fe5757;
}
#form .inputTitle .fillHint {
    color: #888;
    font-size: 14px;
}
#form .inputTitle .fa {
    display: none;
    margin-left: 4px;
    color: #ffa800;
    font-size: 14px;
}
#form .demandCheck .outline {
    position: relative;
    float: left;
    margin: 0 10px 10px 0;
    width: 190px;
    text-align: center;
    line-height: 40px;
}
#form .demandCheck .outline label {
    display: block;
    background-color: #eee;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#form .demandCheck .outline label br {
    display: none;
}
#form .demandCheck .outline:nth-of-type(5n) {
    margin-right: 0;
}
#form .demandCheck .contact-demand,
#form .demandCheck .demandOtherCont {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
}
#form .demandCheck .contact-demand:checked + label,
#form .demandCheck .demandOtherCont:checked + label {
    background-color: #3798e4;
    color: #fff;
}
#form .demandCheck.noInput .inputTitle .fa {
    display: inline-block;
}
#form .consult-cont {
    width: 100%;
}
#form .consult-cont #contact-query {
    display: block;
    padding: 10px;
    width: 100%;
    border: 1px solid #d6d6d6;
    font-size: 16px;
    font-family: Arial, "微軟正黑體";
    line-height: 27px;
}
#form .consult-cont .wordNum {
    margin-top: 10px;
    font-size: 14px;
}
#form .basciInfo .outline {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
}
#form .basciInfo .inputTitle {
    position: absolute;
    top: 16px;
    left: 20px;
    z-index: -1;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#form .basciInfo .inputTitle.focus {
    top: 0;
    color: #3798e4;
    font-size: 16px;
}
#form .basciInfo .inputTitle.focus .requiredHint {
    color: #3798e4;
}
#form .basciInfo input {
    display: block;
    padding: 24px 0 4px 30px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #d6d6d6;
    background-color: transparent;
    font-size: 18px;
    font-family: Arial, "微軟正黑體";
}
#form .basciInfo input:focus {
    outline: none;
}
#form .basciInfo input.noInput + .inputTitle .fa {
    display: inline-block;
}
#form .btnBlock {
    padding: 40px 0;
    background-color: #f2f2f2;
}
#form .btnBlock #submit {
    display: block;
    margin: auto;
    width: 300px;
    border: none;
    border-radius: 3px;
    background-color: #029bd2;
    color: #fff;
    letter-spacing: 5px;
    font-size: 24px;
    font-family: Arial, "微軟正黑體";
    line-height: 50px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#form .btnBlock #submit:hover {
    background-color: #02769f;
}
#form .btnBlock .agreeLabel {
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
}
#form .btnBlock .agreeLabel [type="checkbox"] {
    vertical-align: middle;
}
#form #fromSource {
    position: absolute;
    height: 0;
    font-size: 0;
}
#form .verifica {
    position: relative;
}
#form .verifica::before {
    display: table;
    content: "";
}
#form .verifica::after {
    display: table;
    clear: both;
    content: "";
}
#form .verifica .outline {
    float: left;
    width: 170px;
}
#form .verifica #vericodePic {
    position: relative;
    float: left;
    margin: 10px 0 0 10px;
    padding: 0;
    width: 120px;
    border: none;
    background: url("http://www.digiwin.com/tw/dsc/images/Eform/identCode.jpg")
        no-repeat center center;
    color: #555;
    letter-spacing: 4px;
    font: italic bold 20px/40px Arial;
}
#form .verifica .renovCode {
    display: block;
    float: left;
    margin: 10px 0 0 10px;
    width: 27px;
    height: 40px;
    background: url("http://www.digiwin.com/tw/dsc/images/Eform/reloadDark.png")
        no-repeat center center;
    cursor: pointer;
}
#form .verifica #codeSuces {
    position: absolute;
    bottom: -14px;
    left: 32px;
    color: #fe5757;
    font-size: 14px;
}

@media (max-width: 1060px) {
    #form .inforCheck label:nth-of-type(1),
    #form .inforCheck label:nth-of-type(2),
    #form .inforCheck label:nth-of-type(3) {
        width: 100%;
    }
}
@media (max-width: 768px) {
    #contact {
        min-width: 100%;
        max-width: 100%;
    }
    #contact .title {
        margin-bottom: 5px;
        text-align: left;
        font-size: 26px;
    }
    #contact .sectionDesc-center {
        padding: 0;
        text-align: left;
    }
    #contact .sectionDesc-center a {
        font-size: 20px;
    }

    #form {
        margin-bottom: 0;
    }
    #form .content {
        border: none;
    }
    #form .inforCheck,
    #form .demandContent,
    #form .basciInfo {
        padding: 30px 10px;
    }
    #form .inforCheck label {
        padding-left: 30px;
    }
    #form .inforCheck label input {
        margin-left: -20px;
    }
    #form .basciInfo input {
        padding: 24px 0 4px 4px;
    }
    #form .basciInfo .inputTitle {
        left: 4px;
    }
    #form .basciInfo .inputTitle .requiredHint {
        margin-right: 4px;
    }
    #form .demandCheck .outline {
        margin: 0 0 10px 0;
        padding: 0 5px;
        width: 50%;
        line-height: 24px;
    }
    #form .demandCheck .outline label {
        padding: 4px 0;
    }
    #form .demandCheck .outline label br {
        display: block;
    }
    #form .demandCheck .outline:nth-of-type(odd) {
        padding-left: 0;
    }
    #form .demandCheck .outline:nth-of-type(even) {
        padding-right: 0;
    }
    #form .demandCheck .outline .othChecCont {
        line-height: 48px;
    }
    #form .btnBlock #submit {
        width: 90%;
    }
    #form .btnBlock .agreeLabel {
        margin-top: 10px;
    }
    #form .verifica .outline {
        width: 54%;
    }
    #form .verifica #vericodePic {
        width: 28%;
    }
    #form .verifica #codeSuces {
        left: 18px;
    }
}
/* #region 諮詢表單元件 */
#thx {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    text-align: center;
}
#thx:before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
    text-align: center;
}
#thx p {
    text-align: center;
    line-height: 1.5;
}
#thx .suprtCall span {
    display: block;
}
#thx #thxContent {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    padding: 50px;
    max-width: 500px;
    width: 50%;
    border-radius: 5px;
    background-color: #3798e4;
    vertical-align: middle;
    text-align: center;
}
#thx #thxContent .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 0 5px 0 5px;
    background-color: #1c7fcc;
    font-size: 24px;
    line-height: 50px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#thx #thxContent .close:hover {
    background-color: #16639f;
}
#thx #thxContent .title {
    margin-bottom: 15px;
    padding-top: 0;
    /* override */
    text-align: center;
    font-size: 30px;
}
#thx #thxContent .thxSourLoad1 {
    display: none;
    margin: 30px auto 0;
    width: 200px;
    height: 45px;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: #ff7e00;
    line-height: 45px;
}
#thx #thxContent .thxSourLoad1 a {
    display: block;
    color: #fff;
    text-decoration: none;
}
#thx #thxContent .thxSourLoad2 {
    display: inline-block;
    width: 150px;
    height: 45px;
}
#thx #goIndex {
    margin: 25px auto 0;
    max-width: 200px;
    width: 82%;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: #0f4773;
    line-height: 50px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#thx #goIndex a {
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}
#thx #goIndex:hover {
    background-color: #092b46;
}

.xcConfirm .popBox .ttBox {
    height: 50px;
}
.xcConfirm .popBox .txtBox .bigIcon {
    display: none;
}
.xcConfirm .popBox .txtBox p {
    height: auto;
    text-align: center;
}
.xcConfirm .popBox .sgBtn {
    border-radius: 3px;
    font-weight: normal;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
.xcConfirm .popBox .sgBtn:hover {
    background-color: #0f4773;
}

@media (max-width: 640px) {
    #thx #thxContent {
        padding: 50px 20px;
        max-width: 90%;
        width: 90%;
    }
}
/* #endregion 諮詢表單元件 */
/* #region loading */
#loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    text-align: center;
}
#loading:before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
}
#loading p {
    display: inline-block;
    margin: 0 auto;
    width: 90%;
    vertical-align: middle;
    text-align: center;
    font-size: 21px;
}
#loading p i {
    display: block;
    margin-bottom: 15px;
    height: 24px;
    background: url("/tw/dsc/images/Eform/loading.gif") no-repeat center center;
}

/* #endregion loading */
</style>