webpackJsonp([0xcc97544bd973],{418:function(n,e){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%89%8D%E8%A8%80">前言</a></li>\n<li><a href="#%E5%90%8C%E6%AD%A5%E8%88%87%E7%95%B0%E6%AD%A5%E7%9A%84%E5%88%86%E5%88%A5">同步與異步的分別</a></li>\n<li>\n<p><a href="#%E7%95%B0%E6%AD%A5%E6%93%8D%E4%BD%9C%E8%99%95%E7%90%86%E6%96%B9%E6%B3%95">異步操作處理方法</a></p>\n<ul>\n<li><a href="#callback">Callback</a></li>\n<li><a href="#promise">Promise</a></li>\n<li><a href="#generator">Generator</a></li>\n<li><a href="#asyncawait">Async/Await</a></li>\n</ul>\n</li>\n<li><a href="#%E6%84%9F%E6%83%B3">感想</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:"---\ntitle: 異步操作見聞錄\nheaderImage: KMksHxZ.png\nheaderSize: contain\nheaderBackgroundColor: f0db51\nbackgroundPositionY: 50%\ntheme: white\nmagic: true\ntags:\n  - Front End\n  - JavaScript\ncategories: []\ndate: 2017-09-27 20:00:00\n---\n\n## 前言\n異步操作是非常常見的操作，也是其中一題常見的前端工程師面試題目。在日常開發中，我們會和伺服器交互，或者是和用戶的行動作出反應，比如說監聽某些點擊事件。這個時候，其實我們是執行了異步操作，我們需要等待對方若干時間才能收到返回值，甚至是一個錯誤的值。。。因此，異步操作很容易產生一些誤會。這裡，我會說一下異步操作，及其返回的處理方法。\n\n## 同步與異步的分別\n\n在同步的世界裡面，我們希望執行某些操作之後，就能夠馬上拿到返回的值，然後執行下一步。然而，當我們發出 HTTP 請求的時候，我們可能需要等待世界的另外一端返回信息，這需要時間，便不是同步了。。。\n\n如果沒有異步的話，當你發出 HTTP 請求的時候，瀏覽器需要等待伺服器返回才執行下一步。這就是代表瀏覽器會卡住。。。\n\n異步處理，簡單來說就是我們發出了一個行動，但是不是馬上得到結果，我們會繼續執行後面的指令，等到函數裡面有一個返回，我們才拿那個返回值來使用。最簡單的說法，就是我們向服務器發出請求，但是服務器需要時間處理，並且返回處理過的內容。\n\n## 異步操作處理方法\n1. Callback\n1. Promise （思想）\n1. Generator\n1. Async await （推薦）\n\n### Callback\n\n我們看一下維基百科上面對於 Callback 的說明：\n\n> 在電腦程式設計中，回呼函式，或簡稱回呼（Callback 即call then back 被主函數呼叫運算後會返回主函數），是指通過函數參數傳遞到其它代碼的，某一塊可執行代碼的參照。這一設計允許了底層代碼呼叫在高層定義的子程式。\n\n這樣好像說得蠻複雜的，但其實很簡單，你把一個函數 cb (Function) 作為參數 (Argument)傳進這個函數 B 裡面，然後在函數 B 使用函數 cb。\n\n```\nfunction func(x, cb) {\n  cb(x)\n}\n```\n\n舉個例子，比如我們要在 Node.js 裡面讀取一個檔案，我們的代碼會是下面這樣的：\n\nhello.txt:\n```\nHello World, I'm Calpa Liu.\n```\n---\nindex.js:\n```\nvar fs = require('fs');\n\nfs.readFile('hello.txt', function (err, data) {\n     if (err) {\n          return console.error(err);\n     }\n\n     console.log(data);\n});\n\nconsole.log('Finished');\n```\n\n\n我們會在 callback 裡面處理 callback，也就是一個回調裡面做另外一件事情，那可能是另外一個 callback，那麼你可以想象一下，我們越寫越深。。。這樣有兩個問題，第一：代碼的耦合性會很高，不容易去拆分代碼；第二：代碼的維護性很差。\n\n![Imgur](https://i.imgur.com/bjHDvVN.jpg)\n\n\n### Promise\n\nPromise 是說如果你做了 A 的事情，成功了就做 B，不成功就做 C，你還可以繼續做 D 的事情，然後進行成功和不成功的處理。這樣說可能比較虛，但是你看一下 MDN 上面的圖就會明白了。\n\n![Promise - MDN](https://i.imgur.com/w9BxjmL.png)\n\n一個發射子彈的動作可以這樣寫：\n\n```\nvar fire = new Promise(function(resolve, reject) {\n     setTimeout(function() {\n          resolve('已命中三千里外的目標');\n     }, 3000)\n});\n\nfire.then(function(result) {\n     console.log(result);\n});\n```\n\n你可以在 Windows 平台按 F12 或 Ctrl + Shift + I，或在 Mac 上 按 Cmd + Opt + I，打開 Google Chrome Developer Tools ，然後在 Console 貼上上面的代碼，三秒後就會輸出`已命中三千里外的目標`。\n\n你也可以在 then() 裡面寫 1個到 N個的 Promise。\n\n```\nvar fire = new Promise(function(resolve, reject) {\n     setTimeout(function() {\n          resolve('已命中三千里外的目標');\n     }, 3000)\n});\n\nfire.then(function(result) {\n     console.log(result);\n     console.log('正在返回司令部');\n     return fire.then(function (result) {\n          console.log(result);\n     });\n});\n```\n\n### Generator\n\nGenerator 其實是一個狀態機，內部保存機器的運行狀態。我們透過獲取機器的完成狀態 (done)，我們能夠重複調用機器。我們可以使用 yield 暫停一個函數，並跳出函數。從外面的角度來看，我們可以從上而下去寫代碼，但是代碼會複雜，難以理解。\n\n雖然它已經寫進 ECMAScript 2015 的正式規範裡面，但是我不太喜歡使用 Generator。我們簡單看一下 Generator 就好了，因為現在是 2017 年，異步操作的有更加好的處理方法。\n\n```\nfunction* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nvar g = gen(); // \"Generator { }\"\ng; //\ng.next(); // {value: 1, done: false}\ng.next(); // {value: 2, done: false}\ng.next(); // {value: 3, done: false}\ng.next() // {value: undefined, done: true}\n```\n\n### Async/Await\n\n對於技術的要求，是無止境的。為了寫出更加優美的代碼，你又可以付出什麼的代價呢？\n\n如果你沒有試過 Async/Await 的話，那麼你就應該試一下，因為實在是太優雅了。\n\n這里我就放出一段現在博客在用的代碼：\n\n```\nasync const getPosts = () => {\n  await res = axios.get('https://calpa.me/posts');\n  return res.data;\n}\n```\n\n我們簡單的讀一下這段代碼：\n\n一個異步的不變量 `getPosts` 是一個箭頭函數，內部操作為等待 axios 的 GET 請求到地址：[http://calpa.me](https://calpa.me)，並返回伺服器返回的資料。\n\n這是一個非常簡單的異步操作吧，但是如果是這樣的呢？\n```\nasync const getUserData = () => {\n  await posts = axios.get('https://calpa.me/posts');\n  await accountInfo = axios.get('https://calpa.me/about');\n  /* ... */\n}\n```\n\n如果你想要使用 Async / Await 的話，可以使用\n[Node.js 7.6](https://www.infoq.com/news/2017/02/node-76-async-await) 或以上的版本。例如使用 nvm 安裝 v8: `nvm install v8`，然後 `nvm use v8`。\n\n另外，如果你不想更新 Node 版本的話，你可以安裝 [async 工具庫](https://caolan.github.io/async/)。\n\n\n## 感想\n異步操作已經成為了前端工程師面試常見的問題之一，感覺是對於前端工程師的技術水平需求越來越提高了。雖然這些都是在 MDN 上面寫好的介紹，但是只有自己用過才會知道什麼比較好。\n\n如果公司的 Node 版本可以支持 Async/Await 的話，那就直接用 Async/Await 就好了。不行的話，那就用 Promise 吧，不然 Generator 的設計對於強迫症患者來說很不順眼。。。\n\n## 參考資料\n1. [Callback (computer programming) - Wikipedia](https://en.wikipedia.org/wiki/Callback)\n1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\n1. [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)\n1. [async function - JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)\n"},frontmatter:{title:"異步操作見聞錄"}}},pathContext:{slug:"/async-summary/"}}}});
//# sourceMappingURL=path---2017-09-28-async-summary-a405e603436559a00047.js.map