(function () {
    // dev
    // let dir = '';
    // let path = '/tw/dsc/solution/mobile/WB002839/index#/merchandise'.split('/');
    // let hash = '';

    // final
    let dir = '/tw/dsc/assets/submenu-spa/';
    let path = location.href.split('/');

    let id = path.find(value => value.startsWith('WB'));
    let page = '#/' + path[path.length - 1].replace(/(.html|.htm)/g, '');
    let header = document.querySelector('.header-box header');

    if (header !== null) {
        new Vue({
            el: '#submenu',
            data: {
                results: [],
                currentPage: '',
                activeIndex: 0,
                isActive: false
            },
            methods: {
                // 取得選單內容
                getData() {
                    fetch(`${dir}submenu.json`)
                        .then(res => res.json())
                        .then(res => {
                            this.results = res.filter(
                                value => value.id === id
                            );
                            if (this.results.length) {
                                this.setActiveIndex();
                                this.isActive = true;
                            }
                        });
                },
                // 設定目前頁面名稱(不含首頁)
                setCurrentPage(text) {
                    if (text && !text.match(/首頁$/)) {
                        this.currentPage = text;
                    }
                    else {
                        this.currentPage = '';
                    }
                },
                // 設定目前選單樣式
                setActiveIndex() {
                    this.results[0].menus.some((menu, index) => {
                        if (menu.url === page) {
                            this.activeIndex = index;
                            this.setCurrentPage(menu.text);
                            return true;
                        } else if (menu.dropdowns) {
                            menu.dropdowns.forEach(dropdown => {
                                if (dropdown.url === page) {
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
                linkTo({ url, target, anchor }) {
                    if (target) {
                        window.open(`${url}`, target);
                    }
                    else if (url && !anchor) {
                        window.open(`${url}`, '_self');
                        this.setPageInfo(url);
                    }
                    else if (!url && anchor) {
                        let targetPos = $(anchor).offset().top;
                        let offset = $('.page-submenu').outerHeight();
                        $('html, body').animate({ scrollTop: targetPos - offset });
                    }
                    else if (url && anchor) {
                        window.open(`${url}`, '_self');
                        setTimeout(() => {
                            let targetPos = $(anchor).offset().top;
                            let offset = $('.page-submenu').outerHeight();
                            $('html, body').animate({ scrollTop: targetPos - offset });
                        }, 100);
                        this.setPageInfo(url);
                    }
                },
                // 設定頁面資訊
                setPageInfo(url) {
                    page = url;
                    this.setActiveIndex();
                },
                openDropdown(event) {
                    $(event.target).parents('li').addClass('is-open').siblings().removeClass('is-open');
                },
                closeDropdownHandler(event) {
                    if ($(event.target).parents('.page-submenubox').length !== 1) {
                        $('.page-submenu-list > li').removeClass('is-open');
                    }
                },
            },
            created() {
                header.insertAdjacentHTML('beforeend', '<div id="submenu"></div>');
                this.getData();
            },
            mounted() {
                document.querySelector('body').addEventListener('touchstart', (event) => this.closeDropdownHandler(event));
            },
            beforeDestroy() {
                document.querySelector('body').removeEventListener('touchstart');
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
                                            <a :href="menu.url" @click.prevent="linkTo(menu)" @touchstart="openDropdown">{{menu.text}}</a>
                                        </span>
                                        <ul v-if="menu.dropdowns" class="page-submenu-dropdown">
                                            <li v-for="dropdown in menu.dropdowns">
                                                <a :href="dropdown.url" @click.prevent="linkTo(dropdown)">{{dropdown.text}}</a>
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
    }
})();