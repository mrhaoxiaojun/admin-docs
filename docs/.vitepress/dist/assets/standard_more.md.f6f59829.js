import{_ as n,c as s,o as a,a as t}from"./app.263436ba.js";const h='{"title":"html\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"html\u89C4\u8303","slug":"html\u89C4\u8303"},{"level":2,"title":"css\u89C4\u8303","slug":"css\u89C4\u8303"},{"level":2,"title":"js\u89C4\u8303\u7EC6\u5219","slug":"js\u89C4\u8303\u7EC6\u5219"}],"relativePath":"standard/more.md"}',p={},o=t(`<h2 id="html\u89C4\u8303" tabindex="-1">html\u89C4\u8303 <a class="header-anchor" href="#html\u89C4\u8303" aria-hidden="true">#</a></h2><h4 id="_1-html5-doctype" tabindex="-1">1.HTML5 doctype <a class="header-anchor" href="#_1-html5-doctype" aria-hidden="true">#</a></h4><p>\u5728\u9875\u9762\u5F00\u5934\u4F7F\u7528\u8FD9\u4E2A\u7B80\u5355\u5730doctype\u6765\u542F\u7528\u6807\u51C6\u6A21\u5F0F\uFF0C\u4F7F\u5176\u5728\u6BCF\u4E2A\u6D4F\u89C8\u5668\u4E2D\u5C3D\u53EF\u80FD\u4E00\u81F4\u7684\u5C55\u73B0\uFF1B</p><p>\u867D\u7136doctype\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u4F46\u662F\u6309\u7167\u60EF\u4F8B\uFF0Cdoctype\u5927\u5199 \uFF08<a href="http://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname" target="_blank" rel="noopener noreferrer">\u5173\u4E8Ehtml\u5C5E\u6027\uFF0C\u5927\u5199\u8FD8\u662F\u5C0F\u5199</a>\uFF09\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_2-lang\u5C5E\u6027" tabindex="-1">2.lang\u5C5E\u6027 <a class="header-anchor" href="#_2-lang\u5C5E\u6027" aria-hidden="true">#</a></h4><p>\u6839\u636EHTML5\u89C4\u8303\uFF1A</p><blockquote><p>\u5E94\u5728html\u6807\u7B7E\u4E0A\u52A0\u4E0Alang\u5C5E\u6027\u3002\u8FD9\u4F1A\u7ED9\u8BED\u97F3\u5DE5\u5177\u548C\u7FFB\u8BD1\u5DE5\u5177\u5E2E\u52A9\uFF0C\u544A\u8BC9\u5B83\u4EEC\u5E94\u5F53\u600E\u4E48\u53BB\u53D1\u97F3\u548C\u7FFB\u8BD1\u3002</p></blockquote><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528 lang=&quot;zh-cmn-Hans&quot; \u800C\u4E0D\u662F\u6211\u4EEC\u901A\u5E38\u5199\u7684 lang=&quot;zh-CN&quot; \u5462? \u8BF7\u53C2\u8003\u77E5\u4E4E\u4E0A\u7684\u8BA8\u8BBA:\xA0<a href="http://www.zhihu.com/question/20797118" target="_blank" rel="noopener noreferrer">\u7F51\u9875\u5934\u90E8\u7684\u58F0\u660E\u5E94\u8BE5\u662F\u7528 lang=&quot;zh&quot; \u8FD8\u662F lang=&quot;zh-cn&quot;\uFF1F</a></p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-cmn-Hans<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_3-\u5B57\u7B26\u7F16\u7801" tabindex="-1">3.\u5B57\u7B26\u7F16\u7801 <a class="header-anchor" href="#_3-\u5B57\u7B26\u7F16\u7801" aria-hidden="true">#</a></h4><p>\u901A\u8FC7\u58F0\u660E\u4E00\u4E2A\u660E\u786E\u7684\u5B57\u7B26\u7F16\u7801\uFF0C\u8BA9\u6D4F\u89C8\u5668\u8F7B\u677E\u3001\u5FEB\u901F\u7684\u786E\u5B9A\u9002\u5408\u7F51\u9875\u5185\u5BB9\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u901A\u5E38\u6307\u5B9A\u4E3A&#39;UTF-8&#39;\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-cmn-Hans<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_4-ie\u517C\u5BB9\u6A21\u5F0F\u53CA\u56FD\u5185360\u6D4F\u89C8\u5668\u5185\u6838\u63A7\u5236" tabindex="-1">4.IE\u517C\u5BB9\u6A21\u5F0F\u53CA\u56FD\u5185360\u6D4F\u89C8\u5668\u5185\u6838\u63A7\u5236 <a class="header-anchor" href="#_4-ie\u517C\u5BB9\u6A21\u5F0F\u53CA\u56FD\u5185360\u6D4F\u89C8\u5668\u5185\u6838\u63A7\u5236" aria-hidden="true">#</a></h4><p>\u7528\xA0<code>&lt;meta&gt;</code>\xA0\u6807\u7B7E\u53EF\u4EE5\u6307\u5B9A\u9875\u9762\u5E94\u8BE5\u7528\u4EC0\u4E48\u7248\u672C\u7684IE\u6765\u6E32\u67D3\uFF1B</p><p>\u5982\u679C\u4F60\u60F3\u8981\u4E86\u89E3\u66F4\u591A\uFF0C\u8BF7\u70B9\u51FB<a href="http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\uFF1B</p><p>360\u6D4F\u89C8\u5668\u65B0\u589E\u52A0\u4E86\u4E00\u4E2A\u63A7\u5236\u624B\u6BB5\uFF1A\u5185\u6838\u63A7\u5236Meta\u6807\u7B7E\u3002\u53EA\u8981\u4F60\u5728\u81EA\u5DF1\u7684\u7F51\u7AD9\u91CC\u589E\u52A0\u4E00\u4E2AMeta\u6807\u7B7E\uFF0C\u544A\u8BC9360\u6D4F\u89C8\u5668\u8FD9\u4E2A\u7F51\u5740\u5E94\u8BE5\u7528\u54EA\u4E2A\u5185\u6838\u6E32\u67D3\uFF0C\u90A3\u4E48360\u6D4F\u89C8\u5668\u5C31\u4F1A\u5728\u8BFB\u53D6\u5230\u8FD9\u4E2A\u6807\u7B7E\u540E\uFF0C\u7ACB\u5373\u5207\u6362\u5BF9\u5E94\u7684\u5185\u6838\u3002\u5E76\u5C06\u8FD9\u4E2A\u884C\u4E3A\u5E94\u7528\u4E8E\u8FD9\u4E2A\u4E8C\u7EA7\u57DF\u540D\u4E0B\u6240\u6709\u7F51\u5740\u3002\u5982\u679C\u60F3\u4E86\u89E3360\u7684\u6E32\u67D3\u63A7\u5236\u6807\u7B7E\uFF0C\u8BF7\u70B9\u51FB<a href="http://se.360.cn/v6/help/meta.html" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\uFF1B</p><p>\u4E0D\u540Cdoctype\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u4F1A\u89E6\u53D1\u4E0D\u540C\u7684\u6E32\u67D3\u6A21\u5F0F\uFF08<a href="https://hsivonen.fi/doctype/" target="_blank" rel="noopener noreferrer">\u8FD9\u7BC7\u6587\u7AE0</a>\u603B\u7ED3\u7684\u5F88\u5230\u4F4D\uFF09\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=Edge,chrome=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webkit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_5-\u5F15\u5165css-js" tabindex="-1">5.\u5F15\u5165CSS, JS <a class="header-anchor" href="#_5-\u5F15\u5165css-js" aria-hidden="true">#</a></h4><p>\u6839\u636EHTML5\u89C4\u8303, \u901A\u5E38\u5728\u5F15\u5165CSS\u548CJS\u65F6\u4E0D\u9700\u8981\u6307\u660E<code>type</code>\uFF0C\u56E0\u4E3A\xA0<code>text/css</code>\xA0\u548C\xA0<code>text/javascript</code>\xA0\u5206\u522B\u662F\u4ED6\u4EEC\u7684\u9ED8\u8BA4\u503C\u3002</p><h4 id="_6-\u811A\u672C\u52A0\u8F7D" tabindex="-1">6.\u811A\u672C\u52A0\u8F7D <a class="header-anchor" href="#_6-\u811A\u672C\u52A0\u8F7D" aria-hidden="true">#</a></h4><p>\u811A\u672C\u5F15\u7528\u5199\u5728 body \u7ED3\u675F\u6807\u7B7E\u4E4B\u524D\u3002</p><h4 id="_7-\u5C5E\u6027\u987A\u5E8F" tabindex="-1">7.\u5C5E\u6027\u987A\u5E8F <a class="header-anchor" href="#_7-\u5C5E\u6027\u987A\u5E8F" aria-hidden="true">#</a></h4><p>\u5C5E\u6027\u5E94\u8BE5\u6309\u7167\u7279\u5B9A\u7684\u987A\u5E8F\u51FA\u73B0\u4EE5\u4FDD\u8BC1\u6613\u8BFB\u6027\uFF1B</p><ul><li><code>class</code></li><li><code>id</code></li><li><code>name</code></li><li><code>data-*</code></li><li><code>src</code>,\xA0<code>for</code>,\xA0<code>type</code>,\xA0<code>href</code>,\xA0<code>value</code>\xA0,\xA0<code>max-length</code>,\xA0<code>max</code>,<code>min</code>,\xA0<code>pattern</code></li><li><code>placeholder</code>,\xA0<code>title</code>,\xA0<code>alt</code></li><li><code>aria-*</code>,\xA0<code>role</code></li><li><code>required</code>,\xA0<code>readonly</code>,\xA0<code>disabled</code></li></ul><p>class\u662F\u4E3A\u9AD8\u53EF\u590D\u7528\u7EC4\u4EF6\u8BBE\u8BA1\u7684\uFF0C\u6240\u4EE5\u5E94\u5904\u5728\u7B2C\u4E00\u4F4D\uFF1B</p><p>id\u66F4\u52A0\u5177\u4F53\u4E14\u5E94\u8BE5\u5C3D\u91CF\u5C11\u4F7F\u7528\uFF0C\u6240\u4EE5\u5C06\u5B83\u653E\u5728\u7B2C\u4E8C\u4F4D\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Example link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_8-boolean\u5C5E\u6027" tabindex="-1">8.boolean\u5C5E\u6027 <a class="header-anchor" href="#_8-boolean\u5C5E\u6027" aria-hidden="true">#</a></h4><p>boolean\u5C5E\u6027\u6307\u4E0D\u9700\u8981\u58F0\u660E\u53D6\u503C\u7684\u5C5E\u6027\uFF0CXHTML\u9700\u8981\u6BCF\u4E2A\u5C5E\u6027\u58F0\u660E\u53D6\u503C\uFF0C\u4F46\u662FHTML5\u5E76\u4E0D\u9700\u8981\uFF1B</p><p>\u66F4\u591A\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003\xA0<a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes" target="_blank" rel="noopener noreferrer">WhatWG section on boolean attributes</a>\uFF1A</p><blockquote><p>boolean\u5C5E\u6027\u7684\u5B58\u5728\u8868\u793A\u53D6\u503C\u4E3Atrue\uFF0C\u4E0D\u5B58\u5728\u5219\u8868\u793A\u53D6\u503C\u4E3Afalse\u3002</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selected</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_7-\u5185\u8054\u6837\u5F0F" tabindex="-1">7.\u5185\u8054\u6837\u5F0F <a class="header-anchor" href="#_7-\u5185\u8054\u6837\u5F0F" aria-hidden="true">#</a></h4><p>HTML\u6807\u7B7E\u5185\u4E0D\u5EFA\u8BAE\u5185\u8054\u6837\u5F0F\uFF0C\u5E94\u62BD\u79BB\u51FA\u6765\u653E\u5728CSS\u6587\u4EF6\u4E2D\u3002</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- not good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

.article-info {
  font-size: 14px;
  line-height: 20px;
}
</code></pre></div><h4 id="_8-\u51CF\u5C11\u6807\u7B7E\u6570\u91CF" tabindex="-1">8.\u51CF\u5C11\u6807\u7B7E\u6570\u91CF <a class="header-anchor" href="#_8-\u51CF\u5C11\u6807\u7B7E\u6570\u91CF" aria-hidden="true">#</a></h4><p>\u5728\u7F16\u5199HTML\u4EE3\u7801\u65F6\uFF0C\u9700\u8981\u5C3D\u91CF\u907F\u514D\u591A\u4F59\u7684\u7236\u8282\u70B9\uFF1B</p><p>\u5F88\u591A\u65F6\u5019\uFF0C\u9700\u8981\u901A\u8FC7\u8FED\u4EE3\u548C\u91CD\u6784\u6765\u4F7FHTML\u53D8\u5F97\u66F4\u5C11\u3002</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- Not well --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Better --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_9-\u5B9E\u7528\u9AD8\u4E8E\u5B8C\u7F8E" tabindex="-1">9.\u5B9E\u7528\u9AD8\u4E8E\u5B8C\u7F8E <a class="header-anchor" href="#_9-\u5B9E\u7528\u9AD8\u4E8E\u5B8C\u7F8E" aria-hidden="true">#</a></h4><p>\u5C3D\u91CF\u9075\u5FAAHTML\u6807\u51C6\u548C\u8BED\u4E49\uFF0C\u4F46\u662F\u4E0D\u5E94\u8BE5\u4EE5\u6D6A\u8D39\u5B9E\u7528\u6027\u4F5C\u4E3A\u4EE3\u4EF7\uFF1B</p><p>\u4EFB\u4F55\u65F6\u5019\u90FD\u8981\u7528\u5C3D\u91CF\u5C0F\u7684\u590D\u6742\u5EA6\u548C\u5C3D\u91CF\u5C11\u7684\u6807\u7B7E\u6765\u89E3\u51B3\u95EE\u9898\u3002</p><h2 id="css\u89C4\u8303" tabindex="-1">css\u89C4\u8303 <a class="header-anchor" href="#css\u89C4\u8303" aria-hidden="true">#</a></h2><h4 id="_1-\u5408\u7406\u7684\u907F\u514D\u4F7F\u7528id" tabindex="-1">1.\u5408\u7406\u7684\u907F\u514D\u4F7F\u7528ID <a class="header-anchor" href="#_1-\u5408\u7406\u7684\u907F\u514D\u4F7F\u7528id" aria-hidden="true">#</a></h4><p>\u5C3D\u91CF\u5C11\u7528id,\u5148\u8003\u8651\u7528class</p><h4 id="_2-\u7F29\u5199\u5C5E\u6027" tabindex="-1">2.\u7F29\u5199\u5C5E\u6027 <a class="header-anchor" href="#_2-\u7F29\u5199\u5C5E\u6027" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u7F29\u5199\u5C5E\u6027\uFF0C\u63D0\u9AD8\u4EE3\u7801\u6548\u7387\u548C\u53EF\u8BFB\u6027</p><div class="language-css"><pre><code><span class="token property">padding-bottom</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token property">padding-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">padding-right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
\u53EF\u4EE5\u5199\u6210
<span class="token property">padding</span><span class="token punctuation">:</span> 0 1em 2em<span class="token punctuation">;</span>
</code></pre></div><h4 id="_3-\u5355\u4F4D\u548C0" tabindex="-1">3.\u5355\u4F4D\u548C0 <a class="header-anchor" href="#_3-\u5355\u4F4D\u548C0" aria-hidden="true">#</a></h4><p>\u7701\u7565\u201C0\u201D\u503C\u540E\u9762\u7684\u5355\u4F4D\u3002\u4E0D\u8981\u57280\u503C\u540E\u9762\u4F7F\u7528\u5355\u4F4D\uFF0C\u9664\u975E\u6709\u503C\u3002</p><h4 id="_4-\u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5" tabindex="-1">4.\u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5 <a class="header-anchor" href="#_4-\u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5" aria-hidden="true">#</a></h4><p>\u53EF\u80FD\u7684\u8BDD\uFF0C\u4F7F\u75283\u4E2A\u5B57\u7B26\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5\uFF0C3\u4E2A\u5B57\u7B26\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5\u66F4\u7B80\u77ED\u3002</p><div class="language-css"><pre><code>//\u4E0D\u63A8\u8350
<span class="token property">color</span><span class="token punctuation">:</span> #FF33AA<span class="token punctuation">;</span> 
//\u63A8\u8350
<span class="token property">color</span><span class="token punctuation">:</span> #f3a<span class="token punctuation">;</span>
</code></pre></div><h4 id="_5-\u58F0\u660E\u7ED3\u675F" tabindex="-1">5.\u58F0\u660E\u7ED3\u675F <a class="header-anchor" href="#_5-\u58F0\u660E\u7ED3\u675F" aria-hidden="true">#</a></h4><p>\u4E3A\u4E86\u4FDD\u8BC1\u4E00\u81F4\u6027\u548C\u53EF\u6269\u5C55\u6027\uFF0C\u6BCF\u4E2A\u58F0\u660E\u5E94\u8BE5\u7528\u5206\u53F7\u7ED3\u675F\uFF0C\u6BCF\u4E2A\u58F0\u660E\u6362\u884C\u3002</p><h4 id="_6-\u5C5E\u6027\u540D\u7ED3\u675F" tabindex="-1">6.\u5C5E\u6027\u540D\u7ED3\u675F <a class="header-anchor" href="#_6-\u5C5E\u6027\u540D\u7ED3\u675F" aria-hidden="true">#</a></h4><p>\u5C5E\u6027\u540D\u7684\u5192\u53F7\u540E\u4F7F\u7528\u4E00\u4E2A\u7A7A\u683C\u3002\u51FA\u4E8E\u4E00\u81F4\u6027\u7684\u539F\u56E0\uFF0C \u5C5E\u6027\u548C\u503C\uFF08\u4F46\u5C5E\u6027\u548C\u5192\u53F7\u4E4B\u95F4\u6CA1\u6709\u7A7A\u683C\uFF09\u7684\u4E4B\u95F4\u59CB\u7EC8\u4F7F\u7528\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-css"><pre><code><span class="token selector">//\u4E0D\u63A8\u8350
h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u63A8\u8350
h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7-\u9009\u62E9\u5668\u5D4C\u5957-less-scss" tabindex="-1">7.\u9009\u62E9\u5668\u5D4C\u5957 (LESS,SCSS) <a class="header-anchor" href="#_7-\u9009\u62E9\u5668\u5D4C\u5957-less-scss" aria-hidden="true">#</a></h4><p>\u5728Sass,less\u4E2D\u4F60\u53EF\u4EE5\u5D4C\u5957\u9009\u62E9\u5668\uFF0C\u8FD9\u53EF\u4EE5\u4F7F\u4EE3\u7801\u53D8\u5F97\u66F4\u6E05\u6D01\u548C\u53EF\u8BFB\u3002\u5D4C\u5957\u6240\u6709\u7684\u9009\u62E9\u5668\uFF0C\u4F46\u5C3D\u91CF\u907F\u514D\u5D4C\u5957\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u7684\u9009\u62E9\u5668\u3002</p><h4 id="_8-css-reset\uFF08\u6E90\u81EAbootstrap\uFF09" tabindex="-1">8.CSS reset\uFF08\u6E90\u81EABootstrap\uFF09 <a class="header-anchor" href="#_8-css-reset\uFF08\u6E90\u81EAbootstrap\uFF09" aria-hidden="true">#</a></h4><p>\u811A\u624B\u67B6\u4E2D\u5DF2\u7ECF\u6709\u4F53\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u62FF\u5F00\u6E90\u7684\u5982\u4E0B</p><div class="language-css"><pre><code><span class="token comment">/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */</span>

<span class="token comment">/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
 */</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">-ms-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
  <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the margin in all browsers (opinionated).
 */</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* HTML5 display definitions
   ========================================================================== */</span>

<span class="token comment">/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 * 2. Add the correct display in IE.
 */</span>

article<span class="token punctuation">,</span>
aside<span class="token punctuation">,</span>
details<span class="token punctuation">,</span> <span class="token comment">/* 1 */</span>
figcaption<span class="token punctuation">,</span>
figure<span class="token punctuation">,</span>
footer<span class="token punctuation">,</span>
header<span class="token punctuation">,</span>
main<span class="token punctuation">,</span> <span class="token comment">/* 2 */</span>
<span class="token selector">menu,
nav,
section,
summary</span> <span class="token punctuation">{</span> <span class="token comment">/* 1 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct display in IE 9-.
 */</span>

<span class="token selector">audio,
canvas,
progress,
video</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct display in iOS 4-7.
 */</span>

<span class="token selector">audio:not([controls])</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */</span>

<span class="token selector">progress</span> <span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct display in IE 10-.
 * 1. Add the correct display in IE.
 */</span>

template<span class="token punctuation">,</span> <span class="token comment">/* 1 */</span>
<span class="token selector">[hidden]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Links
   ========================================================================== */</span>

<span class="token comment">/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">-webkit-text-decoration-skip</span><span class="token punctuation">:</span> objects<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */</span>

<span class="token selector">a:active,
a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">outline-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Text-level semantics
   ========================================================================== */</span>

<span class="token comment">/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */</span>

<span class="token selector">abbr[title]</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline dotted<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Prevent the duplicate application of \`bolder\` by the next rule in Safari 6.
 */</span>

<span class="token selector">b,
strong</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */</span>

<span class="token selector">b,
strong</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct font style in Android 4.3-.
 */</span>

<span class="token selector">dfn</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.67em 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct background and color in IE 9-.
 */</span>

<span class="token selector">mark</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct font size in all browsers.
 */</span>

<span class="token selector">small</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */</span>

<span class="token selector">sub,
sup</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">sub</span> <span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -0.25em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">sup</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -0.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Embedded content
   ========================================================================== */</span>

<span class="token comment">/**
 * Remove the border on images inside links in IE 10-.
 */</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Hide the overflow in IE.
 */</span>

<span class="token selector">svg:not(:root)</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Grouping content
   ========================================================================== */</span>

<span class="token comment">/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */</span>

<span class="token selector">code,
kbd,
pre,
samp</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct margin in IE 8.
 */</span>

<span class="token selector">figure</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1em 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */</span>

<span class="token selector">hr</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Forms
   ========================================================================== */</span>

<span class="token comment">/**
 * 1. Change font properties to \`inherit\` in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */</span>

<span class="token selector">button,
input,
select,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Restore the font weight unset by the previous rule.
 */</span>

<span class="token selector">optgroup</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */</span>

<span class="token selector">button,
input</span> <span class="token punctuation">{</span> <span class="token comment">/* 1 */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */</span>

<span class="token selector">button,
select</span> <span class="token punctuation">{</span> <span class="token comment">/* 1 */</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */</span>

button<span class="token punctuation">,</span>
html [type=<span class="token string">&quot;button&quot;</span>]<span class="token punctuation">,</span> <span class="token comment">/* 1 */</span>
<span class="token selector">[type=&quot;reset&quot;],
[type=&quot;submit&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inner border and padding in Firefox.
 */</span>

<span class="token selector">button::-moz-focus-inner,
[type=&quot;button&quot;]::-moz-focus-inner,
[type=&quot;reset&quot;]::-moz-focus-inner,
[type=&quot;submit&quot;]::-moz-focus-inner</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Restore the focus styles unset by the previous rule.
 */</span>

<span class="token selector">button:-moz-focusring,
[type=&quot;button&quot;]:-moz-focusring,
[type=&quot;reset&quot;]:-moz-focusring,
[type=&quot;submit&quot;]:-moz-focusring</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px dotted ButtonText<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */</span>

<span class="token selector">fieldset</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #c0c0c0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 2px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.35em 0.625em 0.75em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */</span>

<span class="token selector">legend</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 3 */</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the default vertical scrollbar in IE.
 */</span>

<span class="token selector">textarea</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */</span>

<span class="token selector">[type=&quot;checkbox&quot;],
[type=&quot;radio&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */</span>

<span class="token selector">[type=&quot;number&quot;]::-webkit-inner-spin-button,
[type=&quot;number&quot;]::-webkit-outer-spin-button</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */</span>

<span class="token selector">[type=&quot;search&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">outline-offset</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
 */</span>

<span class="token selector">[type=&quot;search&quot;]::-webkit-search-cancel-button,
[type=&quot;search&quot;]::-webkit-search-decoration</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Correct the text style of placeholders in Chrome, Edge, and Safari.
 */</span>

<span class="token selector">::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.54<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */</span>

<span class="token selector">::-webkit-file-upload-button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span>
  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_9-css3\u5C5E\u6027\u524D\u7F00\u517C\u5BB9" tabindex="-1">9.CSS3\u5C5E\u6027\u524D\u7F00\u517C\u5BB9 <a class="header-anchor" href="#_9-css3\u5C5E\u6027\u524D\u7F00\u517C\u5BB9" aria-hidden="true">#</a></h4><p>css3\u53EA\u9700\u8981\u5199\u6807\u51C6\u5C5E\u6027\u548C\u503C\uFF0C\u901A\u8FC7Autoprefixer\u6784\u5EFA\u5DE5\u5177\u6765\u81EA\u52A8\u5B9E\u73B0\u517C\u5BB9\u5C5E\u6027\u524D\u7F00\u8865\u5168\u3002</p><div class="language-scss"><pre><code><span class="token comment">/* not good */</span>
<span class="token selector">.element </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
       <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-moz-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h2 id="js\u89C4\u8303\u7EC6\u5219" tabindex="-1">js\u89C4\u8303\u7EC6\u5219 <a class="header-anchor" href="#js\u89C4\u8303\u7EC6\u5219" aria-hidden="true">#</a></h2><h4 id="_1-\u7F16\u7801\u901A\u7528\u539F\u5219" tabindex="-1">1.\u7F16\u7801\u901A\u7528\u539F\u5219 <a class="header-anchor" href="#_1-\u7F16\u7801\u901A\u7528\u539F\u5219" aria-hidden="true">#</a></h4><ul><li><strong>\u5355\u4E00\u804C\u8D23\u539F\u5219</strong> \u4E00\u4E2A\u7C7B\u53EA\u80FD\u5E72\u4E00\u4E2A\u4E8B\u60C5, \u4E00\u4E2A\u65B9\u6CD5\u6700\u597D\u4E5F\u53EA\u5E72\u4E00\u4EF6\u4E8B\u60C5\u3002</li><li><strong>DRY\u539F\u5219</strong> DRY\uFF08Don&#39;t repeat yourself\uFF09\uFF0C\u591A\u5904\u4F7F\u7528\u7684\u4EE3\u7801\u9700\u8981\u62BD\u79BB\u51FA\u6765\u5C01\u88C5\u6210\u516C\u7528\u65B9\u6CD5</li><li><strong>\u9519\u8BEF\u5904\u7406</strong> \u6709\u6CA1\u6709\u5BB9\u9519\u5904\u7406\uFF0Ctry catch\uFF0C\u62A5\u9519\u4E86\u80FD\u5426\u7EE7\u7EED\u4FDD\u6301\u9875\u9762\u7684\u6B63\u5E38\u8FD0\u884C\uFF1B</li><li><strong>\u53EF\u8BFB\u6027</strong> \u4EE3\u7801\u662F\u5426\u53EF\u8BFB\uFF0C\u5C3D\u53EF\u80FD\u5C11\u7684\u201C\u9ED1\u9B54\u6CD5\u201D</li></ul><h4 id="_2-\u4E0D\u8981\u91CD\u590D\u58F0\u660E\u53D8\u91CF\u3002" tabindex="-1">2.\u4E0D\u8981\u91CD\u590D\u58F0\u660E\u53D8\u91CF\u3002 <a class="header-anchor" href="#_2-\u4E0D\u8981\u91CD\u590D\u58F0\u660E\u53D8\u91CF\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;Jane&#39;</span>     <span class="token comment">// \u2717 no good</span>

<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span>
name <span class="token operator">=</span> <span class="token string">&#39;Jane&#39;</span>         <span class="token comment">// \u2713 good</span>

</code></pre></div><h4 id="_3-return-\u8BED\u53E5\u4E2D\u7684\u8D4B\u503C\u5FC5\u9700\u6709\u62EC\u53F7\u5305\u88F9\u3002" tabindex="-1">3. return \u8BED\u53E5\u4E2D\u7684\u8D4B\u503C\u5FC5\u9700\u6709\u62EC\u53F7\u5305\u88F9\u3002 <a class="header-anchor" href="#_3-return-\u8BED\u53E5\u4E2D\u7684\u8D4B\u503C\u5FC5\u9700\u6709\u62EC\u53F7\u5305\u88F9\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b     <span class="token comment">// \u2717 no good</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
<span class="token punctuation">}</span>


</code></pre></div><h4 id="_4-\u5173\u952E\u5B57\u540E\u9762\u52A0\u7A7A\u683C\u3002" tabindex="-1">4.\u5173\u952E\u5B57\u540E\u9762\u52A0\u7A7A\u683C\u3002 <a class="header-anchor" href="#_4-\u5173\u952E\u5B57\u540E\u9762\u52A0\u7A7A\u683C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>   <span class="token comment">// \u2713 good</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
</code></pre></div><h4 id="_5-\u51FD\u6570\u58F0\u660E\u65F6\u62EC\u53F7\u4E0E\u51FD\u6570\u540D\u95F4\u52A0\u7A7A\u683C\u3002" tabindex="-1">5.\u51FD\u6570\u58F0\u660E\u65F6\u62EC\u53F7\u4E0E\u51FD\u6570\u540D\u95F4\u52A0\u7A7A\u683C\u3002 <a class="header-anchor" href="#_5-\u51FD\u6570\u58F0\u660E\u65F6\u62EC\u53F7\u4E0E\u51FD\u6570\u540D\u95F4\u52A0\u7A7A\u683C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>   <span class="token comment">// \u2713 good</span>
<span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
</code></pre></div><h4 id="_6-\u59CB\u7EC8\u4F7F\u7528-\u66FF\u4EE3-\u3002" tabindex="-1">6.\u59CB\u7EC8\u4F7F\u7528 === \u66FF\u4EE3 ==\u3002 <a class="header-anchor" href="#_6-\u59CB\u7EC8\u4F7F\u7528-\u66FF\u4EE3-\u3002" aria-hidden="true">#</a></h4><p>\u4F8B\u5916\uFF1A obj == null \u53EF\u4EE5\u7528\u6765\u68C0\u67E5 null || undefined\u3002</p><h4 id="_7-\u5B57\u7B26\u4E32\u62FC\u63A5\u63A8\u8350es6\u8BED\u6CD5\u3002" tabindex="-1">7.\u5B57\u7B26\u4E32\u62FC\u63A5\u63A8\u8350es6\u8BED\u6CD5\u3002 <a class="header-anchor" href="#_7-\u5B57\u7B26\u4E32\u62FC\u63A5\u63A8\u8350es6\u8BED\u6CD5\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token comment">// \u2713 good</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// \u2717 no good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&#39;hello, &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;!&#39;</span>
</code></pre></div><h4 id="_8-null" tabindex="-1">8.null <a class="header-anchor" href="#_8-null" aria-hidden="true">#</a></h4><p>\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>\u521D\u59CB\u5316\u4E00\u4E2A\u5C06\u6765\u53EF\u80FD\u88AB\u8D4B\u503C\u4E3A\u5BF9\u8C61\u7684\u53D8\u91CF</li><li>\u4E0E\u5DF2\u7ECF\u521D\u59CB\u5316\u7684\u53D8\u91CF\u505A\u6BD4\u8F83</li><li>\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\u7684\u51FD\u6570\u7684\u8C03\u7528\u4F20\u53C2</li><li>\u4F5C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570\u7684\u8FD4\u56DE\u503C</li></ul><p>\u4E0D\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>\u4E0D\u8981\u7528null\u6765\u5224\u65AD\u51FD\u6570\u8C03\u7528\u65F6\u6709\u65E0\u4F20\u53C2</li><li>\u4E0D\u8981\u4E0E\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u505A\u6BD4\u8F83</li></ul><div class="language-js"><pre><code><span class="token comment">// not good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// not mean b is not supply</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_9-undefined" tabindex="-1">9.undefined <a class="header-anchor" href="#_9-undefined" aria-hidden="true">#</a></h4><p>\u6C38\u8FDC\u4E0D\u8981\u76F4\u63A5\u4F7F\u7528undefined\u8FDB\u884C\u53D8\u91CF\u5224\u65AD\uFF1B</p><p>\u4F7F\u7528typeof\u548C\u5B57\u7B26\u4E32&#39;undefined&#39;\u5BF9\u53D8\u91CF\u8FDB\u884C\u5224\u65AD\u3002</p><div class="language-js"><pre><code><span class="token comment">// not good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>person <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> person <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_10-\u5982\u679C\u6709\u66F4\u597D\u7684\u5B9E\u73B0\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u4E09\u5143\u8868\u8FBE\u5F0F\u3002" tabindex="-1">10.\u5982\u679C\u6709\u66F4\u597D\u7684\u5B9E\u73B0\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u4E09\u5143\u8868\u8FBE\u5F0F\u3002 <a class="header-anchor" href="#_10-\u5982\u679C\u6709\u66F4\u597D\u7684\u5B9E\u73B0\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u4E09\u5143\u8868\u8FBE\u5F0F\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">let</span> score <span class="token operator">=</span> val <span class="token operator">?</span> val <span class="token operator">:</span> <span class="token number">0</span>     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">let</span> score <span class="token operator">=</span> val <span class="token operator">||</span> <span class="token number">0</span>          <span class="token comment">// \u2713 good</span>


</code></pre></div><h4 id="_11-import-export-\u548C\u89E3\u6784\u64CD\u4F5C\u4E2D\uFF0C\u7981\u6B62\u8D4B\u503C\u5230\u540C\u540D\u53D8\u91CF\u3002" tabindex="-1">11.import, export \u548C\u89E3\u6784\u64CD\u4F5C\u4E2D\uFF0C\u7981\u6B62\u8D4B\u503C\u5230\u540C\u540D\u53D8\u91CF\u3002 <a class="header-anchor" href="#_11-import-export-\u548C\u89E3\u6784\u64CD\u4F5C\u4E2D\uFF0C\u7981\u6B62\u8D4B\u503C\u5230\u540C\u540D\u53D8\u91CF\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token keyword">as</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span>     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span>               <span class="token comment">// \u2713 good</span>


</code></pre></div><h4 id="_12-\u7981\u6B62\u4F7F\u7528-with\u3002" tabindex="-1">12.\u7981\u6B62\u4F7F\u7528 with\u3002 <a class="header-anchor" href="#_12-\u7981\u6B62\u4F7F\u7528-with\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">with</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>

</code></pre></div><h4 id="_13-\u5C55\u5F00\u8FD0\u7B97\u7B26\u4E0E\u5B83\u7684\u8868\u8FBE\u5F0F\u95F4\u4E0D\u8981\u7559\u7A7A\u767D\u3002" tabindex="-1">13.\u5C55\u5F00\u8FD0\u7B97\u7B26\u4E0E\u5B83\u7684\u8868\u8FBE\u5F0F\u95F4\u4E0D\u8981\u7559\u7A7A\u767D\u3002 <a class="header-anchor" href="#_13-\u5C55\u5F00\u8FD0\u7B97\u7B26\u4E0E\u5B83\u7684\u8868\u8FBE\u5F0F\u95F4\u4E0D\u8981\u7559\u7A7A\u767D\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span> args<span class="token punctuation">)</span>    <span class="token comment">// \u2717 no good</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>     <span class="token comment">// \u2713 good</span>


</code></pre></div><h4 id="_14-\u9047\u5230\u5206\u53F7\u65F6\u7A7A\u683C\u8981\u540E\u7559\u524D\u4E0D\u7559\u3002" tabindex="-1">14.\u9047\u5230\u5206\u53F7\u65F6\u7A7A\u683C\u8981\u540E\u7559\u524D\u4E0D\u7559\u3002 <a class="header-anchor" href="#_14-\u9047\u5230\u5206\u53F7\u65F6\u7A7A\u683C\u8981\u540E\u7559\u524D\u4E0D\u7559\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span>i <span class="token operator">&lt;</span> items<span class="token punctuation">.</span>length <span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>    <span class="token comment">// \u2713 good</span>


</code></pre></div><h4 id="_15-\u5BF9\u4E8E\u53D8\u91CF\u548C\u51FD\u6570\u540D\u7EDF\u4E00\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5\u3002" tabindex="-1">15.\u5BF9\u4E8E\u53D8\u91CF\u548C\u51FD\u6570\u540D\u7EDF\u4E00\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5\u3002 <a class="header-anchor" href="#_15-\u5BF9\u4E8E\u53D8\u91CF\u548C\u51FD\u6570\u540D\u7EDF\u4E00\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">my_function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
  <span class="token keyword">function</span> <span class="token function">myFunction</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">// \u2713 good</span>

</code></pre></div><h4 id="_16-\u70B9\u53F7\u64CD\u4F5C\u7B26\u987B\u4E0E\u5C5E\u6027\u9700\u5728\u540C\u4E00\u884C\u3002" tabindex="-1">16.\u70B9\u53F7\u64CD\u4F5C\u7B26\u987B\u4E0E\u5C5E\u6027\u9700\u5728\u540C\u4E00\u884C\u3002 <a class="header-anchor" href="#_16-\u70B9\u53F7\u64CD\u4F5C\u7B26\u987B\u4E0E\u5C5E\u6027\u9700\u5728\u540C\u4E00\u884C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>  console<span class="token punctuation">.</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// \u2717 no good</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_17-\u51FD\u6570\u8C03\u7528\u65F6\u6807\u8BC6\u7B26\u4E0E\u62EC\u53F7\u95F4\u4E0D\u7559\u95F4\u9694\u3002" tabindex="-1">17.\u51FD\u6570\u8C03\u7528\u65F6\u6807\u8BC6\u7B26\u4E0E\u62EC\u53F7\u95F4\u4E0D\u7559\u95F4\u9694\u3002 <a class="header-anchor" href="#_17-\u51FD\u6570\u8C03\u7528\u65F6\u6807\u8BC6\u7B26\u4E0E\u62EC\u53F7\u95F4\u4E0D\u7559\u95F4\u9694\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u2717 no good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_18-\u952E\u503C\u5BF9\u5F53\u4E2D\u5192\u53F7\u4E0E\u503C\u4E4B\u95F4\u8981\u7559\u7A7A\u767D\u3002" tabindex="-1">18.\u952E\u503C\u5BF9\u5F53\u4E2D\u5192\u53F7\u4E0E\u503C\u4E4B\u95F4\u8981\u7559\u7A7A\u767D\u3002 <a class="header-anchor" href="#_18-\u952E\u503C\u5BF9\u5F53\u4E2D\u5192\u53F7\u4E0E\u503C\u4E4B\u95F4\u8981\u7559\u7A7A\u767D\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span> <span class="token operator">:</span><span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span><span class="token operator">:</span><span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>      <span class="token comment">// \u2717 no good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>     <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_19-\u6784\u9020\u51FD\u6570\u8981\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002" tabindex="-1">19.\u6784\u9020\u51FD\u6570\u8981\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002 <a class="header-anchor" href="#_19-\u6784\u9020\u51FD\u6570\u8981\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">animal</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// \u2717 no good</span>

<span class="token keyword">function</span> <span class="token function">Animal</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// \u2713 good</span>

</code></pre></div><h4 id="_20-\u5B50\u7C7B\u7684\u6784\u9020\u5668\u4E2D\u4E00\u5B9A\u8981\u8C03\u7528-super" tabindex="-1">20.\u5B50\u7C7B\u7684\u6784\u9020\u5668\u4E2D\u4E00\u5B9A\u8981\u8C03\u7528 super <a class="header-anchor" href="#_20-\u5B50\u7C7B\u7684\u6784\u9020\u5668\u4E2D\u4E00\u5B9A\u8981\u8C03\u7528-super" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u2717 no good</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_21-\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u800C\u4E0D\u662F\u6784\u9020\u5668\u3002" tabindex="-1">21.\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u800C\u4E0D\u662F\u6784\u9020\u5668\u3002 <a class="header-anchor" href="#_21-\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u800C\u4E0D\u662F\u6784\u9020\u5668\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">// \u2717 no good</span>
<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>            <span class="token comment">// \u2713 good</span>

</code></pre></div><h4 id="_22-\u6CE8\u91CA\u9996\u5C3E\u7559\u7A7A\u683C\u3002" tabindex="-1">22.\u6CE8\u91CA\u9996\u5C3E\u7559\u7A7A\u683C\u3002 <a class="header-anchor" href="#_22-\u6CE8\u91CA\u9996\u5C3E\u7559\u7A7A\u683C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token comment">//comment           // \u2717 no good</span>
<span class="token comment">// comment          // \u2713 good</span>

<span class="token comment">/*comment*/</span>         <span class="token comment">// \u2717 no good</span>
<span class="token comment">/* comment */</span>       <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_23-\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u53D8\u91CF\u524D\u540E\u4E0D\u52A0\u7A7A\u683C\u3002" tabindex="-1">23.\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u53D8\u91CF\u524D\u540E\u4E0D\u52A0\u7A7A\u683C\u3002 <a class="header-anchor" href="#_23-\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u53D8\u91CF\u524D\u540E\u4E0D\u52A0\u7A7A\u683C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>    <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>      <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_24-\u68C0\u67E5-nan-\u7684\u6B63\u786E\u59FF\u52BF\u662F\u4F7F\u7528-isnan-\u3002" tabindex="-1">24.\u68C0\u67E5 NaN \u7684\u6B63\u786E\u59FF\u52BF\u662F\u4F7F\u7528 isNaN()\u3002 <a class="header-anchor" href="#_24-\u68C0\u67E5-nan-\u7684\u6B63\u786E\u59FF\u52BF\u662F\u4F7F\u7528-isnan-\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>price <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>      <span class="token comment">// \u2717 no good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>       <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_25-\u81EA\u8C03\u7528\u533F\u540D\u51FD\u6570-\u4F7F\u7528\u62EC\u53F7\u5305\u88F9\u3002" tabindex="-1">25.\u81EA\u8C03\u7528\u533F\u540D\u51FD\u6570 \u4F7F\u7528\u62EC\u53F7\u5305\u88F9\u3002 <a class="header-anchor" href="#_25-\u81EA\u8C03\u7528\u533F\u540D\u51FD\u6570-\u4F7F\u7528\u62EC\u53F7\u5305\u88F9\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> getName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
<span class="token keyword">const</span> getName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_26-\u4EE3\u7801\u5757\u9996\u5C3E\u7559\u7A7A\u683C\u3002" tabindex="-1">26.\u4EE3\u7801\u5757\u9996\u5C3E\u7559\u7A7A\u683C\u3002 <a class="header-anchor" href="#_26-\u4EE3\u7801\u5757\u9996\u5C3E\u7559\u7A7A\u683C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>admin<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>admin<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>    <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_27-\u4E25\u683C\u6A21\u5F0F" tabindex="-1">27.\u4E25\u683C\u6A21\u5F0F <a class="header-anchor" href="#_27-\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a></h4><p>\u4E25\u683C\u6A21\u5F0F\u4E5F\u786E\u4FDD\u4E86 javascript \u4EE3\u7801\u66F4\u52A0\u7684\u5065\u58EE\uFF0C\u8FD0\u884C\u7684\u4E5F\u66F4\u52A0\u5FEB\u901F\u3002</p><h4 id="_28-\u4E0D\u8981\u5B9A\u4E49\u5197\u4F59\u7684\u51FD\u6570\u53C2\u6570\u3002" tabindex="-1">28.\u4E0D\u8981\u5B9A\u4E49\u5197\u4F59\u7684\u51FD\u6570\u53C2\u6570\u3002 <a class="header-anchor" href="#_28-\u4E0D\u8981\u5B9A\u4E49\u5197\u4F59\u7684\u51FD\u6570\u53C2\u6570\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u2717 no good</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u2713 good</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_29-\u4F7F\u7528-this-\u524D\u8BF7\u786E\u4FDD-super-\u5DF2\u8C03\u7528\u3002" tabindex="-1">29.\u4F7F\u7528 this \u524D\u8BF7\u786E\u4FDD super() \u5DF2\u8C03\u7528\u3002 <a class="header-anchor" href="#_29-\u4F7F\u7528-this-\u524D\u8BF7\u786E\u4FDD-super-\u5DF2\u8C03\u7528\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">4</span>     <span class="token comment">// \u2717 no good</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><h4 id="_30-\u7528-throw-\u629B\u9519\u65F6\uFF0C\u629B\u51FA-error-\u5BF9\u8C61\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u3002" tabindex="-1">30.\u7528 throw \u629B\u9519\u65F6\uFF0C\u629B\u51FA Error \u5BF9\u8C61\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u3002 <a class="header-anchor" href="#_30-\u7528-throw-\u629B\u9519\u65F6\uFF0C\u629B\u51FA-error-\u5BF9\u8C61\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">throw</span> <span class="token string">&#39;error&#39;</span>               <span class="token comment">// \u2717 no good</span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_31-\u4E0D\u8981\u4F7F\u7528-undefined-\u6765\u521D\u59CB\u5316\u53D8\u91CF\u3002" tabindex="-1">31.\u4E0D\u8981\u4F7F\u7528 undefined \u6765\u521D\u59CB\u5316\u53D8\u91CF\u3002 <a class="header-anchor" href="#_31-\u4E0D\u8981\u4F7F\u7528-undefined-\u6765\u521D\u59CB\u5316\u53D8\u91CF\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token keyword">undefined</span>    <span class="token comment">// \u2717 no good</span>
<span class="token keyword">let</span> name
name <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span>          <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_32-\u540C\u4E00\u6A21\u5757\u6709\u591A\u4E2A\u5BFC\u5165\u65F6\u4E00\u6B21\u6027\u5199\u5B8C\u3002" tabindex="-1">32.\u540C\u4E00\u6A21\u5757\u6709\u591A\u4E2A\u5BFC\u5165\u65F6\u4E00\u6B21\u6027\u5199\u5B8C\u3002 <a class="header-anchor" href="#_32-\u540C\u4E00\u6A21\u5757\u6709\u591A\u4E2A\u5BFC\u5165\u65F6\u4E00\u6B21\u6027\u5199\u5B8C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> myFunc1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> myFunc2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span>          <span class="token comment">// \u2717 no good</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> myFunc1<span class="token punctuation">,</span> myFunc2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span> <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_33-\u4E0D\u8981\u89E3\u6784\u7A7A\u503C\u3002" tabindex="-1">33.\u4E0D\u8981\u89E3\u6784\u7A7A\u503C\u3002 <a class="header-anchor" href="#_33-\u4E0D\u8981\u89E3\u6784\u7A7A\u503C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> foo         <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> b <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> foo      <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_34-\u4E0D\u8981\u968F\u610F\u66F4\u6539\u5173\u952E\u5B57\u7684\u503C\u3002" tabindex="-1">34.\u4E0D\u8981\u968F\u610F\u66F4\u6539\u5173\u952E\u5B57\u7684\u503C\u3002 <a class="header-anchor" href="#_34-\u4E0D\u8981\u968F\u610F\u66F4\u6539\u5173\u952E\u5B57\u7684\u503C\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span>     <span class="token comment">// \u2717 no good</span>
</code></pre></div><h4 id="_35-new-\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u540E\u9700\u8981\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002" tabindex="-1">35.new \u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u540E\u9700\u8981\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002 <a class="header-anchor" href="#_35-new-\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u540E\u9700\u8981\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                     <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_36-\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362\u3002" tabindex="-1">36.\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362\u3002 <a class="header-anchor" href="#_36-\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// \u2717 no good</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// \u2713 good</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_37-\u4E0D\u8981\u7701\u53BB\u5C0F\u6570\u70B9\u524D\u9762\u76840\u3002" tabindex="-1">37.\u4E0D\u8981\u7701\u53BB\u5C0F\u6570\u70B9\u524D\u9762\u76840\u3002 <a class="header-anchor" href="#_37-\u4E0D\u8981\u7701\u53BB\u5C0F\u6570\u70B9\u524D\u9762\u76840\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> discount <span class="token operator">=</span> <span class="token number">.5</span>      <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> discount <span class="token operator">=</span> <span class="token number">0.5</span>     <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_38-\u5D4C\u5957\u7684\u4EE3\u7801\u5757\u4E2D\u7981\u6B62\u518D\u5B9A\u4E49\u51FD\u6570\u3002" tabindex="-1">38.\u5D4C\u5957\u7684\u4EE3\u7801\u5757\u4E2D\u7981\u6B62\u518D\u5B9A\u4E49\u51FD\u6570\u3002 <a class="header-anchor" href="#_38-\u5D4C\u5957\u7684\u4EE3\u7801\u5757\u4E2D\u7981\u6B62\u518D\u5B9A\u4E49\u51FD\u6570\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>authenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">setAuthUser</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">// \u2717 no good</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_39-\u4F7F\u7528-dirname-\u548C-filename-\u65F6\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5B57\u7B26\u4E32\u62FC\u63A5\u3002" tabindex="-1">39.\u4F7F\u7528 __dirname \u548C __filename \u65F6\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5B57\u7B26\u4E32\u62FC\u63A5\u3002 <a class="header-anchor" href="#_39-\u4F7F\u7528-dirname-\u548C-filename-\u65F6\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5B57\u7B26\u4E32\u62FC\u63A5\u3002" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> pathToFile <span class="token operator">=</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;/app.js&#39;</span>            <span class="token comment">// \u2717 no good</span>
<span class="token keyword">const</span> pathToFile <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;app.js&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// \u2713 good</span>
</code></pre></div><h4 id="_40-\u6742\u9879" tabindex="-1">40. \u6742\u9879 <a class="header-anchor" href="#_40-\u6742\u9879" aria-hidden="true">#</a></h4><p>\u4EE3\u7801\u5757\u4E2D\u907F\u514D\u591A\u4F59\u7559\u767D switch \u4E00\u5B9A\u8981\u4F7F\u7528 break \u6765\u5C06\u6761\u4EF6\u5206\u652F\u6B63\u5E38\u4E2D\u65AD\u3002 \u4E0D\u8981\u4F7F\u7528 eval()\u3002 switch \u8BED\u53E5\u4E2D\u4E0D\u8981\u5B9A\u4E49\u91CD\u590D\u7684 case \u5206\u652F\u3002 \u4E0D\u8981\u5BF9\u53D8\u91CF\u4F7F\u7528 delete \u64CD\u4F5C\u3002 \u4E0D\u8981\u4FEE\u6539\u4F7F\u7528 const \u58F0\u660E\u7684\u53D8\u91CF\u3002const\u58F0\u660E\u7684\u53D8\u91CF\u662F\u53EA\u8BFB\u7684 \u907F\u514D\u4F7F\u7528 arguments.callee \u548C arguments.caller\u3002 \u5BF9\u4E8E\u4E09\u5143\u8FD0\u7B97\u7B26 ? \u548C : \u4E0E\u4ED6\u4EEC\u6240\u8D1F\u8D23\u7684\u4EE3\u7801\u5904\u4E8E\u540C\u4E00\u884C \u4E0D\u5141\u8BB8\u6709\u8FDE\u7EED\u591A\u884C\u7A7A\u884C\u3002 \u4E0D\u8981\u4E22\u6389\u5F02\u5E38\u5904\u7406\u4E2Derr\u53C2\u6570\u3002 else \u5173\u952E\u5B57\u8981\u4E0E\u82B1\u62EC\u53F7\u4FDD\u6301\u5728\u540C\u4E00\u884C\u3002 \u4E0D\u8981\u5B9A\u4E49\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u3002 \u9664\u9700\u8981\u8F6C\u4E49\u7684\u60C5\u51B5\u5916\uFF0C\u5B57\u7B26\u4E32\u7EDF\u4E00\u4F7F\u7528\u5355\u5F15\u53F7\u3002 \u4F7F\u7528\u4E24\u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB\u3002</p>`,156),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
