# 運作方式
1. 在需要次選單的頁面(頂部底部模板)中引用 submenu.min.js 及 submenu.css 後插入 template。
1. 將網址中的文宣編號與 submenu.json 做比對，如符合則產生對應的標題文字及選單內容。

# 注意事項
透過 npm scripts (babel:submenu-spa) 編譯 submenu.js

# submenu.json
```json
[
    {
        "id": "", // 文宣編號
        "title": "", // 子頁面標題
        "menus": [
            {
                "text": "", // 選單文字
                "url": "", // 選單/錨點連結(錨點key改為anchor)
                "dropdowns": [
                    {
                        "text": "", // 子選單文字
                        "url": "", // 子選單連結
                        "target": "" // 子選單連結開啟方式(未指定預設_self)
                    }
                ]
            }
        ],
        "anchors": [ // 無錨點可省略
            {
                "url": "", // 錨點連結
                "index": 0 // 選單順序
            }
        ]
    }
]
```