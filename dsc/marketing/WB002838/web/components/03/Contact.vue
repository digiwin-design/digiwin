<template>
    <div class="container">
        <div id="contact" class="section">
            <div class="content">
                <h2>鼎新MES導入成功經驗，<br>運用工廠營運管制系統充份掌控生產脈動</h2>
                <p class="sectionDesc-center">各行各業皆有成功案例，歡迎諮詢索取 <a href="tel:0800009890">0800-009-890</a></p>
                <div id="form">
                    <form>
                        <a id="fromSource" href="javascript:;">WB002838</a>
                        <h3>需求內容</h3>
                        <div class="demandContent">
                            <div class="demandCheck">
                                <p class="inputTitle">需求類別<i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand01" type="checkbox" value="實證案例">
                                    <label for="demand01">實證案例</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand02" type="checkbox" value="應用效益">
                                    <label for="demand02">應用效益</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand03" type="checkbox" value="系統架構">
                                    <label for="demand03">系統架構</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand04" type="checkbox" value="模組功能">
                                    <label for="demand04">模組功能</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand05" type="checkbox" value="硬體規格">
                                    <label for="demand05">硬體規格</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand06" type="checkbox" value="報價諮詢">
                                    <label for="demand06">報價諮詢</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand07" type="checkbox" value="整合規劃">
                                    <label for="demand07">整合規劃</label>
                                </div>
                                <div class="outline">
                                    <input name="contact-demand" class="contact-demand" id="demand08" type="checkbox" value="其他">
                                    <label for="demand08">其他</label>
                                </div>
                            </div>
                            <div class="consult-cont">
                                <p class="inputTitle">諮詢內容</p>
                                <textarea id="contact-query" cols="40" rows="5" maxlength="500"></textarea>
                                <p class="wordNum">可輸入 <span class="remaining">500</span> 字</p>
                            </div>
                        </div>
                        <h3>聯絡資料</h3>
                        <div class="basciInfo">
                            <div class="outline">
                                <input type="text" name="contact-company" id="contact-company" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>公司名稱 <span class="fillHint"> (請填寫完整公司名稱)</span><i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="outline">
                                <input type="text" name="telephone" id="telephone" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>聯絡電話<i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="outline">
                                <input type="text" name="contact_person" id="contact_person" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>聯絡人<i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="outline">
                                <input type="text" name="contact-dept" id="contact-dept" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>部門<i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="outline">
                                <input type="text" name="contact-job" id="contact-job" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>職稱<i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="outline">
                                <input type="text" name="contact-email" id="contact-email" class="contact required">
                                <p class="inputTitle"><span class="requiredHint">*</span>E-mail<span class="fillHint"> (例：example@digiwin.com)</span><i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                            </div>
                            <div class="verifica clearfix">
                                <div class="outline">
                                    <input type="text" name="" id="identCode" class="identCode" onblur="validate()">
                                    <p class="inputTitle"><span class="requiredHint">*</span>請輸入驗證碼</p>
                                </div>
                                <input type="button" id="vericodePic" />
                                <span class="renovCode" onclick="createCode()"></span>
                                <span id="codeSuces"></span>
                            </div>
                        </div>
                        <div class="btnBlock">
                            <input type="button" id="submit" value="提交資料">
                            <div class="agreeLabel">
                                <label for="agree">
                                    <input type="checkbox" name="agree" value="" id="agree" checked> 我同意接受鼎新電腦<a class="links" href="http://tw.digiwin.biz/legal.html" target="_blank">隱私權聲明</a>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- loading -->
        <div id="loading">
            <p><i></i>資料提交中，請稍後</p>
        </div>

        <!-- thx page -->
        <div id="thx">
            <div id="thxContent">
                <div class="close">X</div>
                <h3>資料己送出</h3>
                <p class="thxparg"></p>
                <p class="suprtCall">
                    <span>如需要立即的支援與服務，</span>
                    <span>請直撥免付費專線 0800-888-162，謝謝！</span>
                </p>
                <p class="thxSourLoad1">
                    <a id="SourLoadLink" href="" target="_blank">資料下載</a>
                </p>
                <p id="goIndex">
                    <a href="javascript:;">繼續瀏覽網站</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $.getScript(`${process.env.BASE_URL}public/vendor/eform/form.js`).done(function(){createCode()});
        $.getScript(`${process.env.BASE_URL}public/vendor/eform/contact.js`);

        window.addEventListener('load', function () {
            if (location.hash === '#contact') {
                let offset = $('.page-submenu').outerHeight();
                let targetPos = $('#contact').offset().top;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }
        });
    },
}
</script>

