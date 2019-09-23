# 共用元件/檔案
| 名稱 | 位置 | 備註
| -------- | -------- | --------
| 右下角浮動廣告 | tw\dsc\assets\ad\ |
| 活動結束 Banner | tw\dsc\assets\EventEnd\ |
| 各行各業區塊 | tw\dsc\assets\index-industry\ | 首頁使用
| 各行各業區塊 | tw\dsc\assets\industry-list\ | IT 編列預算使用
| 各行各業區塊 | tw\dsc\assets\industry-list-v2\ | 行業使用
| LINE 登入 | tw\dsc\assets\lineMember\ |
| 繁/簡體站跳轉提示 | tw\dsc\assets\popup\ |
| 次級選單 | tw\dsc\assets\submenu\ |
| 次級選單手機版 | tw\dsc\assets\submenu-spa\ | 
| 全站共用 JS | tw\dsc\js\common.min.js<br>(Source: tw\dsc\js\common.js ) |
| 後台上稿用重置樣式 | tw\dsc\css\reboot.css<br>(Source: tw\dsc\css\reboot.scss) |
| 研討會樣版 | tw\dsc\template\seminar\ |

# 網站分類
| 名稱 | 位置 | 備註
| -------- | -------- | --------
| 文章 | tw\article\ | 實際網址@README.md
| 活動 | tw\dsc\activity\ |
| 企業通電子報 | tw\dsc\digital-newspaper\ |
| 賀卡 | tw\dsc\card\ |
| 工業 4.0 | tw\dsc\industry4\ |
| CPL (實驗頁) | tw\dsc\marketing\ |
| 方案/行業 | tw\dsc\solution\ |
| 行業手機版 | tw\dsc\solution\mobile\ |
| ERP | tw\ERP\ |
| 產品 | tw\software\ |
| 測試用 | tw\dsc\dev\ |
| 404 Page | tw\dsc\404.html | 

# API
## 需求諮詢 (e化單)
送出需求內容
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
    "act_id": "2019090003",
    "act_theme": "打造智慧化扣件產業價值鏈生態系-示範產線觀摩暨交流媒合會",
    "act_cnt": 3,
    "act_detail": [
        {
            "subid": "07",
            "info": "高雄 2019-10-15 (二) 09:30 ~ 12:10",
            "act_date": "20191015",
            "venue": "上午場-傳統產業創新加值中心 (高雄市楠梓區朝仁路55號)",
            "meal": "Y", // 是否提供餐點
            "live": "N" // 是否提供住宿
        }
    ],
    "act_from": [
        {
            "val": "001",
            "name": "郵寄邀請函"
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
        act_id: "",
        company: "test",
        unino: "",
        mailcode: "",
        address: "",
        act_attendee: [
            {
                name: "test",
                dept: "",
                job: "101",
                job_note: "",
                job_title: "E03",
                jobt_note: "",
                mail: "test@test.test",
                mobile: "0987654321",
                tel: "",
                ext: "",
                fax: "",
                act_subid: "04",
                act_date: "20190918",
                meal: 1, // 1：葷 2：素 3：不吃
                live: "Y" // Y：住宿 N：不住宿
            }
        ],
        act_from: "001郵寄邀請函",
        source: "index",
        lineId: ""
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