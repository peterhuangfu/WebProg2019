# 1. 題目名稱

Personal Blog

----------------------------------
# 2. 一句話描述這個Project

"管理者視角的一個Personal Blog Website"

----------------------------------
# 3. Deployed連結

heroku: https://behuskyblog.herokuapp.com
github: https://github.com/peterhuangfu/midterm_behuskyblog.git

----------------------------------
# 4. 使用/操作方式

使用方式:
(1) 直接使用heroku連結
(2) git clone下來後:
	<1> cd midterm_behuskyblog && npm install
	<2> cd backend && npm install
	<3> cd ../client && npm install

--> 總共需install三次(最外層、backend、client)

[註: 操作中有需要密碼的部分都是1234]

主要分成兩個介面 -- 文章 & 個人簡介
(一)文章
主要有3個功能：新增、編輯、刪除
操作上很簡單，就是一般常見的功能

(二)個人簡介
主要功能：編輯

----------------------------------
# 5. 其他說明

無

----------------------------------
# 6. 使用與參考的框架/模組/原始碼

Front-end: React & Material-UI
Back-end: node.js

----------------------------------
# 7. 我的貢獻

主要利用React完成前端部分
Material-UI只有用在dialog(輸入密碼)的部分
利用node.js & MongoDB 完成後端及資料庫

----------------------------------
# 8. 心得

之前自己有用Angular 6開發過網站，所以對前端一直都有一定的認知。
不過從來沒碰過後端及資料庫，所以其實這次研究server就花了不少時間(當然還是調css最花時間)。不過經過這次的練習之後真的覺得對後端開始有些基礎的認知了。
儘管後端只有實施一些基礎的功能，但總是個好的開始。
在deploy的過程中也碰到不少麻煩事，但找到解決辦法後又多了解一些東西了，覺得收穫很不錯。
希望自己以後在這方面能再更精進><
