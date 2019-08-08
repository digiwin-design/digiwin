<template>
    <div>
        <div id="contact" class="section">
            <div class="container">
                <p class="title">快速因應最新法令，勞動檢查輕鬆過關，人資夥伴的最佳解決方案！</p>
                <p class="sectionDesc-center">需要立即的支援與服務請直撥免付費專線 <a href="tel:0800009890">0800-009-890</a></p>
                <div id="form">
                    <form>
                        <a id="fromSource" href="javascript:;"></a>
                        <div class="inforCheck">
                            <p class="inforCheck-caption">鼎新HRM人力資源解決方案，即時更新因應最新法令，讓人資無須擔心勞檢卡關！</p>
                            <label for="demand01"><input name="contact-demand" class="contact-demand" id="demand01" type="checkbox" value="我想輕鬆通過勞動檢查，幫企業省大錢！索取HR解決方案相關資料。" /> 我想輕鬆通過勞動檢查，幫企業省大錢！索取HR解決方案相關資料。</label>
                            <div class="outline">若您有其他建議或想法，歡迎與我們分享：</div>
                            <div class="consult-cont">
                                <p class="inputTitle"></p>
                                <textarea id="contact-query" cols="40" rows="4" maxlength="500"></textarea>
                                <p class="wordNum">可輸入 <span class="remaining">500</span> 字</p>
                            </div>
                        </div>

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
                                    <input type="text" name="" id="identCode" class="identCode" onBlur="validate()">
                                    <p class="inputTitle"><span class="requiredHint">*</span>請輸入驗證碼</p>
                                </div>
                                <input type="button" id="vericodePic" />
                                <span class="renovCode" onClick="createCode()"></span>
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
                <p class="title">資料己送出</p>
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
    },
}
</script>

