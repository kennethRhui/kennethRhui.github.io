// --- QUESTION BANK ---
// Add all your questions here.
// chapterRef refers to the section in your "113年保險學期末考重點.pdf"
// sourcePage refers to the page in "CH_ALL.pdf" where the answer is detailed.
const questionBank = [
    {
        question: "再保險契約的特性中，原保險契約的被保險人對再保險人是否擁有賠償請求權？",
        options: ["有直接請求權", "無賠償請求權", "視情況而定", "需經原保險人同意"],
        answer: "無賠償請求權",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 1"
    },
    {
        question: "比例性再保險與非比例性再保險的主要差異基礎為何？",
        options: ["保險期間", "保險事故類型", "損失分攤方式", "被保險人年齡"],
        answer: "損失分攤方式",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4, 6"
    },
    {
        question: "溢額再保險(Surplus Re)中，再保險人承擔責任的基礎是？",
        options: ["原保險人所有承保業務的固定比例", "原保險人自留額超過的部分", "所有損失金額的一定比例", "僅限巨災損失"],
        answer: "原保險人自留額超過的部分",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4-5"
    },
    {
        question: "住宅火災保險中，建築物內動產自動涵蓋的保險金額，最高以該建築物保險金額的多少為限，且不超過特定金額？",
        options: ["20%，最高60萬元", "30%，最高80萬元", "40%，最高100萬元", "50%，最高120萬元"],
        answer: "30%，最高80萬元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 25 (大綱: 建築物 30%及 80萬為限)"
    },
    {
        question: "住宅火災保險的保險期間通常為多久？",
        options: ["六個月", "一年", "二年", "三年"],
        answer: "一年",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 24"
    },
    {
        question: "住宅火災保險中，臨時住宿費用每日最高賠償金額為何？",
        options: ["3000元", "5000元", "8000元", "10000元"],
        answer: "5000元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 25 (大綱: 每日5000元, 最高20萬元)"
    },
    {
        question: "住宅火災保險60%共保條款，其理賠計算基礎中分母的「建築物重置成本」應乘以多少百分比？",
        options: ["50%", "60%", "80%", "100%"],
        answer: "60%",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 24-25"
    },
    {
        question: "保險標的物所有權移轉後，若無特別約定，保險契約效力將於所有權移轉之次日中午12時起多久內終止？",
        options: ["一個月", "二個月", "三個月", "六個月"],
        answer: "三個月",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 29 (大綱 item 6)"
    },
    {
        question: "住宅地震基本保險，每一事故的保險金額最高為新台幣多少元？",
        options: ["100萬元", "120萬元", "150萬元", "200萬元"],
        answer: "150萬元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 28"
    },
    {
        question: "甲式車體損失險與乙式車體損失險相比，甲式獨有的承保範圍是下列何者？",
        options: ["火災", "閃電、雷擊", "第三者非善意行為", "碰撞、傾覆"],
        answer: "第三者非善意行為",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 8-9"
    },
    {
        question: "被保險汽車之行車執照業經過戶，而保險單在新車行車執照生效之日起，超過多少日未申請權益移轉者，保險公司不負賠償責任？",
        options: ["七日", "十日", "十五日", "三十日"],
        answer: "十日",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 15 (大綱 item 3)"
    },
    {
        question: "汽車竊盜損失險條款中，被保險汽車被竊盜後，約定多少天尋車期？",
        options: ["15天", "30天", "45天", "60天"],
        answer: "30天",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 11"
    },
    {
        question: "強制汽車責任保險中，每一人死亡給付金額為新台幣多少元？",
        options: ["100萬元", "150萬元", "200萬元", "220萬元"],
        answer: "200萬元",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16, 19"
    },
    {
        question: "未投保強制汽車責任保險的汽車，經警察攔檢，其罰鍰金額範圍為何？",
        options: ["1,000元以上 5,000元以下", "3,000元以上 15,000元以下", "5,000元以上 20,000元以下", "10,000元以上 30,000元以下"],
        answer: "3,000元以上 15,000元以下",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 20"
    },
    {
        question: "保險契約有效期間未滿幾日，公路監理機關不得辦理汽車驗車及換照？",
        options: ["15日", "30日", "45日", "60日"],
        answer: "30日",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 18 (item 12)"
    },
    {
        question: "傷害保險中，職業等級共分為幾級？",
        options: ["3級", "5級", "6級", "7級"],
        answer: "6級",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 32 (我國保險業職業等級分為1-6級)"
    },
    {
        question: "傷害保險中，被保險人飲酒駕車，其吐氣或血液所含酒精濃度超過道路交通法令規定標準，是否屬於除外責任？",
        options: ["是，屬於除外責任", "否，仍在承保範圍", "視保險金額而定", "需加繳保費才承保"],
        answer: "是，屬於除外責任",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 (大綱 item 7)"
    },
    {
        question: "健康保險中，重大疾病甲型與乙型的主要差別在於？",
        options: ["甲型保費較高", "乙型包含輕度選項", "甲型僅保障癌症", "乙型不保腦中風"],
        answer: "乙型包含輕度選項",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 40"
    },
    {
        question: "健康保險中，被保險人於出院後幾日內於同一醫院再次住院，各種保險金給付額視為一次住院辦理？",
        options: ["7日", "14日", "21日", "30日"],
        answer: "14日",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 41 (item 9)"
    },
    {
        question: "保險法第107條規定，以未滿幾歲之未成年人為被保險人訂立之人壽保險契約，其死亡給付於被保險人滿該歲數前不得超過喪葬費用扣除額的一半？",
        options: ["12歲", "15歲", "18歲", "20歲"],
        answer: "15歲",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 43 (大綱 item 2, PDF內容: 喪葬費用(不得超過喪葬費扣除額之一半)外...滿十五歲時始生效力)"
    },
    {
        question: "人壽保險契約中，被保險人故意自殺，保險公司是否給付保險金？",
        options: ["一律不給付", "契約訂立二年後仍須給付", "僅給付已繳保費", "給付保險金額之一半"],
        answer: "契約訂立二年後仍須給付",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 43 (保險法第109條，契約載明...兩年後才生效)"
    },
    {
        question: "人壽保險契約年繳或半年繳者，其保費寬限期間為催告到達翌日起幾日內？",
        options: ["10日", "15日", "30日", "60日"],
        answer: "30日",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 47"
    },
    {
        question: "投資型保險與傳統型保險最主要的差異之一是？",
        options: ["投資型保險保費較低", "投資型保險無解約金", "投資風險由保戶承擔", "投資型保險僅能連結股票"],
        answer: "投資風險由保戶承擔",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 50-51"
    },
    {
        question: "住宅火災及地震基本保險的保險期間最長為多久？",
        options: ["六個月", "一年", "二年", "五年"],
        answer: "一年",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 24"
    },
    {
        question: "汽車保險丙式車體損失險主要承保何種事故造成的損失？",
        options: ["火災、爆炸", "車對車碰撞", "不明原因刮損", "竊盜"],
        answer: "車對車碰撞",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 8-9"
    },
    // --- 新增的細化題目 ---
    {
        question: "再保險契約的目的之一是？",
        options: ["增加原保險人的自留風險", "集中承保能量", "分散危險責任", "提高保險費率"],
        answer: "分散危險責任",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 1 (再保險功能(1))"
    },
    {
        question: "再保險契約中，將危險責任移轉之一方稱為？",
        options: ["再保險人", "被保險人", "原保險人", "受益人"],
        answer: "原保險人",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 1"
    },
    {
        question: "再保險契約中，承受危險責任移轉之一方稱為？",
        options: ["原保險人", "被保險人", "再保險人 (reinsurer)", "要保人"],
        answer: "再保險人 (reinsurer)",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 1"
    },
    {
        question: "再保險人是否可向原保險契約之要保人請求交付保險費？",
        options: ["可以，經原保險人同意即可", "不可以", "可以，若原保險人未支付", "視再保險合約種類而定"],
        answer: "不可以",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 1 (特性(2))"
    },
    {
        question: "比例性再保險的運作方式是以何者為分保基礎？",
        options: ["損失金額", "保險金額", "保險期間", "事故發生次數"],
        answer: "保險金額",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4"
    },
    {
        question: "非比例性再保險的運作方式是以何者為分保基礎？",
        options: ["保險金額", "自留額", "損失金額", "保險費"],
        answer: "損失金額",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 5"
    },
    {
        question: "固定比率再保險 (Quota Share Re) 的主要特徵是？",
        options: ["再保比率隨業務變動", "原保險人將所承保業務按固定比率分與再保險人", "僅適用於巨災風險", "再保險人不分攤手續費"],
        answer: "原保險人將所承保業務按固定比率分與再保險人",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4"
    },
    {
        question: "溢額再保險 (Surplus Re) 中，決定再保險人責任的兩個基本要素是原保險人之自留額及何者？",
        options: ["最高賠償限額", "線數 (Lines)", "保險費率", "損失發生頻率"],
        answer: "線數 (Lines)",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4"
    },
    {
        question: "在固定比率再保險與溢額再保險中，何者的自留與分出比率是固定的？",
        options: ["溢額再保險", "兩者皆是固定", "固定比率再保險", "兩者皆是變動"],
        answer: "固定比率再保險",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 4 (兩者差異)"
    },
    {
        question: "超額賠款再保險 (Excess of Loss Re) 是指再保險人承擔原保險人賠款超過約定數額以上之責任，但通常設有？",
        options: ["最低自負額", "最高責任限額", "固定手續費率", "無任何限制"],
        answer: "最高責任限額",
        chapterRef: "一、再保險 (CH7)",
        sourcePage: "CH7, pg 5"
    },
    {
        question: "火災保險承保的「有形動產」不包含下列何者？",
        options: ["傢俱", "衣服", "土地", "辦公設備"],
        answer: "土地",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 23 (有形標的-動產/不動產定義)"
    },
    {
        question: "火災保險的「無形利益」中，因期待而產生利益的損失，例如營業中斷，屬於哪一類？",
        options: ["因費用而產生之利益", "因使用而產生之利益", "因期待而產生利益", "因責任而產生利益"],
        answer: "因期待而產生利益",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 23"
    },
    {
        question: "保險事故發生後，住宅火災保險對建築物理賠的基礎，原則上採何種價值？",
        options: ["原始購買成本", "現金價值", "重置成本", "市場競標價格"],
        answer: "重置成本",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 24 (特色：建築物採重置成本)"
    },
    {
        question: "保險事故發生後，住宅火災保險對動產理賠的基礎，原則上採何種價值？",
        options: ["原始購買成本", "實際價值(現金價值)", "重置成本", "保險金額"],
        answer: "實際價值(現金價值)",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 25 (動產採實際價值(扣折舊))"
    },
    {
        question: "住宅火災保險中，臨時住宿費用最高總賠償金額為新台幣多少萬元？",
        options: ["10萬元", "15萬元", "20萬元", "30萬元"],
        answer: "20萬元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 25 (大綱: 最高 20 萬元)"
    },
    {
        question: "根據住宅火災保險60%共保條款，若保險金額低於損失當時重置成本的60%，理賠金額將如何計算？",
        options: ["全額賠償損失", "按比例賠償", "僅賠償保險金額", "不予理賠"],
        answer: "按比例賠償",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 24-25 (理賠方式公式意涵)"
    },
    {
        question: "商業火災保險與住宅火災保險的主要承保事故有何不同？",
        options: ["商業火險不保爆炸", "住宅火險不保閃電雷擊", "商業火險通常不自動涵蓋竊盜", "兩者承保事故完全相同"],
        answer: "商業火險通常不自動涵蓋竊盜",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 23-24 (承保事故比較)"
    },
    {
        question: "住宅地震基本保險的承保事故主要為何？",
        options: ["颱風、洪水", "地震震動、地震引起之火災、爆炸", "山崩、地層下陷", "海嘯、火山爆發"],
        answer: "地震震動、地震引起之火災、爆炸",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 28 (承保事故)"
    },
    {
        question: "住宅地震基本保險中，臨時住宿費用為多少？",
        options: ["每日5000元，最高10萬元", "總額10萬元", "總額20萬元", "無臨時住宿費用給付"],
        answer: "總額20萬元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 28"
    },
    {
        question: "住宅玻璃保險每一意外事故賠償金額上限為多少（不含自負額）？",
        options: ["5千元", "1萬元", "1萬5千元", "2萬元"],
        answer: "1萬元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 27"
    },
    {
        question: "住宅玻璃保險每一事故的自負額為新台幣多少元？",
        options: ["5百元", "1千元", "1千5百元", "2千元"],
        answer: "1千元",
        chapterRef: "二、火災保險 (CH10)",
        sourcePage: "CH10, pg 27"
    },
    {
        question: "汽車車體損失險中，哪一種條款承保範圍最廣，俗稱全險？",
        options: ["甲式", "乙式", "丙式", "丁式 (限額車對車碰撞)"],
        answer: "甲式",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 8 (甲式(全險、All Risk))"
    },
    {
        question: "乙式車體損失險相較於丙式，額外承保了下列哪些危險事故？",
        options: ["僅車對車碰撞", "竊盜損失", "火災、閃電、雷擊、爆炸、拋擲物或墜落物", "第三者非善意行為"],
        answer: "火災、閃電、雷擊、爆炸、拋擲物或墜落物",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 8-9 (比較表)"
    },
    {
        question: "汽車車體損失險中，甲式與乙式通常約定的自負額，在第一次、第二次及第三次以後分別是多少？",
        options: ["1/2/3千元", "2/4/6千元", "3/5/7千元", "5/7/9千元"],
        answer: "3/5/7千元",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 9 (表格顯示甲乙式自負額 3/5/7仟)"
    },
    {
        question: "汽車車體損失險中，所謂「全損」是指修理費用達到保險金額扣除折舊後數額的多少以上？",
        options: ["二分之一", "三分之二", "四分之三", "百分之百"],
        answer: "四分之三",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 10 (全損之理賠 d.)"
    },
    {
        question: "任意汽車第三人責任保險中，「第三人」的定義不包含下列何者？",
        options: ["對方車輛的駕駛人", "路邊的行人", "被保險汽車的乘客", "被保險人本人及其家屬"],
        answer: "被保險人本人及其家屬",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 14 (第三責任險不保事項中對乘客及被保險人家屬的排除)"
    },
    {
        question: "汽車竊盜損失險中，每一次損失，被保險人應負擔的基本自負額是多少？",
        options: ["5%", "10%", "15%", "20%"],
        answer: "10%",
        chapterRef: "三、汽車保險 (CH8)",
        sourcePage: "CH8, pg 11 (d. 理賠金額計算...基本自負額10%)"
    },
    // --- 再繼續從 CH9 強制險開始細化 ---
    {
        question: "強制汽車責任保險的立法意旨為何？",
        options: ["保障駕駛人財產安全", "使汽車交通事故受害人迅速獲得基本保障", "降低汽車保險費率", "處罰交通違規者"],
        answer: "使汽車交通事故受害人迅速獲得基本保障",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16 (實施意旨)"
    },
    {
        question: "強制汽車責任保險採取何種責任制度？",
        options: ["過失責任制", "嚴格責任制", "推定過失責任制", "限額無過失責任制"],
        answer: "限額無過失責任制",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16 (特色)"
    },
    {
        question: "強制汽車責任保險的請求權人是否擁有對保險公司的直接請求權？",
        options: ["沒有", "有，但需經被保險人同意", "有", "僅在被保險人破產時才有"],
        answer: "有",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16 (特色)"
    },
    {
        question: "「汽車交通事故特別補償基金」設立的主要目的為何？",
        options: ["補償保險公司虧損", "提供強制險保費補貼", "保障肇事逃逸及未投保車輛所致車禍受害人之權益", "補助交通安全宣導"],
        answer: "保障肇事逃逸及未投保車輛所致車禍受害人之權益",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16 (特色), pg 21 (用途)"
    },
    {
        question: "強制汽車責任保險法第五條所稱「汽車」，不包含下列何者？",
        options: ["客車", "貨車", "機車", "醫療用電動代步車"],
        answer: "醫療用電動代步車",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 16 (定義(1))"
    },
    {
        question: "強制汽車責任保險之「請求權人」，在死亡給付的情況下，其遺屬受領順位第一位為何？",
        options: ["祖父母", "兄弟姐妹", "配偶", "父母、子女及配偶"],
        answer: "父母、子女及配偶",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 17 ((7)請求權人)"
    },
    {
        question: "強制汽車責任保險的請求權時效，自知有損害發生時起算，幾年間不行使而消滅？",
        options: ["一年", "二年", "三年", "五年"],
        answer: "二年",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 18 ((9)請求權時效)"
    },
    {
        question: "強制汽車責任保險，保險人應於保險期間屆滿幾日前通知要保人續保？",
        options: ["15日", "30日", "45日", "60日"],
        answer: "30日",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 18 ((10)續保通知)"
    },
    {
        question: "強制汽車責任保險，每一人失能給付最高金額為多少？",
        options: ["100萬元", "150萬元", "200萬元", "220萬元"],
        answer: "200萬元",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 19 (失能給付)"
    },
    {
        question: "強制汽車責任保險，每一人醫療給付最高金額為多少？",
        options: ["10萬元", "20萬元", "30萬元", "50萬元"],
        answer: "20萬元",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 18 (給付項目-醫療給付)"
    },
    {
        question: "強制汽車責任保險中，因受害人「故意行為」所致之傷害或死亡，保險人是否給付？",
        options: ["仍應給付", "不予給付", "給付一半", "視情況給付"],
        answer: "不予給付",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 19 ((17)保險人之免責事由 - 故意行為所致)"
    },
    {
        question: "保險公司依強制汽車責任保險給付後，在何種情況下得向被保險人追償？",
        options: ["被保險人超速駕駛", "被保險人酒醉駕駛", "被保險人闖紅燈", "被保險人未繫安全帶"],
        answer: "被保險人酒醉駕駛",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 20 ((18)追償情況 - 酒醉或吸食毒品)"
    },
    {
        question: "汽車所有人未投保強制險而肇事，其罰鍰金額為新台幣多少元以上，多少元以下？",
        options: ["6,000元以上 30,000元以下", "9,000元以上 32,000元以下", "10,000元以上 35,000元以下", "12,000元以上 40,000元以下"],
        answer: "9,000元以上 32,000元以下",
        chapterRef: "四、強制汽車第三人責任險 (CH9)",
        sourcePage: "CH9, pg 20 ((22)未投保罰則 - 若未投保肇事者)"
    },
    // CH11 傷害保險
    {
        question: "傷害保險所稱之「意外傷害事故」，必須具備下列哪些特性？",
        options: ["內在性、漸進性、可預期性", "外來性、突發性、不可預料性", "慢性、自發性、已知性", "遺傳性、累積性、可控制性"],
        answer: "外來性、突發性、不可預料性",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 31 (意外事故應符合...外來性、偶然性(突發性)、不可預見)"
    },
    {
        question: "傷害保險費率主要依據何者訂定？",
        options: ["被保險人年齡", "被保險人健康狀況", "被保險人職業等級", "被保險人居住地區"],
        answer: "被保險人職業等級",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 32 (傷害保險 - 保費依據)"
    },
    {
        question: "傷害保險中，若被保險人因意外傷害事故發生日起多少日內死亡或致成失能，保險人應負給付責任（但可證明因果關係者不在此限）？",
        options: ["90日", "120日", "180日", "365日"],
        answer: "180日",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 ((2)因果關係認定之期間)"
    },
    {
        question: "傷害保險中，因同一意外傷害事故致成失能後身故，若符合申領條件，其給付總金額合計最高以何者為限？",
        options: ["失能保險金", "死亡保險金", "保險金額", "已繳保費總額"],
        answer: "保險金額",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 ((4)保險給付限制)"
    },
    {
        question: "下列何種行為屬於傷害保險之「不保事項」？",
        options: ["被保險人搭乘大眾運輸工具發生意外", "被保險人從事角力、柔道等競賽或表演", "被保險人於工作中不慎受傷", "被保險人行走時意外跌倒"],
        answer: "被保險人從事角力、柔道等競賽或表演",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 ((6)不保事項)"
    },
    {
        question: "被保險人職業變更未依約通知保險人，若變更後職業危險性減低，保險費如何處理？",
        options: ["不予退還", "按差額比例退還未滿期保險費", "加收保險費", "契約無效"],
        answer: "按差額比例退還未滿期保險費",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 ((7)職業或職務變更的通知義務 - 危險性減低時)"
    },
    {
        question: "被保險人職業變更未依約通知保險人，若變更後職業危險性增加且發生保險事故，保險金如何給付？",
        options: ["全額給付", "按原收保費與應收保費比例折算給付", "不予給付", "加計利息給付"],
        answer: "按原收保費與應收保費比例折算給付",
        chapterRef: "五、傷害保險 (CH11)",
        sourcePage: "CH11, pg 35 ((7)職業或職務變更的通知義務 - 危險性增加且未通知)"
    },
    // CH12 健康保險
    {
        question: "健康保險的承保範圍主要為被保險人因何種原因所致之失能或死亡？",
        options: ["僅意外事故", "僅職業災害", "疾病、分娩及其所致失能或死亡", "僅先天性疾病"],
        answer: "疾病、分娩及其所致失能或死亡",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 37 ((1))"
    },
    {
        question: "保險契約訂立時，被保險人已在疾病或妊娠情況中者，保險人對該項疾病或分娩是否負給付責任？",
        options: ["仍應負給付責任", "不負給付責任", "減半給付", "須加繳保費才給付"],
        answer: "不負給付責任",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 37 ((3))"
    },
    {
        question: "定額給付型住院醫療險與實支實付型住院醫療險的主要差異在於理賠時是否需要醫療收據？",
        options: ["定額給付型需要，實支實付型不需要", "兩者皆需要", "實支實付型需要，定額給付型原則上不需要(僅需診斷書)", "兩者皆不需要"],
        answer: "實支實付型需要，定額給付型原則上不需要(僅需診斷書)",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 37-38 (比較)"
    },
    {
        question: "健康保險契約條款中，所謂「醫院」的定義，不包含下列何者？",
        options: ["依醫療法規定領有開業執照並設有病房收治病人之公立醫院", "依醫療法規定領有開業執照並設有病房收治病人之私立醫院", "財團法人醫院", "專供休養、戒毒、養老等非以直接診治病人為主要目的者"],
        answer: "專供休養、戒毒、養老等非以直接診治病人為主要目的者",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 40 (名詞定義-醫院)"
    },
    {
        question: "健康保險的除外責任中，下列何者通常不屬於除外範圍（即可能理賠）？",
        options: ["美容手術", "非因當次住院事故治療目的所進行之外科手術", "因醫療行為必要之剖腹產", "健康檢查、療養"],
        answer: "因醫療行為必要之剖腹產",
        chapterRef: "六、健康保險 (CH12)",
        sourcePage: "CH12, pg 41 (除外責任(事故) - 懷孕c.)"
    },
    // CH13 人壽保險
    {
        question: "保險法第105條規定，由第三人訂立之死亡保險契約，未經被保險人書面同意並約定保險金額，其契約效力為何？",
        options: ["有效", "無效", "效力未定", "得撤銷"],
        answer: "無效",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 43 ((4))"
    },
    {
        question: "人壽保險契約中，若死亡保險契約未指定受益人，則保險金額應如何處理？",
        options: ["由保險公司保管", "作為被保險人之遺產", "捐贈給慈善機構", "歸還給要保人"],
        answer: "作為被保險人之遺產",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "大綱 七、4. (保險法第113條)"
    },
    {
        question: "要保人或受益人故意致被保險人於死，保險公司如何處理保險金？",
        options: ["仍應給付全額保險金", "不負給付保險金額之責，但若有其他受益人，應給付該受益人應得部分", "僅退還已繳保費", "保險契約自始無效"],
        answer: "不負給付保險金額之責，但若有其他受益人，應給付該受益人應得部分",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "大綱 七、5. 及 CH13, pg 49 ((9)失權事由 - 受益人故意致死)"
    },
    {
        question: "人壽保險契約停效後，要保人得在停效日起幾年內申請復效？",
        options: ["一年", "二年", "三年", "五年"],
        answer: "二年",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 47 ((4)停效與復效)"
    },
    {
        question: "「繳清保險」是指要保人以當時的保單價值準備金，作為一次繳清的躉繳保險費，其結果是？",
        options: ["保險金額不變，保險期間縮短", "保險金額減少，保險期間不變", "保險金額與期間均不變", "契約終止"],
        answer: "保險金額減少，保險期間不變",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 48 ((7)減額繳清保險)"
    },
    {
        question: "「展期定期保險」是指要保人以當時的保單價值準備金扣除相關費用後，作為一次繳清的保險費，其結果是？",
        options: ["保險金額減少，保險期間不變", "保險金額不變，保險期間縮短或改變", "保險金額與期間均增加", "契約立即終止"],
        answer: "保險金額不變，保險期間縮短或改變",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 48 ((7)展期定期保險)"
    },
    {
        question: "投資型保險契約中，保險公司向保戶收取的「保險成本」是指？",
        options: ["基金管理費", "保單行政費用", "提供壽險保障所需的費用", "投資轉換手續費"],
        answer: "提供壽險保障所需的費用",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 50 (相關費用 - 保險成本)"
    },
    {
        question: "投資型保險的「分離帳戶」特性是指？",
        options: ["保戶資金與保險公司一般帳戶分開管理", "保費分為投資與保障兩部分", "要保人與受益人帳戶分離", "不同投資標的帳戶分離"],
        answer: "保戶資金與保險公司一般帳戶分開管理",
        chapterRef: "七、人壽保險 (CH13)",
        sourcePage: "CH13, pg 50 (必備要件 - 須設立分離(獨立)帳戶), pg 51 (投資資產管理 - 分離帳戶)"
    }
    // CONTINUE ADDING QUESTIONS HERE following the format above
    // Aim for about 100 questions in total.
    // Example structure for another question:
    // {
    //     question: "...",
    //     options: ["...", "...", "...", "..."],
    //     answer: "...",
    //     chapterRef: "...",
    //     sourcePage: "..."
    // },
];

