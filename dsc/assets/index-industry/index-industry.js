$(function () {
    let isDev = location.pathname.includes('debug.html');
    
    document.querySelector('#home-industry-content').insertAdjacentHTML('afterbegin', '<div id="home-industry-app"></div>');
    document.querySelector('#phone-industry-content').insertAdjacentHTML('afterbegin', '<div id="phone-industry-app"></div>');
    
    fetch('/tw/dsc/assets/index-industry/index-industry.json')
        .then(res => res.json())
        .then(all => {
            new Vue({
                el: '#home-industry-app',
                data: {
                    limit: 3
                },
                mounted() {
                    this.initComponents();
                },
                computed: {
                    results() {
                        return _.chunk(all, 5);
                    }
                },
                methods: {
                    setClass(index) {
                        return isDev ? {} : index >= this.limit ? { 'home-hiddle': true } : {};
                    },
                    setStyle(index) {
                        return isDev ? {} : index >= this.limit ? { display: 'none' } : {};
                    },
                    setActive(index, itemIdx) {
                        return index === 0 && itemIdx === 0;
                    },
                    // 列數改變時須改寫此處
                    initComponents() {
                        $('#tab01 li').hover(function () {
                            $('#tabbg01 .content')
                                .eq($(this).index())
                                .show()
                                .siblings()
                                .hide();
                            $(this)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                            $('#tabbg02 .content').hide();
                            $('#tabbg03 .content').hide();
                            $('#tabbg04 .content').hide();
                            $('#tabbg05 .content').hide();
                            $('#tab02 li').removeClass('active');
                            $('#tab03 li').removeClass('active');
                            $('#tab04 li').removeClass('active');
                            $('#tab05 li').removeClass('active');
                        });
                        $('#tab02 li').hover(function () {
                            $('#tabbg02 .content')
                                .eq($(this).index())
                                .show()
                                .siblings()
                                .hide();
                            $(this)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                            $('#tabbg01 .content').hide();
                            $('#tabbg03 .content').hide();
                            $('#tabbg04 .content').hide();
                            $('#tabbg05 .content').hide();
                            $('#tab01 li').removeClass('active');
                            $('#tab03 li').removeClass('active');
                            $('#tab04 li').removeClass('active');
                            $('#tab05 li').removeClass('active');
                        });
                        $('#tab03 li').hover(function () {
                            $('#tabbg03 .content')
                                .eq($(this).index())
                                .show()
                                .siblings()
                                .hide();
                            $(this)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                            $('#tabbg01 .content').hide();
                            $('#tabbg02 .content').hide();
                            $('#tabbg04 .content').hide();
                            $('#tabbg05 .content').hide();
                            $('#tab01 li').removeClass('active');
                            $('#tab02 li').removeClass('active');
                            $('#tab04 li').removeClass('active');
                            $('#tab05 li').removeClass('active');
                        });
                        $('#tab04 li').hover(function () {
                            $('#tabbg04 .content')
                                .eq($(this).index())
                                .show()
                                .siblings()
                                .hide();
                            $(this)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                            $('#tabbg01 .content').hide();
                            $('#tabbg02 .content').hide();
                            $('#tabbg03 .content').hide();
                            $('#tabbg05 .content').hide();
                            $('#tab01 li').removeClass('active');
                            $('#tab02 li').removeClass('active');
                            $('#tab03 li').removeClass('active');
                            $('#tab05 li').removeClass('active');
                        });
                        $('#tab05 li').hover(function () {
                            $('#tabbg05 .content')
                                .eq($(this).index())
                                .show()
                                .siblings()
                                .hide();
                            $(this)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                            $('#tabbg01 .content').hide();
                            $('#tabbg02 .content').hide();
                            $('#tabbg03 .content').hide();
                            $('#tabbg04 .content').hide();
                            $('#tab01 li').removeClass('active');
                            $('#tab02 li').removeClass('active');
                            $('#tab03 li').removeClass('active');
                            $('#tab04 li').removeClass('active');
                        });
                    }
                },
                template: `
                    <div>
                        <div v-for="(result, index) in results" class="home-box" :class="setClass(index)" :style="setStyle(index)">
                            <!-- 單排icon -->
                            <ul :id="'tab0' + (index + 1)" :class="'tab container clearfix tab0' + (index + 1)">
                                <li v-for="(items, itemIdx) in result" :class="{active: setActive(index, itemIdx)}">
                                    <div class="picbox">
                                        <figure class="pic pic01"><img :src="'/tw/dsc/images/index/home-icon' + items.id + '.png'" class="vcenter" /></figure>
                                        <figure class="pic pic02"><img :src="'/tw/dsc/images/index/home-icon' + items.id + 'h.png'" class="vcenter" /></figure>
                                    </div>
                                    <div class="title">{{ items.title }}</div>
                                </li>
                            </ul>
                            <!-- hover區塊 -->
                            <div :id="'tabbg0' + (index + 1)" class="tabbg">
                                <div v-for="(items, index) in result" :class="'content hbg0' + (index + 1)">
                                    <ul class="container">
                                        <!-- 左側 -->
                                        <li class="li01">
                                            <h3>
                                                <a :href="items.contents.main.url">{{ items.contents.main.title }}</a>
                                            </h3>
                                            <p>{{ items.contents.main.content }}</p>
                                            <a :href="items.contents.main.url" class="more">了解更多</a>
                                        </li>
                                        <!-- 右側 -->
                                        <li class="li02">
                                            <div v-for="detail in items.contents.details">
                                                <h3>
                                                    <a :href="detail.url" :target="detail.target">{{ detail.title }}</a>
                                                </h3>
                                                <p>{{ detail.content }}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            });

            new Vue({
                el: '#phone-industry-app',
                data: {
                    limit: 15
                },
                mounted() {
                    this.initComponents();
                },
                computed: {
                    results() {
                        return all;
                    }
                },
                methods: {
                    setClass(index) {
                        return isDev ? {} : index >= this.limit ? { 'phone-hiddle': true } : {};
                    },
                    setStyle(index) {
                        return isDev ? {} : index >= this.limit ? { display: 'none' } : {};
                    },
                    initComponents() {
                        $('.phone-industry li .title').click(function () {
                            $(this)
                                .parent('li')
                                .toggleClass('active')
                                .siblings()
                                .removeClass('active');
                            $(this)
                                .next('div')
                                .stop()
                                .slideToggle(500);
                            $(this)
                                .parents('li')
                                .siblings()
                                .children('.box')
                                .stop()
                                .slideUp(500);
                        });
                    }
                },
                template: `
                    <ul>
                        <li v-for="(result, index) in results" :class="setClass(index)" :style="setStyle(index)">
                            <span class="title"><img :src="'/tw/dsc/images/index/home-icon' + result.id + '.png'" /> {{ result.title }}</span>
                            <div class="box">
                                <h4>
                                    <a :href="result.contents.main.url">{{ result.contents.main.title }}</a>
                                </h4>
                                <p>{{ result.contents.main.content }}</p>
                                <template v-for="detail in result.contents.details">
                                    <h4>
                                        <a :href="detail.url" :target="detail.target">{{ detail.title }}</a>
                                    </h4>
                                    <p>{{ detail.content }}</p>
                                </template>
                            </div>
                        </li>
                    </ul>
                `
            });
        });
});