<style lang="scss" scoped>
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
    .title {
        text-align: center;
        font-size: 36px;
    }
    .sectionDesc-center {
        margin: 0 auto 30px;
        padding: 0 140px;
        text-align: center;
        font-size: 20px;
        line-height: 1.5;
        a {
            display: inline-flex;
            margin-left: 5px;
            color: #ffae00;
            vertical-align: super;
            font-size: 36px;
            align-items: center;
            &::before {
                display: inline-block;
                margin-right: 5px;
                width: 30px;
                height: 30px;
                border: 1px solid #ffae00;
                border-radius: 50%;
                content: '\f095';
                text-align: center;
                font: normal normal normal 18px/1 FontAwesome;
                line-height: 30px;
            }
        }
    }
    .links {
        color: #fe5757;
    }
    .links:hover {
        color: #ee0101;
    }
    .highLight {
        color: #fe5757;
    }
    .mobileStyle {
        display: none;
    }
}
#form {
    border: 1px solid #ccc;
    h3 {
        background-color: #d6d6d6;
        text-align: center;
        line-height: 50px;
    }
    .inforCheck,
    .demandContent,
    .basciInfo {
        padding: 30px 100px;
    }
    .inforCheck {
        display: flex;
        background-color: #029bd2;
        color: #fff;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .inforCheck .outline {
        position: relative;
        float: left;
        margin: 10px 5px 5px 0;
        text-align: left;
        line-height: 30px;
    }
    .inforCheck .oneline {
        position: relative;
        float: left;
        clear: both;
        margin: 20px 5px 5px 0;
        width: 100%;
        text-align: left;
        line-height: 30px;
    }
    .inforCheck label {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #ff0;
        font-size: 20px;
    }
    .inforCheck-caption {
        margin-bottom: 10px;
        width: 100%;
    }
    .inputTitle {
        margin-bottom: 4px;
        font-size: 20px;
    }
    .inputTitle .requiredHint {
        margin-right: 4px;
        color: #fe5757;
    }
    .inputTitle .fillHint {
        color: #888;
        font-size: 14px;
    }
    .inputTitle .fa {
        display: none;
        margin-left: 4px;
        color: #ffa800;
        font-size: 14px;
    }
    .demandCheck .outline {
        position: relative;
        float: left;
        margin: 0 10px 10px 0;
        width: 190px;
        text-align: center;
        line-height: 40px;
    }
    .demandCheck .outline label {
        display: block;
        background-color: #eee;
        cursor: pointer;
        -webkit-transition: .5s;
                transition: .5s;
    }
    .demandCheck .outline label br {
        display: none;
    }
    .demandCheck .outline:nth-of-type(5n) {
        margin-right: 0;
    }
    .demandCheck .contact-demand,
    .demandCheck .demandOtherCont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
    }
    .demandCheck .contact-demand:checked + label,
    .demandCheck .demandOtherCont:checked + label {
        background-color: #3798e4;
        color: #fff;
    }
    .demandCheck.noInput .inputTitle .fa {
        display: inline-block;
    }
    .consult-cont {
        width: 100%;
    }
    .consult-cont #contact-query {
        display: block;
        padding: 10px;
        width: 100%;
        border: 1px solid #d6d6d6;
        font-size: 16px;
        font-family: Arial, '微軟正黑體';
        line-height: 27px;
    }
    .consult-cont .wordNum {
        margin-top: 10px;
        font-size: 14px;
    }
    .basciInfo .outline {
        position: relative;
        z-index: 1;
        margin-bottom: 10px;
    }
    .basciInfo .inputTitle {
        position: absolute;
        top: 16px;
        left: 20px;
        z-index: -1;
        -webkit-transition: .5s;
                transition: .5s;
    }
    .basciInfo .inputTitle.focus {
        top: 0;
        color: #3798e4;
        font-size: 16px;
    }
    .basciInfo .inputTitle.focus .requiredHint {
        color: #3798e4;
    }
    .basciInfo input {
        display: block;
        padding: 24px 0 4px 30px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        background-color: transparent;
        font-size: 18px;
        font-family: Arial, '微軟正黑體';
    }
    .basciInfo input:focus {
        outline: none;
    }
    .basciInfo input.noInput + .inputTitle .fa {
        display: inline-block;
    }
    .btnBlock {
        padding: 40px 0;
        background-color: #f2f2f2;
    }
    .btnBlock #submit {
        display: block;
        margin: auto;
        width: 300px;
        border: none;
        border-radius: 3px;
        background-color: #029bd2;
        color: #fff;
        letter-spacing: 5px;
        font-size: 24px;
        font-family: Arial, '微軟正黑體';
        line-height: 50px;
        cursor: pointer;
        -webkit-transition: .5s;
                transition: .5s;
        &:hover {
            background-color: darken(#029bd2, 10%);
        }
    }
    .btnBlock .agreeLabel {
        margin-top: 5px;
        text-align: center;
        font-size: 14px;
        [type=checkbox] {
            vertical-align: middle;
        }
    }
    #fromSource {
        position: absolute;
        height: 0;
        font-size: 0;
    }
    .verifica {
        position: relative;
        &::before {
            display: table;
            content: '';
        }
        &::after {
            display: table;
            clear: both;
            content: '';
        }
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
            background: url('https://www.digiwin.com/tw/dsc/images/Eform/reloadDark.png') no-repeat center center;
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
}
@media (max-width: 1060px) {
    #form .inforCheck label {
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
            width: 100%;
        }
    }
}
@media (max-width: 768px) {
    #contact {
        min-width: 100%;
        max-width: 100%;
        .title {
            margin-bottom: 5px;
            text-align: left;
            font-size: 26px;
        }
        .sectionDesc-center {
            padding: 0;
            text-align: left;
        }
        .sectionDesc-center a {
            font-size: 20px;
        }
    }
    #form {
        margin-bottom: 0;
        .content {
            border: none;
        }
        .inforCheck,
        .demandContent,
        .basciInfo {
            padding: 30px 10px;
        }
        .inforCheck label {
            padding-left: 30px;
        }
        .inforCheck label input {
            margin-left: -20px;
        }
        .basciInfo input {
            padding: 24px 0 4px 4px;
        }
        .basciInfo .inputTitle {
            left: 4px;
        }
        .basciInfo .inputTitle .requiredHint {
            margin-right: 4px;
        }
        .demandCheck .outline {
            margin: 0 0 10px 0;
            padding: 0 5px;
            width: 50%;
            line-height: 24px;
        }
        .demandCheck .outline label {
            padding: 4px 0;
        }
        .demandCheck .outline label br {
            display: block;
        }
        .demandCheck .outline:nth-of-type(odd) {
            padding-left: 0;
        }
        .demandCheck .outline:nth-of-type(even) {
            padding-right: 0;
        }
        .demandCheck .outline .othChecCont {
            line-height: 48px;
        }
        .btnBlock #submit {
            width: 90%;
        }
        .btnBlock .agreeLabel {
            margin-top: 10px;
        }
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
    background-color: rgba(0, 0, 0, .9);
    color: #fff;
    text-align: center;
    &:before {
        display: inline-block;
        height: 100%;
        content: '';
        vertical-align: middle;
        text-align: center;
    }
    p {
        text-align: center;
        line-height: 1.5;
    }
    .suprtCall span {
        display: block;
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
        }
        .close:hover {
            background-color: #16639f;
        }
        .title {
            margin-bottom: 15px;
            padding-top: 0; /* override */
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
        }
        .thxSourLoad1 a {
            display: block;
            color: #fff;
            text-decoration: none;
        }
        .thxSourLoad2 {
            display: inline-block;
            width: 150px;
            height: 45px;
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
}
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
    background-color: rgba(0, 0, 0, .9);
    color: #fff;
    text-align: center;
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
    }
    p i {
        display: block;
        margin-bottom: 15px;
        height: 24px;
        background: url('/tw/dsc/images/Eform/loading.gif') no-repeat center center;
    }
}
/* #endregion loading */
</style>