// --- QUIZ LOGIC ---
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const startButton = document.getElementById('start-button');

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const summaryElement = document.getElementById('summary');
const restartButton = document.getElementById('restart-button');
const questionNumberElement = document.getElementById('question-number');
const chapterRefElement = document.getElementById('chapter-ref');

let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const QUESTIONS_PER_QUIZ = 73;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomQuestions() {
    const shuffledBank = [...questionBank];
    shuffleArray(shuffledBank);
    currentQuizQuestions = shuffledBank.slice(0, QUESTIONS_PER_QUIZ);
}

function startQuiz() {
    startButton.style.display = 'none';
    quizArea.style.display = 'block';
    resultArea.style.display = 'none';
    
    selectRandomQuestions();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    feedbackElement.textContent = '';
    feedbackElement.className = '';
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    chapterRefElement.textContent = `章節: ${currentQuestion.chapterRef} (教材: ${currentQuestion.sourcePage})`;
    questionNumberElement.textContent = `第 ${currentQuestionIndex + 1} / ${QUESTIONS_PER_QUIZ} 題`;

    optionsContainer.innerHTML = '';
    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });
    nextButton.style.display = 'none'; // Hide next button until an answer is selected
}

function selectAnswer(button, selectedOption, correctAnswer) {
    const allOptionButtons = optionsContainer.querySelectorAll('.option-button');
    allOptionButtons.forEach(btn => {
        btn.disabled = true; // Disable all options
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.textContent = '正確！';
        feedbackElement.className = 'correct';
        button.classList.add('correct');
    } else {
        feedbackElement.textContent = `錯誤。正確答案是：${correctAnswer}`;
        feedbackElement.className = 'incorrect';
        button.classList.add('incorrect');
    }
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizArea.style.display = 'none';
    resultArea.style.display = 'block';
    scoreElement.textContent = `你的得分：${score} / ${currentQuizQuestions.length}`;
    
    let summaryText = "本次測驗題目來源：<br>";
    const displayedChapters = new Set();
    currentQuizQuestions.forEach(q => {
        if (!displayedChapters.has(q.chapterRef)) {
            summaryText += `${q.chapterRef}<br>`;
            displayedChapters.add(q.chapterRef);
        }
    });
    summaryElement.innerHTML = summaryText;
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', startQuiz);

// Initially, hide quiz area and result area
quizArea.style.display = 'none';
resultArea.style.display = 'none';