<style lang="scss" scoped>
/* ==================== contact ==================== */

#contact {
    padding-top: 50px;
    h2 {
        text-align: center;
        font-size: 36px;
        @media (max-width: 768px) {
            font-size: 26px;
        }
        br {
            display: none;
        }
    }
    .sectionDesc-center {
        margin: 0 auto 30px;
        text-align: center;
        font-size: 20px;
        line-height: 1.5;
        @media (max-width: 768px) {
            margin-top: .5em;
        }
        @media (max-width: 413px) {
            font-size: 18px;
        }
        a {
            display: inline-block;
            color: #ffae00;
            font-size: 36px;
            @media (max-width: 768px) {
                font-size: 26px;
            }
        }
    }
    .links {
        color: #fe5757;
        &:hover {
            color: #ee0101;
        }
    }
    .highLight {
        color: #fe5757;
    }
    .mobileStyle {
        display: none;
    }
}

/* ==================== form ==================== */

#form {
    margin-bottom: 60px;
    border: 1px solid #ccc;
    h3 {
        background-color: #d6d6d6;
        text-align: center;
        line-height: 50px;
    }
}

.demandContent,
.basciInfo {
    padding: 30px 99px;
}

.inputTitle {
    margin-bottom: 4px;
    width: 100%;
    font-size: 20px;
    .requiredHint {
        margin-right: 4px;
        color: #fe5757;
    }
    .fillHint {
        color: #888;
        font-size: 14px;
    }
    .fa {
        display: none;
        margin-left: 4px;
        color: #ffa800;
        font-size: 14px;
    }
}

.demandCheck {
    display: flex;
    flex-wrap: wrap;
    .outline {
        position: relative;
        margin: 5px;
        width: 190px;
        text-align: center;
        line-height: 40px;
        label {
            display: block;
            background-color: #eee;
            cursor: pointer;
            -webkit-transition: .5s;
                    transition: .5s;
            br {
                display: none;
            }
        }
    }
    .contact-demand,
    .demandOtherCont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
    }
    .contact-demand:checked + label,
    .demandOtherCont:checked + label {
        background-color: #3798e4;
        color: #fff;
    }
    &.noInput .inputTitle .fa {
        display: inline-block;
    }
}

.consult-cont {
    margin-top: 30px;
    #contact-query {
        display: block;
        padding: 10px;
        width: 100%;
        border: 1px solid #d6d6d6;
        font-size: 16px;
        font-family: Arial, '微軟正黑體';
        line-height: 27px;
    }
    .wordNum {
        margin: 0 0 0 10px;
        font-size: 14px;
    }
}

.basciInfo {
    .outline {
        position: relative;
        margin-bottom: 10px;
    }
    .inputTitle {
        position: absolute;
        top: 16px;
        left: 20px;
        z-index: -1;
        -webkit-transition: .5s;
                transition: .5s;
        &.focus {
            top: 0;
            color: #3798e4;
            font-size: 16px;
            .requiredHint {
                color: #3798e4;
            }
        }
    }
    input {
        display: block;
        padding: 24px 0 4px 30px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        background-color: transparent;
        font-size: 18px;
        font-family: Arial, '微軟正黑體';
        &:focus {
            outline: none;
        }
        &.noInput + .inputTitle .fa {
            display: inline-block;
        }
    }
}

.btnBlock {
    padding: 40px 0;
    background-color: #f2f2f2;
    #submit {
        display: block;
        margin: auto;
        width: 300px;
        border: none;
        border-radius: 3px;
        background-color: #3798e4;
        color: #fff;
        letter-spacing: 5px;
        font-size: 24px;
        font-family: Arial, '微軟正黑體';
        line-height: 50px;
        cursor: pointer;
        -webkit-transition: .5s;
                transition: .5s;
        &:hover {
            background-color: #0f4773;
        }
    }
    .agreeLabel {
        text-align: center;
        font-size: 14px;
    }
}

/* ==================== form basic ==================== */

#fromSource {
    position: absolute;
    height: 0;
    font-size: 0;
}

/* ==================== verifica ==================== */

