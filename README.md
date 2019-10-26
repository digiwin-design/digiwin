# 主網站元件/檔案
| 名稱 | 位置 | 備註
| -------- | -------- | --------
| 右下角浮動廣告 | /tw/dsc/assets/ad/ |
| 活動結束 Banner | /tw/dsc/assets/EventEnd/ |
| 各行各業區塊 | /tw/dsc/assets/index-industry/ | 首頁使用
| 各行各業區塊 | /tw/dsc/assets/industry-list/ | IT 編列預算使用
| 各行各業區塊 | /tw/dsc/assets/industry-list-v2/ | 行業使用
| LINE 登入&訂閱 | /tw/dsc/assets/lineMember/ |
| 繁/簡體站跳轉提示 | /tw/dsc/assets/popup/ |
| 次級選單 | /tw/dsc/assets/submenu/ |
| 次級選單手機版 | /tw/dsc/assets/submenu-spa/ | 
| 全站共用 JS | /tw/dsc/js/common.min.js<br>(source: /tw/dsc/js/common.js ) |
| 全站共用 CSS | /tw/dsc/css/all.css |
| 後台上稿用重置樣式 | /tw/dsc/css/reboot.css<br>(source: /tw/dsc/css/reboot.scss) |
| 研討會樣版 | /tw/dsc/template/seminar/ |
| 文章廣告 Banner | /tw/dsc/assets/article-ad/ |
| 資料下載標題設置 | /tw/dsc/assets/resources/ | 資料來源為 Firebase

# 主網站分類
| 名稱 | 位置 | 備註
| -------- | -------- | --------
| 文章 | /tw/article/ | 實際網址@README.md
| 活動 | /tw/dsc/activity/ |
| 企業通電子報 | /tw/dsc/digital-newspaper/ |
| 企業通雜誌 | /tw/dsc/mag/ |
| 賀卡 | /tw/dsc/card/ |
| 工業 4.0 | /tw/dsc/industry4/ |
| CPL (實驗頁) | /tw/dsc/marketing/ |
| 方案/行業 | /tw/dsc/solution/ |
| 行業手機版 | /tw/dsc/solution/mobile/ |
| ERP | /tw/ERP/ |
| 產品 | /tw/software/ |
| 測試用 | /tw/dsc/dev/ |
| 404 Page | /tw/dsc/404.html | 

# 其它網站
## 工業 4.0
URL：http://industry4.digiwin.com
### 遠端桌面
- IP：13.76.47.213
- 使用者名稱：Industrie
- 密碼：System@dmin00
- 網站位置：F:\industry4
## 人才招募網
- URL：http://career.digiwin.com
- 後台
  - URL：http://career.digiwin.biz/tw/wp-login.php
  - 帳號：admin
  - 密碼：misadmin


# API
## 需求諮詢 (e化單)
- URL
  - 正式：http://misws.digiwin.com/WebPageData/Service.asmx/SaveData
  - 測試：https://misws.digiwin.com/WebPageDataTest/Service.asmx/SaveData
- Method：POST
- Request Sample
```js
{
    data: {
        {
            doc_no: "WB002554", // 文宣代號
            source: "塑膠業管理次料成本、模具管理、訂單自動排程、製造現場管理...", // 資料頁面來源
            page_dir: "http://www.digiwin.com/solution/WB002554/WB00255401.htm", // 網頁位置
            company: "明明塑膠廠有限公司", // 公司名稱
            telephone: "（02)29826682", // 聯絡電話
            extension: "", // 分機
            address: "", // 公司地址
            contact_person: "張梅芬", // 聯絡人
            email: "mmp88.a66@msa.hinet.net", // E-mail
            mobile: "", // 行動電話
            department: "採購", // 部門
            job_title: "主管", // 索取職稱
            req_sys: "", // 需求內容
            dm_ask: "Y", // 其它
            get_file: "", // 資料索取
            query: "", // 索取內容
            other: "", // 諮詢內容
            country: "" // 跨國企業
        }
    }
}
```
- Response Sample
```json
{
    "msg": "",
    "result": "1", // 1：成功 0：失敗
    "farm": "N"
}
```
### 信件通知人
- 正式  
潘家鴈、李孟純、石渼華、黃郁雯、林佩君、張琇媚、黃子芸、沈家如、蔡任維、宋冠樺、李宜芳、王齡翊
- 正式 (東南亞實驗頁)  
宋冠樺、李孟純、洪之文、石渼华、張琇媚、黃子芸、李宜芳、王齡翊
- 測試  
陳琬婷、林韓蕙、蔡承真、李孟純、謝元中

