new Vue({
    el: '#app',
    data() {
        return {
            newContent: {
                id: null,
                title: '',
                key: '',
            },
            content: [],
        };
    },
    computed: {
        firebaseConfig() {
            return {
                apiKey: 'AIzaSyAHt_p6RibnGGyi2PWES5kQi7K5-m_9lNs',
                authDomain: 'digiwin-4a7d3.firebaseapp.com',
                databaseURL: 'https://digiwin-4a7d3.firebaseio.com',
                projectId: 'digiwin-4a7d3',
                storageBucket: 'digiwin-4a7d3.appspot.com',
                messagingSenderId: '306272678210',
                appId: '1:306272678210:web:d0f8a849f5902ba0e498db'
            };
        },
        // 檢查ID是否重複
        existed() {
            let result = true;
            for (const key in this.content) {
                if (this.content.hasOwnProperty(key)) {
                    const element = this.content[key];
                    if (element.id === this.newContent.id) {
                        result = false;
                        break;
                    }
                }
            }
            return result;
        }
    },
    methods: {
        submitHandler() {
            if (!this.existed) {
                alert(`${this.newContent.id} 的 ID 已存在`);
                this.$refs.id.select();
                return;
            }
            let ref = firebase.database().ref('resources');
            ref.push(this.newContent);
            this.newContent.id = null;
            this.newContent.title = '';
            this.$refs.id.focus();
        },
        getContent() {
            let ref = firebase.database().ref('resources');

            // 依ID排序順序(預設升冪)存入陣列後反轉
            ref.orderByChild('id').on('value', snapshot => {
                let tempContent = [];
                snapshot.forEach(el => {
                    let { id, title } = el.val();
                    tempContent.push({
                        id,
                        title,
                        key: el.key
                    });
                });
                tempContent.reverse();

                this.content = tempContent;
            });
        },
        deleteHandler(key) {
            if (confirm('確定刪除？')) {
                let ref = firebase.database().ref(`resources/${key}`);
                ref.remove();
            }
        },
    },
    created() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(this.firebaseConfig);
        }
        this.getContent();
    },
});