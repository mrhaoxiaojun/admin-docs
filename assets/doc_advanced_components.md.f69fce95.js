import{_ as n,c as a,o as s,a as t}from"./app.263436ba.js";const h='{"title":"tableLayout","description":"","frontmatter":{},"headers":[{"level":2,"title":"tableLayout","slug":"tablelayout"},{"level":2,"title":"\u56FE\u6807","slug":"\u56FE\u6807"},{"level":3,"title":"\u4F7F\u7528a-icon\u7EC4\u4EF6","slug":"\u4F7F\u7528a-icon\u7EC4\u4EF6"},{"level":3,"title":"\u751F\u6210\u56FE\u6807\u5E93\u4EE3\u7801","slug":"\u751F\u6210\u56FE\u6807\u5E93\u4EE3\u7801"}],"relativePath":"doc/advanced/components.md"}',o={},e=t(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD9\u91CC\u63D0\u4F9B\u4E00\u4E9B\u4F18\u79C0\u7684\u5F00\u6E90\u7EC4\u4EF6\uFF0C\u4F9B\u5927\u5BB6\u53C2\u8003\u4F7F\u7528\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u5728\u9879\u76EE\u5DE5\u7A0B\u4E2D\u81EA\u884C\u5220\u9664</p></div><h2 id="tablelayout" tabindex="-1">tableLayout <a class="header-anchor" href="#tablelayout" aria-hidden="true">#</a></h2><p><a href="/admin-docs/tableLayout/outline.html">tableLayout \u4F7F\u7528\u53C2\u8003\u6587\u6863</a></p><h2 id="\u56FE\u6807" tabindex="-1">\u56FE\u6807 <a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a></h2><p>\u672C\u9879\u76EE\u56FE\u6807\u63A8\u8350\u4F7F\u7528 antd ui \u56FE\u6807\u5E93\u4E2D\u56FE\u6807\uFF0C\u5E76\u57FA\u4E8E\u6B64\u7B80\u5355\u5C01\u88C5\u4E86a-icon\u7EC4\u4EF6\uFF0C\u4E4B\u540E\u8FD8\u4F1A\u8DDF\u8FDB\u8BE5\u7EC4\u4EF6\u4F7F\u5176\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u3002\u5982\u679C\u4F60\u5728 antd ui \u56FE\u6807\u5E93\u4E2D\u6CA1\u6709\u627E\u5230\u9700\u8981\u7684\u56FE\u6807\uFF0C\u53EF\u4EE5\u5230 <a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a>\u4E0A\u9009\u62E9\u5E76\u751F\u6210\u81EA\u5DF1\u7684\u4E1A\u52A1\u56FE\u6807\u5E93\uFF0C\u518D\u8FDB\u884C\u4F7F\u7528\u3002\u6216\u8005\u5176\u5B83 svg \u56FE\u6807\u7F51\u7AD9\uFF0C\u4E0B\u8F7D svg \u5E76\u653E\u5230\u6587\u4EF6\u5939\u4E4B\u4E2D\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u4F7F\u7528svg\u56FE\u6807\u63A8\u8350\u5C01\u88C5\u6210\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u53EF\u9605\u8BFB\u6F58\u5927\u795E\xA0<a href="https://juejin.cn/post/6844903517564436493" target="_blank" rel="noopener noreferrer">\u624B\u6478\u624B\uFF0C\u5E26\u4F60\u4F18\u96C5\u7684\u4F7F\u7528 icon</a></p></div><h3 id="\u4F7F\u7528a-icon\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528a-icon\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528a-icon\u7EC4\u4EF6" aria-hidden="true">#</a></h3><ol><li>\u5728<a href="https://2x.antdv.com/components/icon-cn" target="_blank" rel="noopener noreferrer">antd ui\u56FE\u6807\u5E93</a>\u6311\u9009\u81EA\u5DF1\u9700\u8981\u7684\u56FE\u6807\uFF0C\u590D\u5236\u4ED6\u7684\u540D\u79F0\u3002</li><li>\u5728\u6A21\u677F\u4E2D\u5F15\u5165a-icon\u7EC4\u4EF6</li></ol><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PoweroffOutlined<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> aIcon <span class="token keyword">from</span> <span class="token string">&#39;@/components/aicon/aicon.vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> onBeforeMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      aIcon
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="\u751F\u6210\u56FE\u6807\u5E93\u4EE3\u7801" tabindex="-1">\u751F\u6210\u56FE\u6807\u5E93\u4EE3\u7801 <a class="header-anchor" href="#\u751F\u6210\u56FE\u6807\u5E93\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u4E2A\u4EBA\u63A8\u8350\u4F7F\u7528\u963F\u91CC\u7684 <a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont</a> \u4F7F\u7528\u9879\u76EE\u6216\u516C\u53F8\u521B\u5EFA\u4E00\u4E2A\u8D26\u53F7\uFF0C\u5728\u91CC\u9762\u53EF\u4EE5\u521B\u5EFA\u9879\u76EE\uFF0C\u6BCF\u4E2A\u9879\u76EE\u4F7F\u7528\u7684\u5F00\u6E90\u56FE\u8868\u90FD\u53EF\u4EE5\u6DFB\u52A0\u8FDB\u53BB\uFF0C\u6BCF\u6B21\u66F4\u65B0\u56FE\u8868\u76F4\u63A5\u66FF\u6362\u9879\u76EE\u4E2D\u7684iconfont\u6587\u4EF6\u5373\u53EF\uFF0C\u5FEB\u6377\u65B9\u4FBF</p>`,11),p=[e];function c(l,i,u,r,k,d){return s(),a("div",null,p)}var f=n(o,[["render",c]]);export{h as __pageData,f as default};
