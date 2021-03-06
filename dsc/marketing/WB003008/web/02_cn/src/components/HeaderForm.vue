<template>
    <div class="headForm">
        <p class="headForm-title">联系我们</p>
        <ul class="headForm-fields">
            <li>
                <input type="text" v-model.lazy="company" :class="{'is-invalid':companyErr}" />
                <i v-if="!company">公司名称</i>
            </li>
            <li>
                <input type="text" v-model.lazy="person" :class="{'is-invalid':personErr}" />
                <i v-if="!person">联系人</i>
            </li>
            <li>
                <input type="text" v-model.lazy="telephone" :class="{'is-invalid':telephoneErr}" />
                <i v-if="!telephone">联系电话</i>
            </li>
        </ul>
        <a href @click.prevent="submit" class="headForm-submit">立即申请</a>
    </div>
</template>

<script>
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
    data() {
        return {
            company: null,
            companyErr: false,
            person: null,
            personErr: false,
            telephone: null,
            telephoneErr: false,
        }
    },
    computed: {
        dev() {
            return location.hostname !== 'www.digiwin.com';
        },
        testResult() {
            return this.company && !this.companyErr && this.person && !this.personErr && this.telephone && !this.telephoneErr;
        },
        apiURL() {
            return 'https://misws.digiwin.com/WebPageData/Service.asmx/SaveData';
        },
    },
    watch: {
        company() {
            this.companyErr = !this.company.length;
        },
        person() {
            this.personErr = !this.person.length;
        },
        telephone() {
            this.telephoneErr = !this.telephone.length;
        },
    },
    methods: {
        submit() {
            if (this.testResult) {
                $('#loading').fadeIn();

                // ajax mock
                let mock = new MockAdapter(axios, { delayResponse: 2000 });
                mock.onPost(this.apiURL).reply(200, {
                    msg: '',
                    result: '1',
                    farm: 'N'
                });
                if (!this.dev) mock.restore();

                // ajax
                let query = {
                    doc_no: this.getSource(),
                    source: document.title,
                    page_dir: decodeURI(location.href),
                    company: this.company.trim(),
                    telephone: '',
                    extension: '',
                    address: '',
                    contact_person: this.person.trim(),
                    email: '',
                    mobile: '',
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
                axios.post(this.apiURL, params)
                    .then(function (res) {
                        if (res.data.result === '1') {
                            $('#thx').fadeIn();
                        }
                        else {
                            setTimeout(function () {
                                alert('网路错误，请稍后再试！');
                                console.error(res.data.msg);
                            }, 1000);
                        }
                    })
                    .catch(function (err) {
                        setTimeout(function () {
                            alert('网路错误，请稍后再试！');
                            console.error(err);
                        }, 1000);
                    })
                    .finally(function () {
                        $('#loading').fadeOut();
                    });
            }
            else {
                let msg = '尚有联络资料未填写，请重新确认。';
                window.wxc.xcConfirm(msg, window.wxc.xcConfirm.typeEnum.info);
            }
        },
        getSource() {
            let result = /WB\d{6}/.exec(location.pathname);
            return result ? result[0] : document.querySelector('#fromSource').innerText;
        },
    },
}
</script>

<style lang="scss">
$color_1: #333;
$color_2: #000;
$color_3: #ff0028;
$background_color_1: rgba(255, 255, 255, .95);
$background_color_2: transparent;
$background_color_3: #24a3ff;
$background_color_4: #00c3f7;

main {
    .headForm {
        padding: 30px;
        max-width: 360px;
        width: 100%;
        background-color: $background_color_1;
        input {
            padding-right: 10px;
            padding-left: 10px;
            width: 100%;
            height: 41px;
            border-top: none;
            border-right: none;
            border-bottom: 1px solid #d6d6d6;
            border-left: none;
            background-color: $background_color_2;
            font-size: 18px;
            line-height: 41px;
            &:focus {
                outline: none;
                & + i {
                    display: none;
                }
            }
        }
        input.is-invalid {
            color: $color_3;
            & + i {
                color: $color_3;
            }
        }
    }
    .headForm-title {
        margin-bottom: .7em;
        color: $color_1;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
        line-height: 1;
    }
    .headForm-fields {
        li {
            position: relative;
            & + li {
                margin-top: 10px;
            }
        }
        i {
            position: absolute;
            top: 0;
            left: 10px;
            color: $color_2;
            font-size: 18px;
            line-height: 41px;
            pointer-events: none;
        }
    }
    .headForm-submit {
        display: block;
        margin-top: 20px;
        width: 100%;
        height: 56px;
        border: 1px solid $background_color_3;
        border-radius: 3px;
        color: $background_color_3;
        text-align: center;
        letter-spacing: (25 / 1000) + em;
        font-size: 24px;
        line-height: 56px;
        transition: background-color .3s;
        @at-root {
            html.no-mobile main .headForm-submit:hover {
                background-color: $background_color_3;
                color: #fff;
            }
        }
    }
}
</style>