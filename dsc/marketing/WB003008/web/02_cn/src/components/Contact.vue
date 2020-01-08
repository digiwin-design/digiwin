<template>
    <div>
        <div id="contact" class="section">
            <div class="container">
                <p class="title">各行各业、不同企业规模皆有成功案例及解决方案，欢迎免费咨询索取</p>
                <div class="sectionDesc-center">
                    <p>需要立即的支援及服务请拨打联络专线</p>
                    <div class="row">
                        <p>越南联络代表 许先生</p>
                        <a href="tel:+84 0942239950">
                            <i>+84 0942239950</i>
                        </a>
                    </div>
                    <div class="row">
                        <p>泰国联络代表 戚小姐</p>
                        <a href="tel:+66 0633131843">
                            <i>+66 0633131843</i>
                        </a>
                    </div>
                    <div class="row">
                        <p>马来西亚联络代表 谢先生</p>
                        <a href="tel:+60 1123554916">
                            <i>+60 1123554916</i>
                        </a>
                    </div>
                    <div class="row">
                        <p>中国.台湾联系人 李小姐</p>
                        <div class="tels">
                            <a href="tel:+886 917831738">
                                <i>+886 917831738</i>
                            </a>
                            <a href="tel:+86 14714622454">
                                <i>+86 14714622454</i>
                            </a>
                        </div>
                    </div>
                </div>
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
                                            value="申请【泰国】企业资讯规划服务"
                                        />申请【泰国】企业资讯规划服务
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
                                        href="http://tw.digiwin.biz/legal.html"
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

<style lang="scss" scoped>
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

    .title {
        text-align: center;
        font-size: 36px;
        line-height: 1.4;

        i {
            color: #f7800d;
        }
    }

    .sectionDesc-center {
        display: flex;
        flex-direction: column;
        margin: 1em auto .5em;
        text-align: center;
        font-size: 24px;
        line-height: 1.5;
        align-items: center;

        .row {
            display: flex;
            color: #ffae00;
            vertical-align: super;
            font-size: 36px;
            flex-wrap: wrap;
            align-items: center;

            &:last-child {
                align-items: flex-start;
            }

            a {
                color: #ffae00;
            }

            &:first-of-type {
                margin-top: .2em;
            }
        }

        .tels {
            display: flex;
            flex-direction: column;
        }

        i {
            display: flex;
            margin-right: 5px;
            margin-left: .4em;
            align-items: center;

            &::before {
                display: inline-block;
                margin-right: 5px;
                width: 30px;
                height: 30px;
                border: 1px solid #ffae00;
                border-radius: 50%;
                content: '';
                text-align: center;
                font: normal normal normal 18px/1 FontAwesome;
                line-height: 30px;
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

@media (max-width: 768px) {
    #contact .sectionDesc-center .row:not(:first-of-type) {
        margin-top: .2em;
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
        background-color: #b81307;
        color: #fff;
        flex-wrap: wrap;
        justify-content: space-between;

        .demand {
            width: 100%;
        }

        .demand-items {
            display: flex;
            margin: 0 -10px;
            flex-wrap: wrap;
        }

        .demand-item {
            display: flex;
            padding: 10px;
            width: 50%;
            font-size: 20px;
            flex-shrink: 0;
            align-items: baseline;
        }

        .outline {
            position: relative;
            float: left;
            margin: 10px 5px 5px 0;
            text-align: left;
            line-height: 30px;
        }

        .oneline {
            position: relative;
            float: left;
            clear: both;
            margin: 20px 5px 5px 0;
            width: 100%;
            text-align: left;
            line-height: 30px;
        }
    }

    .inforCheck-caption {
        margin-bottom: 10px;
        width: 100%;
    }

    .inputTitle {
        margin-bottom: 4px;
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
        .outline {
            position: relative;
            float: left;
            margin: 0 10px 10px 0;
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

            &:nth-of-type(5n) {
                margin-right: 0;
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
        width: 100%;

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
            margin-top: 10px;
            font-size: 14px;
        }
    }

    .basciInfo {
        .outline {
            position: relative;
            z-index: 1;
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
            background-color: #b81307;
            color: #fff;
            letter-spacing: 5px;
            font-size: 24px;
            font-family: Arial, '微軟正黑體';
            line-height: 50px;
            cursor: pointer;
            -webkit-transition: .5s;
                    transition: .5s;

            &:hover {
                background-color: #850d05;

                /* 亮度(L)-10% */
            }
        }

        .agreeLabel {
            margin-top: 5px;
            text-align: center;
            font-size: 14px;

            [type='checkbox'] {
                vertical-align: middle;
            }
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
            background: url('http://www.digiwin.com/tw/dsc/images/Eform/identCode.jpg') no-repeat center center;
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
            background: url('http://www.digiwin.com/tw/dsc/images/Eform/reloadDark.png') no-repeat center center;
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

@media (max-width: 768px) {
    #form .inforCheck .demand-item {
        width: 100%;
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

            .row {
                font-size: 20px;
            }
            a + a {
                margin-top: 5px;
            }
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

        .basciInfo {
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

            &:hover {
                background-color: #16639f;
            }
        }

        .title {
            margin-bottom: 15px;
            padding-top: 0;
            /* override */
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

        i {
            display: block;
            margin-bottom: 15px;
            height: 24px;
            background: url('/tw/dsc/images/Eform/loading.gif') no-repeat center center;
        }
    }
}
/* #endregion loading */
</style>