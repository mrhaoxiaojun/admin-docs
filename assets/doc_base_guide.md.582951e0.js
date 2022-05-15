import{_ as e,c as n,o as a,a as t}from"./app.263436ba.js";var s="/admin-docs/assets/login.60c995e1.jpg";const v='{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u524D\u5E8F\u51C6\u5907","slug":"\u524D\u5E8F\u51C6\u5907"},{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u53CD\u9988\u5EFA\u8BAE","slug":"\u53CD\u9988\u5EFA\u8BAE"},{"level":2,"title":"IDE","slug":"ide"},{"level":2,"title":"\u6350\u8D60","slug":"\u6350\u8D60"}],"relativePath":"doc/base/guide.md"}',r={},o=t(`<h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p><img src="https://img.shields.io/badge/vue-3.2.31-brightgreen.svg" alt="">\xA0<img src="https://img.shields.io/badge/ant--design-2.2.6-brightgreen.svg" alt="">\xA0<img src="https://img.shields.io/badge/build-rollup-brightgreen.svg" alt="">\xA0<img src="https://img.shields.io/badge/vite-2.4.0-brightgreen.svg" alt="">\xA0<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="">\xA0<img src="https://img.shields.io/badge/release-v1.0.0-blue" alt="">\xA0<img src="https://img.shields.io/badge/Stars-go-lightgrey?logo=github&amp;style=social" alt=""></p><p>\u5B83\u57FA\u4E8E vue3\u3001vite\u3001typescript \u548C ant-design\u5B9E\u73B0\u3002\u5B83\u4F7F\u7528\u4E86\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u6808\uFF0C\u5F00\u7BB1\u5373\u7528\u4E0D\u542B\u4EFB\u4F55\u65E0\u7528\u7EC4\u4EF6\u53CA\u4EE3\u7801\uFF0C \u5185\u7F6E3.0\u7248\u672C\u6309\u9700\u52A0\u8F7D\u89E3\u51B3\u65B9\u6848\uFF0C\u52A8\u6001\u8DEF\u7531\uFF0C\u6743\u9650\u9A8C\u8BC1\uFF0C\u63D0\u70BC\u4E86\u5178\u578B\u7684\u4E1A\u52A1\u6A21\u578B\uFF0C\u63D0\u4F9B\u4E86\u5B9E\u7528\u7684\u529F\u80FD\u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u539F\u578B\u3002\u76F8\u4FE1\u4E0D\u7BA1\u4F60\u7684\u9700\u6C42\u662F\u4EC0\u4E48\uFF0C\u672C\u9879\u76EE\u90FD\u80FD\u5E2E\u52A9\u5230\u4F60\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u5EFA\u8BAE</p><p>\u672C\u9879\u76EE\u5728\u4E0D\u65AD\u66F4\u65B0\u7EF4\u62A4\uFF0C\u66F4\u591A\u7EC4\u4EF6\u4E5F\u4F1A\u5728\u540E\u7EED\u7684\u7248\u672C\u4E2D\u5F00\u53D1\u8FED\u4EE3\uFF0C\u56E0\u4E3A\u4E0D\u80FD\u786E\u5B9A\u4F60\u662F\u5426\u9700\u8981\u8FD9\u4E9B\u7EC4\u4EF6\uFF0C\u8282\u7701\u4F60\u5220\u9664\u65E0\u7528\u7EC4\u4EF6\u4E0E\u4EE3\u7801\u7684\u65F6\u95F4\uFF0C\u6846\u67B6\u4FDD\u8BC1\u4E3B\u5206\u652F(master)\u7684\u6781\u7B80\u6027\uFF0C\u66F4\u591A\u7EC4\u4EF6\u4F1A\u653E\u5728component\u5206\u652F\u5F00\u53D1\u3002\u66F4\u591A\u65B0\u529F\u80FD\u4E5F\u4F1A\u5728\u5176\u4F59\u5206\u652F\u8FDB\u884C\u5F00\u53D1\u3002</p></div><div class="tip custom-block"><p class="custom-block-title">\u9884\u89C8</p><p><a href="/admin-docs/">\u5728\u7EBFDemo-\u5F85\u90E8\u7F72</a><br> \u8D26\u53F7\uFF1Aadmin | \u5BC6\u7801\uFF1A123456</p></div><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>- \u767B\u5F55 / \u6CE8\u9500

- \u6743\u9650\u9A8C\u8BC1
  - \u9875\u9762\u6743\u9650
  - \u6307\u4EE4\u6743\u9650
  - \u6743\u9650\u914D\u7F6E
  - \u4E8C\u6B65\u767B\u5F55

- \u5168\u5C40\u529F\u80FD
  - \u52A8\u6001\u4FA7\u8FB9\u680F\uFF08\u652F\u6301\u591A\u7EA7\u8DEF\u7531\u5D4C\u5957\uFF09
  - \u52A8\u6001\u9762\u5305\u5C51
  - \u5FEB\u6377\u5BFC\u822A(\u6807\u7B7E\u9875)
  - antd \u56FE\u6807\u5C01\u88C5
  - \u81EA\u9002\u5E94\u4FA7\u8FB9\u680F
  - mock
  - \u56FD\u9645\u5316

- \u8868\u683C
  - \u9AD8\u5EA6\u81EA\u5B9A\u4E49\u8868\u683C
  - \u6EE1\u8DB3\u65E5\u5E38\u589E\u5220\u6539\u67E5\u529F\u80FD
  - \u8868\u5355\u8F93\u5165\u7EC4\u4EF6\u4E30\u5BCC
  - \u767E\u884C\u4EE3\u7801\u5B9E\u73B0\u590D\u6742\u529F\u80FD

- \u9519\u8BEF\u9875\u9762
  - 403
  - 404
  - 500

- \u7EC4\u4EF6
  - \u8868\u683C
  - \u56FE\u6807icon

</code></pre></div><h2 id="\u524D\u5E8F\u51C6\u5907" tabindex="-1">\u524D\u5E8F\u51C6\u5907 <a class="header-anchor" href="#\u524D\u5E8F\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u4F60\u9700\u8981\u5728\u672C\u5730\u5B89\u88C5\xA0<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">node</a>\u548C\xA0<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git</a>\u3002\u672C\u9879\u76EE\u6280\u672F\u6808\u57FA\u4E8E\xA0<a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">es6</a>\u3001<a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue3</a>\u3001<a href="https://next.router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vue-router</a>\u3001<a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">vite</a>\u3001<a href="http://www.axios-js.com/zh-cn/docs/" target="_blank" rel="noopener noreferrer">axios</a>\u3001\u548C\xA0<a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank" rel="noopener noreferrer">ant design</a>\uFF0C\u6240\u6709\u7684\u8BF7\u6C42\u6570\u636E\u90FD\u662F\u4F7F\u7528mock\u8FDB\u884C\u6A21\u62DF\uFF0C\u63D0\u524D\u4E86\u89E3\u548C\u5B66\u4E60\u8FD9\u4E9B\u77E5\u8BC6\u4F1A\u5BF9\u4F7F\u7528\u672C\u9879\u76EE\u6709\u5F88\u5927\u7684\u5E2E\u52A9\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u6846\u67B6\u5185\u6240\u6709\u5F15\u7528\u7684\u7C7B\u5E93\uFF08\u6216\u7EC4\u4EF6\uFF09\u90FD\u9700\u8981\u662Fts\u7248\u672C\u7684\uFF0C\u5426\u5219\u4F1A\u5F15\u53D1\u7A0B\u5E8F\u8FD0\u884C\u62A5\u9519\u6216\u6253\u5305\u5931\u8D25\u7684\u53EF\u80FD\uFF0C\u67E5\u770B\u7C7B\u5E93\u662F\u5426\u652F\u6301ts\u8BF7<a href="https://www.typescriptlang.org/dt/search" target="_blank" rel="noopener noreferrer">\u6233\u8FD9\u91CC</a>\uFF0C\u5982\u679C\u4E0D\u652F\u6301\u9700\u8981\u81EA\u5DF1\u7F16\u5199\u5F15\u7528\u7C7B\u5E93\u7684\u58F0\u660E\u6587\u4EF6\u3002</p></div><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u672C\u9879\u76EE\u5DF2\u7ECF\u4E3A\u4F60\u751F\u6210\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u63D0\u4F9B\u4E86\u6DB5\u76D6\u4E2D\u540E\u53F0\u5F00\u53D1\u7684\u5404\u7C7B\u529F\u80FD\u548C\u5751\u4F4D\uFF0C\u4E0B\u9762\u662F\u6574\u4E2A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u3002</p><div class="language-sh"><pre><code>\u251C\u2500\u2500 dist                       # \u6784\u5EFA\u76F8\u5173
\u251C\u2500\u2500 public                     # \u9759\u6001\u8D44\u6E90
\u2502   \u2502\u2500\u2500 favicon.ico            # favicon\u56FE\u6807
\u251C\u2500\u2500 src                        # \u6E90\u4EE3\u7801
\u2502   \u251C\u2500\u2500 assets                 # \u4E3B\u9898 \u5B57\u4F53\u7B49\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components             # \u5168\u5C40\u516C\u7528\u7EC4\u4EF6
|   \u251C\u2500\u2500 config                 # \u5168\u5C40\u914D\u7F6E
\u2502   \u251C\u2500\u2500 errorPages             # \u9519\u8BEF\u9875
|   \u251C\u2500\u2500 hooks                  # hooks
\u2502   \u251C\u2500\u2500 layout                 # \u5168\u5C40 layout
|   \u251C\u2500\u2500 locales                # \u56FD\u9645\u5316
|   \u251C\u2500\u2500 mock                   # mock \u6570\u636E
\u2502   \u251C\u2500\u2500 router                 # \u8DEF\u7531
\u2502   \u251C\u2500\u2500 services               # axios\u8BF7\u6C42\u5C01\u88C5
\u2502   \u251C\u2500\u2500 store                  # \u5168\u5C40 store\u7BA1\u7406
\u2502   \u251C\u2500\u2500 types                  # \u63A5\u53E3\u3001\u9875\u9762ts\u7C7B\u578B\u7EA6\u675F
\u2502   \u251C\u2500\u2500 utils                  # \u5168\u5C40\u516C\u7528\u65B9\u6CD5
\u2502   \u251C\u2500\u2500 views                  # views \u6240\u6709\u9875\u9762
\u2502   \u251C\u2500\u2500 App.vue                # \u5165\u53E3\u9875\u9762
\u2502   \u2514\u2500\u2500 main.ts                # \u5165\u53E3\u6587\u4EF6 \u52A0\u8F7D\u7EC4\u4EF6 \u521D\u59CB\u5316\u7B49
\u251C\u2500\u2500 .env.xxx                   # \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 index.html                 # html\u6A21\u677F
\u251C\u2500\u2500 tsconfig.json              # ts\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 vite.config.ts             # vite\u914D\u7F6E\u6587\u4EF6
\u2514\u2500\u2500 package.json               # package.json

</code></pre></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u514B\u9686\u9879\u76EE</span>
<span class="token function">git</span> clone https://github.com/mrhaoxiaojun/vue3-antd-admin.git

<span class="token comment"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> vue3-antd-admin

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># \u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF\u4EE3\u7406</span>
<span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token comment"># \u672C\u5730\u5F00\u53D1 \u542F\u52A8\u9879\u76EE</span>
<span class="token function">npm</span> run dev

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u9047\u5230npm\u5B89\u88C5\u5931\u8D25\u7684\u95EE\u9898\u8BF7\u5C1D\u8BD5\u5207\u6362\u5230\u6DD8\u5B9D\u955C\u50CF</p></div><p>\u542F\u52A8\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://127.0.0.1:3000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:3000</a>\uFF0C \u4F60\u770B\u5230\u4E0B\u9762\u7684\u9875\u9762\u5C31\u4EE3\u8868\u64CD\u4F5C\u6210\u529F\u4E86\u3002</p><p><a href="../imgs/login.jpg"><img src="`+s+'" alt=""></a></p><p>\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u4FEE\u6539\u4EE3\u7801\u8FDB\u884C\u4E1A\u52A1\u5F00\u53D1\u4E86\uFF0C\u672C\u9879\u76EE\u5185\u5EFA\u4E86\u5178\u578B\u4E1A\u52A1\u6A21\u677F\u3001\u5E38\u7528\u4E1A\u52A1\u7EC4\u4EF6\u3001\u6A21\u62DF\u6570\u636E\u3001\u72B6\u6001\u7BA1\u7406\u3001\u5168\u5C40\u8DEF\u7531\u7B49\u7B49\u5404\u79CD\u5B9E\u7528\u7684\u529F\u80FD\u6765\u8F85\u52A9\u5F00\u53D1\uFF0C\u4F60\u53EF\u4EE5\u7EE7\u7EED\u9605\u8BFB\u548C\u63A2\u7D22\u5DE6\u4FA7\u7684\u5176\u5B83\u6587\u6863\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u5EFA\u8BAE</p><p>\u4F60\u53EF\u4EE5\u628A\u4ED3\u5E93\u7684component\u5206\u652F\u5F53\u505A\u5DE5\u5177\u7BB1\u6216\u8005\u96C6\u6210\u65B9\u6848\u4ED3\u5E93\uFF0C\u5728master\u4E3B\u5206\u652F\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\uFF0C\u60F3\u8981\u4EC0\u4E48\u529F\u80FD\u6216\u8005\u7EC4\u4EF6\u5C31\u53BBcomponent\u5206\u652F\u90A3\u91CC\u590D\u5236\u8FC7\u6765\u3002</p></div><h2 id="\u53CD\u9988\u5EFA\u8BAE" tabindex="-1">\u53CD\u9988\u5EFA\u8BAE <a class="header-anchor" href="#\u53CD\u9988\u5EFA\u8BAE" aria-hidden="true">#</a></h2><p>\u6709\u4EFB\u4F55\u4FEE\u6539\u548C\u5EFA\u8BAE\u90FD\u53EF\u4EE5\u4E3A\u8BE5\u9879\u76EE pr \u548C issue\u3002</p><p>\u8FD8\u5728\u6301\u7EED\u8FED\u4EE3\u4E2D\uFF0C\u9010\u6B65\u6C89\u6DC0\u548C\u603B\u7ED3\u51FA\u66F4\u591A\u529F\u80FD\u548C\u76F8\u5E94\u7684\u5B9E\u73B0\u4EE3\u7801\uFF0C\u603B\u7ED3\u4E2D\u540E\u53F0\u4EA7\u54C1\u6A21\u677F/\u7EC4\u4EF6/\u4E1A\u52A1\u573A\u666F\u7684\u6700\u4F73\u5B9E\u8DF5\u3002\u672C\u9879\u76EE\u4E5F\u5341\u5206\u671F\u5F85\u4F60\u7684\u53C2\u4E0E\u548C\u53CD\u9988\u3002</p><h2 id="ide" tabindex="-1">IDE <a class="header-anchor" href="#ide" aria-hidden="true">#</a></h2><p>\u4F7F\u7528vue3.0\u7248\u672C\u5F00\u53D1\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u5C06\xA0<a href="https://visual-studio-code.en.softonic.com/" target="_blank" rel="noopener noreferrer">VS Code</a>\u5B89\u88C5Vue Language Features (Volar)\u8FD9\u6B3E\u63D2\u4EF6\uFF0C\u5E76\u7981\u7528Vetur\u63D2\u4EF6\u3002</p><h2 id="\u6350\u8D60" tabindex="-1">\u6350\u8D60 <a class="header-anchor" href="#\u6350\u8D60" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u4E2A\u9879\u76EE\u5E2E\u52A9\u5230\u4E86\u4F60\uFF0C\u70B9\u4E2A\u8D5E \u2764\uFE0F</p>',27),i=[o];function l(c,p,d,h,g,m){return a(),n("div",null,i)}var f=e(r,[["render",l]]);export{v as __pageData,f as default};
