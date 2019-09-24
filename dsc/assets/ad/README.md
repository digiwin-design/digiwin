# 運作方式
透過共用 JS 將目前網址與 db.json 中的插入網址做比對，如符合則在目前網頁插入元件。

# db.json
```js
[
    {
        "url": "/tw/dsc/solution/WB002675/WB00267501", // 插入網址
        "adUrl": "http://bit.ly/2lx8rau", // 廣告連結
        "imgSrc": "/tw/dsc/assets/ad/images/WB002993.jpg", // 廣告圖片
        "startTime": "2019-09-03", // 廣告開始時間 (00:00)
        "endTime": "2019-09-25" // 廣告結束時間 (00:00)
    }
]
```