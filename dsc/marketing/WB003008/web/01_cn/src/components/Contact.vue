<template>
    <div>
        <div id="contact" class="section">
            <div class="container">
                <p class="title">各行各业、不同企业规模皆有成功案例及解决方案，欢迎免费咨询索取</p>
                <p class="sectionDesc-center">
                    需要立即的支援及服务请拨打联络专线
                    <br />
                    <a href="tel:+84-942239950">
                        越南联络代表 许先生
                        <i>+84-942239950</i>
                    </a>
                    <br />
                    <a href="tel:+886 36283411">
                        泰国联络代表 戚小姐
                        <i>+886 936283411</i>
                    </a>
                    <br />
                    <a href="tel:+601123554916">
                        马来西亚联络代表 谢先生
                        <i>+601123554916</i>
                    </a>
                </p>
                <div id="form">
                    <form>
                        <a id="fromSource" href="javascript:;" v-text="source"></a>
                        <div class="inforCheck">
                            <p class="inforCheck-caption">请勾选贵公司想要咨询的项目：</p>
                            <div class="demand">
                                <div class="demand-items">
                                    <label class="demand-item">
                                        <input
                                            name="contact-demand"
                                            class="contact-demand"
                                            type="checkbox"
                                            value="索取企业资源管理ERP型录"
                                        />索取企业资源管理ERP型录
                                    </label>
                                    <label class="demand-item">
                                        <input
                                            name="contact-demand"
                                            class="contact-demand"
                                            type="checkbox"
                                            value="申请【越南】企业资讯规划服务"
                                        />申请【越南】企业资讯规划服务
                                    </label>
                                    <label class="demand-item">
                                        <input
                                            name="contact-demand"
                                            class="contact-demand"
                                            type="checkbox"
                                            value="申请【马来西亚】企业资讯规划服务"
                                        />申请【马来西亚】企业资讯规划服务
                                    </label>
                                    <label class="demand-item">
                                        <input
                                            name="contact-demand"
                                            class="contact-demand"
                                            type="checkbox"
                                            value="申请【泰国】企业信息规划服务"
                                        />申请【泰国】企业信息规划服务
                                    </label>
                                </div>
                            </div>
                            <div class="outline">若您有其他建议或想法，欢迎与我们分享：</div>
                            <div class="consult-cont">
                                <p class="inputTitle"></p>
                                <textarea id="contact-query" cols="40" rows="4" maxlength="500"></textarea>
                                <p class="wordNum">
                                    可输入
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
                                    class="contact required"
                                />
                                <p class="inputTitle">
                                    <span class="requiredHint">*</span>公司名称
                                    <span class="fillHint">(请填写完整公司名称)</span>
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
                                    <span class="requiredHint">*</span>联络人
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
                                    <span class="requiredHint">*</span>联络电话
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
                                    部门
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
                                    职称
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="verifica clearfix">
                                <div class="outline">
                                    <input type="text" name id="identCode" class="identCode" onblur="validate()" />
                                    <p class="inputTitle">
                                        <span class="requiredHint">*</span>请输入验证码
                                    </p>
                                </div>
                                <input type="button" id="vericodePic" />
                                <span class="renovCode" onclick="createCode()"></span>
                                <span id="codeSuces"></span>
                            </div>
                        </div>
                        <div class="btnBlock">
                            <input type="button" id="submit" value="提交资料" />
                            <div class="agreeLabel">
                                <label for="agree">
                                    <input type="checkbox" name="agree" value id="agree" checked /> 我同意接受鼎新电脑
                                    <a
                                        class="links"
                                        href="/tw/legal.html"
                                        target="_blank"
                                    >隐私权声明</a>
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
                <i></i>资料提交中，请稍后
            </p>
        </div>

        <!-- thx page -->
        <div id="thx">
            <div id="thxContent">
                <div class="close">X</div>
                <p class="title">资料己送出</p>
                <p class="thxparg"></p>
                <p class="suprtCall">
                    <span>如需要立即的支援与服务，</span>
                    <span>请直拨免付费专线 0800-888-162，谢谢！</span>
                </p>
                <p class="thxSourLoad1">
                    <a id="SourLoadLink" href target="_blank">资料下载</a>
                </p>
                <p id="goIndex">
                    <a href="javascript:;">继续浏览网站</a>
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
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
}
@media (min-width: 361px) {
    .container {
        padding-right: 20px;
        padding-left: 20px;
    }
}
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
    margin: 1em auto 0.5em;
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
}
#contact .sectionDesc-center a {
    display: inline-flex;
    color: #ffae00;
    vertical-align: super;
    font-size: 36px;
    flex-wrap: wrap;
    align-items: center;
}
@media (max-width: 768px) {
    #contact .sectionDesc-center a:not(:first-of-type) {
        margin-top: .2em;
    }
}
#contact .sectionDesc-center a:first-of-type {
    margin-top: 0.2em;
}
#contact .sectionDesc-center i {
    display: flex;
    margin-right: 5px;
    margin-left: 0.4em;
    align-items: center;
}
#contact .sectionDesc-center i::before {
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
    background-color: #b81307;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
}
#form .inforCheck .demand {
    width: 100%;
}
#form .inforCheck .demand-items {
    display: flex;
    margin: 0 -10px;
    flex-wrap: wrap;
}
#form .inforCheck .demand-item {
    display: flex;
    padding: 10px;
    width: 50%;
    font-size: 20px;
    flex-shrink: 0;
    align-items: baseline;
}
@media (max-width: 768px) {
    #form .inforCheck .demand-item {
        width: 100%;
    }
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
    font-family: Arial, "微软正黑体";
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
    font-family: Arial, "微软正黑体";
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
    background-color: #b81307;
    color: #fff;
    letter-spacing: 5px;
    font-size: 24px;
    font-family: Arial, "微软正黑体";
    line-height: 50px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#form .btnBlock #submit:hover {
    background-color: #850d05; /* 亮度(L)-10% */
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
/* #region 咨询表单元件 */
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
/* #endregion 咨询表单元件 */
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