.verifica {
    position: relative;
    .outline {
        float: left;
        width: 170px;
    }
    #vericodePic {
        position: relative;
        float: left;
        margin: 10px 0 0 10px;
        padding: 0;
        width: 120px;
        border: none;
        background: url('https://www.digiwin.com/tw/dsc/images/Eform/identCode.jpg') no-repeat center center;
        color: #555;
        letter-spacing: 4px;
        font: italic bold 20px/40px Arial;
    }
    .renovCode {
        display: block;
        float: left;
        margin: 10px 0 0 10px;
        width: 27px;
        height: 40px;
        background: url('https://www.digiwin.com/tw/eform/images/renovCode.png') no-repeat center center;
        cursor: pointer;
    }
    #codeSuces {
        position: absolute;
        bottom: -14px;
        left: 32px;
        color: #fe5757;
        font-size: 14px;
    }
}

/* ==================== loading ==================== */

#loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    background-color: #000 \9;
    color: #fff;
    text-align: center;
    font-family: Arial, '微軟正黑體', '新細明體';
    &:before {
        display: inline-block;
        height: 100%;
        content: '';
        vertical-align: middle;
    }
    p {
        display: inline-block;
        margin: 0 auto;
        width: 90%;
        vertical-align: middle;
        text-align: center;
        font-size: 21px;
        i {
            display: block;
            margin-bottom: 15px;
            height: 24px;
            background: url('https://www.digiwin.com/tw/eform/images/loading.gif') no-repeat center center;
        }
    }
}

/* ==================== thx ==================== */

#thx {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    background-color: #000 \9;
    color: #fff;
    text-align: center;
    font-family: Arial, '微軟正黑體';
    &:before {
        display: inline-block;
        height: 100%;
        content: '';
        vertical-align: middle;
        text-align: center;
    }
    #thxContent {
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
        h3 {
            margin-bottom: 15px;
            text-align: center;
            font-size: 30px;
        }
        .thxSourLoad1 {
            display: none;
            margin: 30px auto 0;
            width: 200px;
            height: 45px;
            border: 1px solid #fff;
            border-radius: 3px;
            background-color: #ff7e00;
            line-height: 45px;
            a {
                display: block;
                color: #fff;
                text-decoration: none;
            }
        }
        .thxSourLoad2 {
            display: inline-block;
            width: 150px;
            height: 45px;
        }
    }
    #thxparg span,
    .suprtCall span {
        display: block;
    }
}

#goIndex {
    margin: 25px auto 0;
    max-width: 200px;
    width: 82%;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: #0f4773;
    line-height: 50px;
    -webkit-transition: .5s;
            transition: .5s;
    a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 20px;
    }
    &:hover {
        background-color: #092b46;
    }
}

.close {
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
    -webkit-transition: .5s;
            transition: .5s;
    &:hover {
        background-color: #16639f;
    }
}

/* ==================== xcConfirm ==================== */

.xcConfirm .popBox {
    .ttBox {
        height: 50px;
    }
    .txtBox {
        .bigIcon {
            display: none;
        }
        p {
            height: auto;
            text-align: center;
        }
    }
    .sgBtn {
        border-radius: 3px;
        font-weight: normal;
        -webkit-transition: .5s;
                transition: .5s;
        &:hover {
            background-color: #0f4773;
        }
    }
}

@media screen and (max-width: 480px) {
    /* ==================== form ==================== */
    #form .content {
        border: none;
    }
    .demandContent {
        padding: 30px 10px;
    }
    .basciInfo {
        padding: 30px 10px;
        input {
            padding: 24px 0 4px 4px;
        }
        .inputTitle {
            left: 4px;
            .requiredHint {
                margin-right: 4px;
            }
        }
    }
    .demandCheck .outline {
        margin: 0 0 10px 0;
        padding: 0 5px;
        width: 50%;
        line-height: 24px;
        label {
            padding: 4px 0;
            br {
                display: block;
            }
        }
        &:nth-of-type(odd) {
            padding-left: 0;
        }
        &:nth-of-type(even) {
            padding-right: 0;
        }
        .othChecCont {
            line-height: 48px;
        }
    }
    .btnBlock {
        #submit {
            width: 90%;
        }
        .agreeLabel {
            margin-top: 10px;
        }
    }
    /* ==================== verifica ==================== */
    .verifica {
        .outline {
            width: 54%;
        }
        #vericodePic {
            width: 28%;
        }
        #codeSuces {
            left: 18px;
        }
    }
    /* ==================== thx ==================== */
    #thx #thxContent {
        padding: 50px 20px;
        max-width: 90%;
        width: 90%;
    }
}

.clear {
    clear: both;
    margin: 0;
    padding: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    ;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
    line-height: 0;
}
.clearfix:after {
    clear: both;
}
</style>