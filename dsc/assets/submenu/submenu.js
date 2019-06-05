(function () {
    // dev
    // let dir = '';
    // let path = '/tw/dsc/solution/WB002554/WB00255401_Issue'.split('/');
    // let hash = '#contact';

    // final
    let dir = '/tw/dsc/assets/submenu/';
    let path = location.pathname.split('/');
    let hash = location.hash;

    let id = path[path.length - 2];
    let page = path[path.length - 1].replace(/(.html|.htm)/g, '');
    let header = document.querySelector('.header-box header');
    
    if (header === null) return;
    
    new Vue({
        el: '#submenu',
        data: {
            results: [],
            currentPage: '',
            activeIndex: 0,
            isActive: false,
        },
        computed: {
            submenu() {
                return document.querySelector('.page-submenu');
            }
        },
        created() {
            header.insertAdjacentHTML('beforeend', '<div id="submenu"></div>');
        },
        mounted() {
            this.getData();
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollHandler);
        },
        methods: {
            // 取得選單內容
            getData() {
                fetch(`${dir}submenu.json`)
                    .then(res => res.json())
                    .then(res => {
                        this.results = res.filter(value => value.id === id);
                        if (!this.results.length) return;
                        this.setActiveIndex();
                        this.isActive = true;
                        
                        // 依據選單高度設定main上方間距
                        window.addEventListener('load', this.resizeHandler);
                        window.addEventListener('resize', this.resizeHandler);
                        
                        // 設定頁面捲動時的錨點樣式
                        if (this.results[0].anchors) {
                            window.addEventListener('scroll', this.scrollHandler);
                        }
                    });
            },
            // 設定目前頁面名稱(不含首頁)
            setCurrentPage(text) {
                if (text && !text.match(/首頁$/)) {
                    this.currentPage = text;
                }
            },
            // 設定目前選單樣式
            setActiveIndex() {
                this.results[0].menus.forEach((menu, index) => {
                    if (menu.url === page || menu.url === page + hash) {
                        this.activeIndex = index;
                        this.setCurrentPage(menu.text);
                    } else if (menu.dropdowns) {
                        menu.dropdowns.forEach(dropdown => {
                            if (dropdown.url === page + hash) {
                                this.activeIndex = index;
                                this.setCurrentPage(dropdown.text);
                            }
                        });
                    }
                });
            },
            // 設定標題文字
            setTitle(value) {
                return this.currentPage
                    ? `${value} / ${this.currentPage}`
                    : value;
            },
            // 判斷連結開啟方式
            linkTo(url, target) {
                let urlArr = url.split('#');
                if (urlArr[0] === '' || urlArr[0] === page) {
                    let $target = $(`#${urlArr[1]}`);
                    if ($target.length) {
                        let targetPos = $target.offset().top;
                        $('html, body').animate({
                            scrollTop: targetPos - 50
                        });
                    }
                } else if (target) {
                    window.open(url, target);
                } else {
                    window.open(url, '_self');
                }
            },
            getScrollPos(el, offset, callback) {
                if (!$(el).length) return;
                let scrollTop = $(window).scrollTop();
                let target = $(el).offset().top - offset;
                if (scrollTop >= target) {
                    callback();
                }
            },
            scrollHandler() {
                let anchors = this.results[0].anchors;
                let offset = this.submenu.offsetHeight;
                anchors.forEach(item => {
                    this.getScrollPos(item.url, offset, () => {
                        $(this.submenu).addClass('active')
                            .find('.page-submenu-list > li').removeClass('active')
                            .eq(item.index).addClass('active');
                    });
                });
            },
            resizeHandler() {
                let menuHeight = this.submenu.offsetHeight;
                let main = document.querySelector('main');
                if (main === null) return;
                main.style.paddingTop = menuHeight > 50 ? '50px' : 0;
            }
        },
        template: `
            <div class="page-submenubox" :class="{active:isActive}">
                <div class="page-submenu">
                    <div class="container">
                        <template v-for="result in results">
                            <h2>{{setTitle(result.title)}}</h2>
                            <ul class="page-submenu-list">
                                <li v-for="(menu, index) in result.menus">
                                    <span :class="{active:index===activeIndex}">
                                        <a :href="menu.url" @click.prevent="linkTo(menu.url, menu.target)">{{menu.text}}</a>
                                    </span>
                                    <ul v-if="menu.dropdowns" class="page-submenu-dropdown">
                                        <li v-for="dropdown in menu.dropdowns">
                                            <a :href="dropdown.url" @click.prevent="linkTo(dropdown.url, dropdown.target)">{{dropdown.text}}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        `
    });
})();