## 線上活動報名
### 取得活動資訊
- URL：
  - 正式：http://acpms.digiwin.com/WebRegACT/WSBridge.aspx
  - 測試：http://misws.digiwin.com/RegisterACTTEST/RegACT.asmx/GetACTData
- Method：GET
- Request Sample  
  - 正式：`http://acpms.digiwin.com/WebRegACT/WSBridge.aspx?data={"act_id":"2019090003"}`
  - 測試：`http://misws.digiwin.com/RegisterACTTEST/RegACT.asmx/GetACTData?data={"act_id":"2019090003"}`
- Response Sample
```json
{
    "act_id": "2019090003", // 活動代號
    "act_theme": "打造智慧化扣件產業價值鏈生態系-示範產線觀摩暨交流媒合會", // 活動主題
    "act_cnt": 3, // 場次數量
    "act_detail": [
        {
            "subid": "07", // 場次代號
            "info": "高雄 2019-10-15 (二) 09:30 ~ 12:10", // 場次資訊
            "act_date": "20191015", // 場次日期
            "venue": "上午場-傳統產業創新加值中心 (高雄市楠梓區朝仁路55號)", // 場次地點
            "meal": "Y", // 供餐
            "live": "N" // 供宿
        }
    ],
    "act_from": [
        {
            "val": "001", // 來源代號
            "name": "郵寄邀請函" // 來源名稱
        }
    ]
}
```
### 送出報名內容
- URL
  - 正式：http://acpms.digiwin.com/WebRegACT/WSBridge.aspx
  - 測試：http://misws.digiwin.com/RegisterACTTEST/RegACT.asmx/SaveData
