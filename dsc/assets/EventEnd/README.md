# 運作方式
在個別頁面中置入樣版及引用相關資源，並將傳入參數與 db.json 做比對 (依據 endDate 參數控制顯示或隱藏)。

# db.json
```js
[
    {
        "name": "工業4.0", // 識別用
        "page": "industry4", // 與傳入的 page 參數做比對，如比對成功則使用以下連結
        "href": "http://industry4.digiwin.com/activity.htm#contact"
    }
]
```