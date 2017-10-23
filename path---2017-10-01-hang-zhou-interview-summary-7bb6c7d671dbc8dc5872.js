webpackJsonp([0xf661c44a53b0],{419:function(n,i){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%89%8D%E8%A8%80">前言</a></li>\n<li>\n<p><a href="#%E4%B8%80%E9%9D%A2">一面</a></p>\n<ul>\n<li><a href="#%E9%9D%A2%E8%A9%A6%E5%AE%98%E7%9A%84%E5%95%8F%E9%A1%8C">面試官的問題</a></li>\n<li><a href="#%E6%88%91%E7%9A%84%E5%95%8F%E9%A1%8C">我的問題</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E4%BA%8C%E9%9D%A2">二面</a></p>\n<ul>\n<li><a href="#%E9%9D%A2%E8%A9%A6%E5%AE%98%E7%9A%84%E5%95%8F%E9%A1%8C-1">面試官的問題</a></li>\n<li><a href="#%E6%88%91%E7%9A%84%E5%95%8F%E9%A1%8C-1">我的問題</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E6%9D%AD%E5%B7%9E%E4%B9%8B%E6%97%85">杭州之旅</a></p>\n<ul>\n<li><a href="#%E9%A6%99%E6%B8%AF">香港</a></li>\n<li><a href="#%E6%B7%B1%E5%9C%B3">深圳</a></li>\n<li><a href="#%E6%9D%AD%E5%B7%9E">杭州</a></li>\n<li><a href="#%E9%9D%A2%E8%A9%A6%E7%95%B6%E6%97%A5">面試當日</a></li>\n<li><a href="#%E7%AC%AC%E4%B8%89%E5%A4%A9">第三天</a></li>\n</ul>\n</li>\n<li><a href="#%E5%BE%8C%E8%A8%98">後記</a></li>\n<li><a href="#%E5%82%99%E8%A8%BB">備註</a></li>\n</ul>',internal:{content:"---\ntitle: 【圖多】《遠征成功﹣﹣一個香港人北上杭州豬場的前端面試之路》\nheaderImage: pbvqpjs.png\n# headerSize: contain\nheaderBackgroundColor: 2f383a\nbackgroundPositionY: 50%\n# theme: white\nmagic: true\ntags:\n  - Front End\n  - Interview\n  - 杭州\n  - 掘金技術征文\ncategories: []\ndate: 2017-09-30 18:00:00\n---\n\n## 前言\n\n謝邀。本文圖多，流量黨慎入。\n\n首先，我要感謝網易。作為一個香港人，能夠拿到杭州的面試機會，實屬機會難得。這次的兩輪技術面試，考察點廣泛而深入。雖然問題比較深入，但這讓我感覺對於技術要求比較高，這是一件好事，因為可以反映公司對於技術的重視。在大四的這一年裡，我會繼續努力，爭取時間學習一個。本文將會記錄我面試時遇過的問題，以及作為一個香港人在杭州遇到的困難。。。\n\n![我想先以升級和畢業為目標努力](https://i.imgur.com/3IAyiiO.png)\n\n如果你想看圖的話，直接跳到下方的[杭州之旅](#杭州之旅)章節就行。\n\n## 一面\n### 面試官的問題\n\n1. [自我介紹](/about)\n1. 跨域怎樣處理？\n1. 如何做模塊化？有什麼好處？\n1. [你追求的前端是怎樣的一個前端？](/about)\n\n\n### 我的問題\n\n前後端分離？\n\n## 二面\n### 面試官的問題\n\n1. [自我介紹](/about)\n1. [請介紹一下你的專業 (Major)](/about)\n1. [什麼是黑客松？做什麼的？](/2017/04/23/hackUST-2017-hackathon-summary/)\n1. 最近一次黑客松你做了什麼？\n1. 說一下 React 實現原理\n1. 有了解過 React 底部發生什麼事情嗎？\n1. React 生態圈\n1. React Router 發生什麼事情？\n1. Redux 做了什麼事情？\n1. 如何做多狀態管理\n1. [異步操作](/2017/09/27/async-summary/)\n1. 輸入網址之後到瀏覽器渲染完成之間，發生什麼事情\n\n### 我的問題\n\n1. 前後端分離？\n1. 前端渲染？服務器渲染？前端下載框架，然後獲取伺服器資料再渲染？\n\n\n我印象最深刻的是下面三條題目：\n\n1. 跨域\n1. 異步操作\n1. 輸入網址之後到瀏覽器渲染完成之間，發生什麼事情\n\n\n很難？是的，因為我還沒有寫文章，拿著草稿就出去面試。。。如果你有關心社區裡面的文章的話，你會發現那些都是周經（每個星期都提出來的話題）。\n\n![但是越強才越有攻略的價值](https://i.imgur.com/SxgiJxK.png)\n\n很輕鬆？也不是。因為暑假的時候，我去了實習，沒有那麼多時間去寫博客文章，所以有一種被人家追稿的感覺。所以，在這一次面試裡面，我就把兩個月累積的稿子在兩次面試裡面說出來，你想一想也知道，當天的我是說了多少話。。。\n\n對於這三個問題，我會分成三篇文章，因為這三個問題，有很多細節在裡面的。異步操作已經在[《異步操作見聞錄》](/2017/09/27/async-summary/)談及過，有機會的話，我們再討論一下跨域以及輸入網址之後到瀏覽器渲染完成之間，發生什麼事情。\n\n好吧，就讓我們從香港出發吧。\n\n---\n\n## 杭州之旅\n### 香港\n\n![九龍塘車站](https://i.imgur.com/qPTMcjM.jpg)\n![上車了](https://i.imgur.com/ZkmrV9p.jpg)\n我沒有選擇從香港國際機場出發，而是選擇去深圳寶安機場出發。我需要在九龍塘坐火車上去落馬洲，過關後在福田口岸坐地鐵 4號線到會展中心，轉乘 1號線到車公廟，然後轉乘 11號線抵達機場站。\n\n### 深圳\n\n![深圳寶安機場](https://i.imgur.com/l7g4Qdj.jpg)\n深圳機場和香港機場都是採取了自然採光的設計，盡可能利用太陽光，這樣的設計看上去帶有現代科技感，也有自然的元素在內。那些六角形的位置，有著一種規律的美感。\n\n![42 登機口](https://i.imgur.com/WWO2xOy.jpg)\n\nThe answer to life, the universe, and everything.\n\n![初音 Kindle](https://i.imgur.com/4LGNjjM.jpg)\n\n我在過去的暑假定制的初音 Kindle，一種帶著初音去旅行的感覺www\n\n### 杭州\n\n![抵達杭州](https://i.imgur.com/XbYLcdi.jpg)\n抵達杭州的時候，風和日麗，一點都不像會有颱風過來的樣子。\n\n![電子支付在杭州](https://i.imgur.com/yPPME3s.jpg)\n\n杭州是阿里巴巴的總部，可以說是具有中國特色的電子支付，支付寶發源地。只要有支付寶，就可以在便利店購物，坐巴士，完全不用帶現金出街也行。可惜的是，杭州電子公交卡需要實名認證，還需要開通花唄。花唄功能，到本文截稿為止，它依然沒有讓非中國身份證的人使用。也就是說，身為一個香港人，還是需要購買一張公交卡（八達通），或者使用現金。\n\n\n雖然這一次杭州之旅，我不能享受這個服務，我也覺得沒有什麼問題，因為深圳還是需要公交卡來乘坐地鐵或者巴士。然而，這個時候的我，還沒有想到杭州處於一個拒絕沒有中國身份證的狀態。。。\n\n即使我預定了賓館，他們依然不能接待我。我打電話問面試官說一下這個問題後，便跑去杭州知名的如家快捷酒店，試試能不能入住。可惜的是，對於沒有中國身份證的人，他們是不能接待的，解釋是沒有開通港澳台居民的服務。。。\n\n![我想問個問題](https://i.imgur.com/zdHe4xH.png)\n\n對於外國人而言，他們是可以入籍中國，然後獲得中國身份證。然而，香港土生土長的香港人，又怎麼會跟你搞一張中國身份證呢？關於這一點，我不想在這裡展開。但是，對於有心前來杭州工作的香港人，包括我在內，這是一個迫切的問題。不知道 2020 年杭州舉辦的亞洲運動會，杭州的政策會有什麼改變，但我相信這一定會越來越好的。畢竟她想要成為一線城市，這一點可以說是不能忽視的。一線城市其中一個要素是有很多來自不同地方的人。。。你連居住也不能保障，如何叫人留下來。。。對於這一點，面試當日的 HR 面試環節，我明確表示我是香港人，沒有中國身份證的事實，並詢問網易的安排。\n\n於是，那一天我就被三連拒了。幸得杭州友人幫忙，我才得以找了一個房間租下來，不至於流落街頭。\n\n### 面試當日\n![網易正門](https://i.imgur.com/cdlkptJ.jpg)\n\n網易的門口也是蠻好找的，因為門口一大堆單車。。。\n\n面試當日，非常多人。隨便找幾個人談天，他們都是大牛，現在實習於中國的知名互聯網公司，讓我感到要爭取時間，學習一個。如果要問能不能贏 我也沒有底氣，畢竟能夠進去網易的都是大牛www\n\n![如果要問能不能贏 我也沒有底氣](https://i.imgur.com/z8B9JbB.png)\n\n你問我能不能面試過關，我只能說無可奉告，因為我沒有底氣。因此，選擇困難症的我只好爭取時間吃飯，因為網易餐廳的菜單實在是太多了，很吸引人www\n\n![吃飯了](https://i.imgur.com/vfbrXh2.jpg)\n\n![網易餐廳午餐](https://i.imgur.com/XGOSYlY.jpg)\n\n中午要吃得清淡一點，因為不知道有沒有面試，要是有的話，那就不能破喉嚨了。。。\n\n![網易餐廳晚餐](https://i.imgur.com/Ou7RoJ1.jpg)\n\n真是的，這麼多面試題目，我要好好吃一頓。。。\n\n![真是的，好辛苦呢（一臉幸福](https://i.imgur.com/HvzzHOM.png)\n\n### 第三天\n![醬鴨](https://i.imgur.com/TlVLgIY.jpg)\n![好吃的杭州菜](https://i.imgur.com/tYSNBmp.jpg)\n\n儘管第一天遇到了那些不愉快的事，但是吃過網易餐廳的菜，還有杭州友人和我一起去吃得杭州菜之後，我也忘記那些事情了。\n\n![:p](https://i.imgur.com/0gVyruv.png)\n\n## 後記\n最後再一次感謝網易。我感覺杭州是一個好地方，不管是空氣，還是食物，我也覺得很好。\n\n對於網易雲音樂，我最喜歡的是每日歌曲推薦和評論區系統。它的算法也是蠻準確的，雖然我不是很懂算法，但是每天能夠聽到不同的歌曲，然後收藏一個，也是覺得蠻開心的。我每天都要利用網易雲音樂，聽日文歌曲。尤其是寫代碼，或者寫博客文章的時候，更加是要不斷聽我喜歡的音樂裡面的歌曲。\n\n如果你在 2018 年之後要來杭州的話，可以找一下我。\n\n說到這裡，歡迎來到實力至上的世界。\n\n![](https://i.imgur.com/4Ltl87d.png)\n\n## 備註\nHexo 框架有問題：當文章長度有一定長度，而且中英文混合的時候，`hexo serve` 會有亂碼問題。原因是 Node.js buffer 問題。。。\n\n本文已參加[掘金秋招征文](https://juejin.im/post/59aa744ff265da247c4f145c)。\n"},frontmatter:{title:"【圖多】《遠征成功﹣﹣一個香港人北上杭州豬場的前端面試之路》"}}},pathContext:{slug:"/hang-zhou-interview-summary/"}}}});
//# sourceMappingURL=path---2017-10-01-hang-zhou-interview-summary-7bb6c7d671dbc8dc5872.js.map