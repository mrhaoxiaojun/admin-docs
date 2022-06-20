import{_ as n,c as a,o as s,a as t}from"./app.8b34496d.js";var e="/vue3-admin-docs/assets/layout.b0bac8e3.jpg";const m='{"title":"\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Layout","slug":"layout"},{"level":2,"title":"tabView","slug":"tabview"},{"level":2,"title":"routerView","slug":"routerview"},{"level":2,"title":"menu & header","slug":"menu-header"},{"level":2,"title":"\u79FB\u52A8\u7AEF","slug":"\u79FB\u52A8\u7AEF"}],"relativePath":"doc/base/layout.md"}',p={},o=t('<h1 id="\u5E03\u5C40" tabindex="-1">\u5E03\u5C40 <a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a></h1><p>\u9875\u9762\u6574\u4F53\u5E03\u5C40\u662F\u4E00\u4E2A\u4EA7\u54C1\u6700\u5916\u5C42\u7684\u6846\u67B6\u7ED3\u6784\uFF0C\u5F80\u5F80\u4F1A\u5305\u542B\u5BFC\u822A\u3001\u4FA7\u8FB9\u680F\u3001\u9762\u5305\u5C51\u4EE5\u53CA\u5185\u5BB9\u7B49\u3002\u60F3\u8981\u4E86\u89E3\u4E00\u4E2A\u540E\u53F0\u9879\u76EE\uFF0C\u5148\u8981\u4E86\u89E3\u5B83\u7684\u57FA\u7840\u5E03\u5C40\u3002</p><h2 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h2><p><a href="../imgs/layout.jpg"><img src="'+e+`" alt=""></a></p><p>@ \u662F vite \u7684\xA0<a href="https://vitejs.cn/config/#resolve-alias" target="_blank" rel="noopener noreferrer">resolve.alias\xA0</a>\u4E0D\u61C2\u5F97\u8BF7\u81EA\u884C\u7814\u7A76\uFF0C\u4E0B\u9762\u9644\u914D\u7F6E\u4EE3\u7801</p><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u6846\u67B6\xA0\u4E2D\u5927\u90E8\u5206\u9875\u9762\u90FD\u662F\u57FA\u4E8E\u8FD9\u4E2A\xA0<code>layout</code>\xA0\u7684\uFF0C\u9664\u4E86\u4E2A\u522B\u9875\u9762\u5982\uFF1A<code>login</code>\xA0,\xA0<code>404</code>,\xA0<code>403</code>\xA0\u7B49\u9875\u9762\u6CA1\u6709\u4F7F\u7528\u8BE5<code>layout</code>\u3002\u5982\u679C\u4F60\u60F3\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\u6709\u591A\u79CD\u4E0D\u540C\u7684layout\u4E5F\u662F\u5F88\u65B9\u4FBF\u7684\uFF0C\u53EA\u8981\u5728\u4E00\u7EA7\u8DEF\u7531\u90A3\u91CC\u9009\u62E9\u4E0D\u540C\u7684layout\u7EC4\u4EF6\u5C31\u884C\u3002</p><div class="language-ts"><pre><code><span class="token comment">// No layout</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/401&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;errorPage/401&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Has layout</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/documentation&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F60\u53EF\u4EE5\u9009\u62E9\u4E0D\u540C\u7684layout\u7EC4\u4EF6</span>
  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>

  <span class="token comment">// \u8FD9\u91CC\u5F00\u59CB\u5BF9\u5E94\u7684\u8DEF\u7531\u90FD\u4F1A\u663E\u793A\u5728app-main\u4E2D \u5982\u4E0A\u56FE\u6240\u793A</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;documentation/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;documentation&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\xA0<a href="https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html" target="_blank" rel="noopener noreferrer">vue-router \u8DEF\u7531\u5D4C\u5957\xA0</a>, \u6240\u4EE5\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u589E\u52A0\u6216\u8005\u4FEE\u6539\u9875\u9762\u53EA\u4F1A\u5F71\u54CD\xA0<code>tabView</code>\xA0\u8FD9\u4E2A\u4E3B\u4F53\u533A\u57DF\u3002\u5176\u5B83\u914D\u7F6E\u5728 layout \u4E2D\u7684\u5185\u5BB9\u5982\uFF1A\u4FA7\u8FB9\u680F\u6216\u8005\u5BFC\u822A\u680F\u90FD\u662F\u4E0D\u4F1A\u968F\u7740\u4F60\u4E3B\u4F53\u9875\u9762\u53D8\u5316\u800C\u53D8\u5316\u7684\u3002</p><div class="language-sh"><pre><code>/foo                                  /bar
+------------------+                  +-----------------+
| layout           |                  | layout          |
| +--------------+ |                  | +-------------+ |
| | foo.vue      | |  +------------&gt;  | | bar.vue     | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+

</code></pre></div><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4E00\u4E2A\u9879\u76EE\u91CC\u9762\u4F7F\u7528\u591A\u4E2A\u4E0D\u540C\u7684 layout\uFF0C\u53EA\u8981\u5728\u4F60\u60F3\u4F5C\u7528\u7684\u8DEF\u7531\u7236\u7EA7\u4E0A\u5F15\u7528\u5B83\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="tabview" tabindex="-1">tabView <a class="header-anchor" href="#tabview" aria-hidden="true">#</a></h2><p>tabView\uFF1A\u5934\u90E8\u9009\u9879\u83DC\u5355,\u5185\u90E8\u5305\u542B\u7684 router-view \u4E3A\u4E3B\u9875\u9762\u89C6\u56FE\uFF0C\u8FD9\u91CC\u680F\u76EE\u4E0B\u7684\u76F4\u63A5\u9875\u9762\u79F0\u4E3A\u4E00\u7EA7\u9875\u9762\uFF0C\u83DC\u5355\u4E0B\u7684\u9875\u9762\u79F0\u4E3A\u4E8C\u7EA7\u9875\u9762\uFF0C\u83DC\u5355\u4E0B\u53C8\u8FDB\u884C\u5D4C\u5957\u83DC\u5355\u7684\u79F0\u4E3A\u591A\u7EA7\u9875\u9762\uFF0C\u65E0\u8BBA\u662F\u4E00\u7EA7\u9875\u9762\u3001\u4E8C\u7EA7\u9875\u9762\u3001\u591A\u7EA7\u9875\u9762tabView\u90FD\u662F\u5C55\u793A\u4ED6\u4EEC\u7684\u9876\u7EA7\u7A97\u53E3\u3002</p><p>\u6846\u67B6\u5185tabView\u5BF9\u5E94\u7684\u516C\u5171component\u540D\u79F0\uFF1ABasicLayout</p><h2 id="routerview" tabindex="-1">routerView <a class="header-anchor" href="#routerview" aria-hidden="true">#</a></h2><p>\u4E8C\u7EA7\u9875\u9762\u3001\u591A\u7EA7\u9875\u9762\u7684\u89C6\u56FE\u7A97\u53E3\uFF0C\u4ED6\u4E0EtabView\u7684\u5173\u7CFB\u5982\u4E0B\u6240\u793A\u3002\u4E00\u7EA7\u9875\u9762\u7684\u89C6\u56FE\u7A97\u53E3\u5C5E\u4E8EtabView\uFF0C\u4E8C\u7EA7\u3001\u591A\u7EA7\u7684\u89C6\u56FE\u7A97\u53E3\u5C5E\u4E8ErouterView\uFF0C\u8FD9\u70B9\u4F1A\u5728\u8DEF\u7531\u7F13\u5B58\u4E2D\u5F97\u5230\u63D0\u73B0\u3002</p><div class="language-sh"><pre><code>+------------------+
| tabView          |
| +--------------+ |
| | routerView   | |
| | \uFF08\u53EF\u5D4C\u5957\uFF09    | |
| +--------------+ |
+------------------+


</code></pre></div><p>\u6846\u67B6\u5185tabView\u5BF9\u5E94\u7684\u516C\u5171component\u540D\u79F0\uFF1ABlankView</p><p>\u81F3\u6B64\u4F60\u5E94\u8BE5\u77E5\u9053\u4E86\u8DEF\u7531\u83DC\u5355\u7684\u57FA\u7840\u914D\u7F6E\u5185\u5BB9\u662F\u5982\u4F55\u4EA7\u751F\u7684\uFF1A</p><div class="language-ts"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token string">&#39;\u680F\u76EE&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">&#39;BasicLayout&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token string">&#39;BlankView&#39;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u9875\u9762&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> <span class="token string">&#39;/element/icon&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre></div><h2 id="menu-header" tabindex="-1">menu &amp; header <a class="header-anchor" href="#menu-header" aria-hidden="true">#</a></h2><p>\u5728<code>@/layout/menu</code>\u5B58\u653E\u83DC\u5355\u90E8\u5206\uFF0C\u4ED6\u901A\u8FC7\u83DC\u5355\u63A5\u53E3\u52A8\u6001\u6E32\u67D3\u6210\u578B\u5E76\u5E94\u7528 vuex \u7BA1\u7406\u5168\u5C40\u72B6\u6001\u3002</p><p>\u5728<code>@/layout/header</code>\u5B58\u653E\u5934\u90E8\u90E8\u5206\uFF0C\u4ED6\u7684\u53F3\u4FA7\u662F\u9876\u7EA7\u680F\u76EE\u7684\u5217\u8868\uFF0C\u4E14\u5BBD\u5EA6\u81EA\u9002\u5E94\u8D85\u51FA\u6EDA\u52A8\uFF0C\u6570\u636E\u6765\u6E90\u4E8E vuex \u7BA1\u7406\u7684 router (\u63A5\u53E3\u83B7\u53D6)\uFF0C \u4ED6\u7684\u53F3\u4FA7\u662F\u5934\u50CF\u4E0E\u7528\u6237\u540D\uFF0C\u901A\u8FC7info\u63A5\u53E3\u83B7\u53D6vuex\u5168\u5C40\u7BA1\u7406\u3002</p><h2 id="\u79FB\u52A8\u7AEF" tabindex="-1">\u79FB\u52A8\u7AEF <a class="header-anchor" href="#\u79FB\u52A8\u7AEF" aria-hidden="true">#</a></h2><p>ant-design \u5B98\u65B9\u5BF9\u81EA\u5DF1\u7684\u5B9A\u4F4D\u662F\u684C\u9762\u7AEF\u540E\u53F0\u6846\u67B6\uFF0C\u800C\u4E14\u5BF9\u4E8E\u7BA1\u7406\u540E\u53F0\u8FD9\u79CD\u91CD\u4EA4\u4E92\u7684\u9879\u76EE\u6765\u8BF4\u662F\u4E0D\u80FD\u901A\u8FC7\u7B80\u5355\u7684\u9002\u914D\u6765\u6EE1\u8DB3\u684C\u9762\u7AEF\u548C\u79FB\u52A8\u7AEF\u4E24\u7AEF\u4E0D\u540C\u7684\u4EA4\u4E92\uFF0C\u6240\u4EE5\u771F\u8981\u505A\u79FB\u52A8\u7248\u540E\u53F0\uFF0C\u5EFA\u8BAE\u91CD\u65B0\u505A\u4E00\u5957\u7CFB\u7EDF\u3002</p>`,26),c=[o];function u(r,l,i,k,d,h){return s(),a("div",null,c)}var v=n(p,[["render",u]]);export{m as __pageData,v as default};