- Method：POST
- Request Sample
``` js
{
    data: {
        act_id: "", // 活動代號
        company: "test", // 公司名稱
        unino: "", // 統一編號
        mailcode: "", // 郵遞區號
        address: "", // 地址
        act_attendee: [
            {
                name: "test", // 姓名
                dept: "", // 部門
                job: "101", // 職稱
                job_note: "", // 職稱(其他)
                job_title: "E03", // 職能別
                jobt_note: "", // 職能別(其他)
                mail: "test@test.test", // E-mail
                mobile: "0987654321", // 行動電話
                tel: "", // 電話
                ext: "", // 分機
                fax: "", // 傳真
                act_subid: "04", // 場次代號
                act_date: "20190918", // 場次日期
                meal: 1, // 1：葷 2：素 3：不吃
                live: "Y" // Y：住宿 N：不住宿
            }
        ],
        act_from: "001郵寄邀請函", // 訊息來源
        source: "index", // 前端網頁來源代號
        lineId: "" // userId
    }
}
```
- Response Sample
```json
{
    "msg": "",
    "result": "1", // 1：成功 0：失敗
    "custno": "B200003270"
}
```
## LINE 登入紀錄
- URL：http://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save
- Method：POST
- Request Sample
```js
let data = {
    lineId: 'U807f121a6ca7f7b808a96e23d5517b8c', // LINE ID
    source: 'https://www.digiwin.com/tw/dsc/dev/demo/line_member' // 觀看來源網頁位址
};
const params = new URLSearchParams();
params.append('', JSON.stringify(data));
axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save', params)
    .then(res => {
        // get result
    });
```
- Response Sample
```json
{
    "result": 1, // 1：成功 0：失敗
    "msg": "" // 錯誤訊息
}
```
## LINE 訂閱報名紀錄
- URL：http://misws.digiwin.com/SocialMediaMarketing/api/member/Save
- Method：POST
- Request Sample
```js
let data = {
    lineId: "aabbcc123", // LINE ID
    lineName: "UserName", // LINE 名稱
    realName: "TheReal", // 真實姓名
    eMail: "aaa@gmail.com", // EMail
    mobile: "0912345678", // 行動電話
    fbId: "", // Facebook ID
    fbName: "", // Facebook 名稱
    companyCode: "28682266", // 統一編號
    companyName: "鼎新", // 公司名稱
    job: "", // 職稱
    acpCusNo: "999999999", // 潛客代號
    memEDM: [ // 訂閱EDM
        {
            orderEDM: "企業數位化轉型", // EDM代號
            source: "https:// www.digiwin.com/tw" // 訂閱來源網頁位址
        }
    ],
    memEvent: [ // 活動報名
        {
            eventDate: "2019/06/06", // 活動日期
            eventCode: "28682266", // 活動代號
            eventName: "特別活動" // 活動名稱
        }
    ]
};
const params = new URLSearchParams();
params.append('', JSON.stringify(data));
axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/member/Save', params)
    .then(function (res) {
        // get result
    });
```
- Response Sample
```json
{
    "result": 1, // 1：成功 0：失敗
    "msg": "" // 錯誤訊息
}
```
## 工業 4.0 評量 (評量 1.0)
- URL：http://industry4.digiwin.com/DSCindustry/Ind.asmx/SendData
- Method：GET
- Request Sample
```js
let data = { time: "60684", username: "test", company: "test", dept: "test", job: "test", mail: "test@test.test", tel: "15367914640", industry: "C27", indusname: "電子與光電元件/零組件", Q1: "-1", Q2: "-1", Q3: "-1", Q4: "-1", Q5: "-1", Q6: "-1", Q7: "-1", Q8: "-1", Q9: "-1", Q10: "-1", Q11: "-1", Q12: "-1", Q13: "-1", Q14: "-1", Q15: "-1", Q16: "-1", Q17: "-1", Q18: "-1", Q191: "-1", Q192: "-1", Q193: "-1", Q194: "-1", Q201: "-1", Q202: "-1", Q203: "-1", Q204: "-1", Q211: "-1", Q212: "-1", Q213: "-1", Q214: "-1" };

$.support.cors = true;
$.ajax({
    type: 'GET',
    url: 'http://industry4.digiwin.com/DSCindustry/Ind.asmx/SendData',
    dataType: 'jsonp',
    data: { data },
    success: function (res) {
        // get result
    }
});
```
- Response Sample
```js
jQuery111209246674373720454_1569231947688({ "Msg": "", "QNo": "1909230012", "RptALL": "1909230012_ee297835_ALL.pdf", "RptALL_P1": "1909230012_ee297835_ALL_P1.jpg", "RptALL_P2": "1909230012_ee297835_ALL_P2.jpg", "W1": "n", "A1": "n", "P1": "n", "W2": "n", "A2": "n", "P2": "n", "W3": "n", "A3": "n", "P3": "n", "tit1": "信邦換軌轉型「三級跳」 見證小兵立大功的奇蹟", "url1": "http://mag.digiwin.biz/?p=138", "pic1": "http://mag.digiwin.biz/mag/wp-content/uploads/2015/08/138.jpg", "tit2": "智邦科技 實現產能最佳利用率，提升訂單能見度", "url2": "http://mag.digiwin.biz/?p=2507", "pic2": "http://mag.digiwin.biz/mag/wp-content/uploads/2015/02/2507.jpg", "tit3": "艾碼科技 智慧時代的產能協調者", "url3": "http://mag.digiwin.biz/?p=744", "pic3": "http://mag.digiwin.biz/mag/wp-content/uploads/2015/09/list09.png" });
```