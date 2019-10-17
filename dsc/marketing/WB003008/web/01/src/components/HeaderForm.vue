<template>
    <div class="headForm">
        <p class="headForm-title">索取資料</p>
        <ul class="headForm-fields">
            <li>
                <input type="text" v-model.lazy="person" :class="{'is-invalid':personErr}" />
                <i v-if="!person">聯絡人</i>
            </li>
            <li>
                <input type="text" v-model.lazy="phoneNum" :class="{'is-invalid':phoneNumErr}" />
                <i v-if="!phoneNum">聯絡電話</i>
            </li>
        </ul>
        <a href @click.prevent="submit" class="headForm-submit">立即送出</a>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            person: null,
            personErr: false,
            phoneNum: null,
            phoneNumErr: false,
        }
    },
    computed: {
        testResult() {
            return Boolean(this.person) && !this.personErr && Boolean(this.phoneNum) && !this.phoneNumErr;
        }
    },
    watch: {
        person() {
            this.personErr = !this.person.length;
        },
        phoneNum() {
            this.phoneNumErr = !(/^\d{8,}$/.test(this.phoneNum.trim()));
        },
    },
    methods: {
        submit() {
            if (this.testResult) {
                $('#loading').fadeIn();
                let query = {
                    doc_no: document.querySelector('#fromSource').innerText,
                    source: document.title,
                    page_dir: decodeURI(location.href),
                    company: '',
                    telephone: '',
                    extension: '',
                    address: '',
                    contact_person: this.person.trim(),
                    email: '',
                    mobile: this.phoneNum.trim(),
                    department: '',
                    job_title: '',
                    req_sys: '',
                    dm_ask: '',
                    get_file: '',
                    query: '',
                    other: '',
                    country: '',
                };
                const params = new URLSearchParams();
                params.append('data', JSON.stringify(query));
                axios.post('https://misws.digiwin.com/WebPageData/Service.asmx/SaveDat', params)
                    .then(function (res) {
                        if (res.data.result === '1') {
                            $('#thx').fadeIn();
                        }
                        else {
                            setTimeout(function () {
                                alert('網路錯誤，請稍後再試！');
                                console.error(err);
                            }, 1000);
                        }
                    })
                    .catch(function (err) {
                        alert('網路錯誤，請稍後再試！');
                        console.error(err);
                    })
                    .finally(function () {
                        $('#loading').fadeOut();
                    });
            }
            else {
                let msg = '尚有聯絡資料未填寫或Email格式錯誤，請重新確認。';
                window.wxc.xcConfirm(msg, window.wxc.xcConfirm.typeEnum.info);
            }
        },
    },
}
</script>

<style>
main .headForm {
    margin: 0 auto;
    padding: 50px 30px 0;
    width: 360px;
    background-color: #fff;
}
@media (min-width: 769px) {
    main .headForm {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}
main .headForm-title {
    margin-bottom: 1em;
    color: #333;
    text-align: center;
    font-size: 30px;
    line-height: 1;
}
main .headForm-fields li {
    position: relative;
}
main .headForm-fields li + li {
    margin-top: 10px;
}
main .headForm-fields li i {
    position: absolute;
    top: 0;
    left: 10px;
    color: #777;
    font-size: 16px;
    line-height: 41px;
    pointer-events: none;
}
main .headForm input {
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;
    height: 41px;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #777;
    border-left: none;
    background-color: #f5f5f5;
    font-size: 16px;
    line-height: 41px;
}
main .headForm input:focus + i {
    display: none;
}
main .headForm input.is-invalid,
main .headForm input.is-invalid + i {
    color: #ff0028;
}
main .headForm-submit {
    display: block;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 0;
    background-color: #0096ff;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    transition: background-color 0.3s;
}
html.no-mobile main .headForm-submit:hover {
    background-color: #00c3f7;
}
</style>