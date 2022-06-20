import{_ as n,c as s,o as a,a as p}from"./app.8b34496d.js";const g='{"title":"\u5F00\u7BB1\u5373\u7528 \u{1F381} \u770B\u8FD9\u91CC\uFF01","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u4E0B\u8F7D","slug":"\u5B89\u88C5\u4E0B\u8F7D"},{"level":2,"title":"\u63A5\u53E3\u914D\u7F6E","slug":"\u63A5\u53E3\u914D\u7F6E"},{"level":3,"title":"1. \u767B\u9646\u63A5\u53E3","slug":"_1-\u767B\u9646\u63A5\u53E3"},{"level":3,"title":"2. \u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3","slug":"_2-\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{"level":3,"title":"3. \u83DC\u5355\u63A5\u53E3","slug":"_3-\u83DC\u5355\u63A5\u53E3"},{"level":3,"title":"4. \u9000\u51FA\u767B\u5F55\u63A5\u53E3","slug":"_4-\u9000\u51FA\u767B\u5F55\u63A5\u53E3"},{"level":2,"title":"\u8BBE\u7F6E\u524D\u7AEF\u8F6C\u53D1","slug":"\u8BBE\u7F6E\u524D\u7AEF\u8F6C\u53D1"}],"relativePath":"guide/index.md"}',t={},o=p(`<h1 id="\u5F00\u7BB1\u5373\u7528-\u{1F381}-\u770B\u8FD9\u91CC\uFF01" tabindex="-1">\u5F00\u7BB1\u5373\u7528 \u{1F381} \u770B\u8FD9\u91CC\uFF01 <a class="header-anchor" href="#\u5F00\u7BB1\u5373\u7528-\u{1F381}-\u770B\u8FD9\u91CC\uFF01" aria-hidden="true">#</a></h1><p>\u4E00\u7BC7\u6587\u7AE0\u8FC5\u901F\u4F7F\u7528 <code>vue3</code> + <code>TypeScript</code> + <code>Vite</code>\u7684\u4E2D\u540E\u53F0\u6846\u67B6, \u8BE5\u6846\u67B6\u4EE3\u7801\u6781\u7B80\u53EA\u9700\u8981\u7B80\u5355\u914D\u7F6E\u5373\u53EF 0 \u95E8\u69DB\u4F7F\u7528\uFF0C\u8BF7\u6309\u7167\u4E0B\u9762\u8BF4\u660E\u64CD\u4F5C\u3002</p><h2 id="\u5B89\u88C5\u4E0B\u8F7D" tabindex="-1">\u5B89\u88C5\u4E0B\u8F7D <a class="header-anchor" href="#\u5B89\u88C5\u4E0B\u8F7D" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u514B\u9686\u9879\u76EE</span>
<span class="token function">git</span> clone https://github.com/mrhaoxiaojun/vue3-antd-admin.git

<span class="token comment"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> vue3-antd-admin

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># \u672C\u5730\u5F00\u53D1 \u542F\u52A8\u9879\u76EE</span>
<span class="token function">npm</span> run dev
</code></pre></div><p>\u5982\u679C\u4F9D\u8D56\u5305\u4E0B\u8F7D\u592A\u6162\uFF0C\u8BF7\u5207\u6362\u81F3\u56FD\u5185\u955C\u50CF\u6E90</p><div class="language-shell"><pre><code><span class="token comment"># \u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF\u4EE3\u7406</span>
<span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org

</code></pre></div><p>\u81F3\u6B64\u524D\u7AEF\u9879\u76EE\u542F\u52A8\u5B8C\u6210\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u884C\u9875\u9762\u5F00\u53D1\u4E86\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u60F3\u6DFB\u52A0\u9875\u9762\u6216\u8005\u8FDB\u884C\u81EA\u5DF1\u9879\u76EE\u7684 api \u8C03\u7528\uFF0C\u4F60\u9700\u8981\u5207\u6362\u5230\u81EA\u5DF1\u9879\u76EE api \u5730\u5740\u4E0A\u53BB\uFF0C\u8BF7\u9605\u8BFB\u6B65\u9AA4\u4E8C\u3002</p><h2 id="\u63A5\u53E3\u914D\u7F6E" tabindex="-1">\u63A5\u53E3\u914D\u7F6E <a class="header-anchor" href="#\u63A5\u53E3\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u64CD\u4F5C\u5B8C\u7B2C\u4E00\u6B65\u4F60\u7684\u524D\u7AEF\u9875\u9762\u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u6253\u5F00\u4E86\uFF0C\u4F46\u662F\u8FD9\u91CC\u9879\u76EE\u4F9D\u8D56 api \u9ED8\u8BA4\u662F\u672C\u79D1mock\u6570\u636E\uFF0C\u4F60\u9700\u8981\u63D0\u4F9B\u5982\u4E0B\u5FC5\u987B\u7684\u63A5\u53E3\u4E0E\u8BBE\u7F6E\u4EE3\u7406\u5230\u81EA\u5DF1 api \u5730\u5740\u4E0A\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u6211\u4EEC\u524D\u7AEF\u81EA\u5DF1\u52A8\u624B\u4E30\u8863\u8DB3\u98DF</p><p>\u5982\u679C\u4F60\u6682\u65F6\u4E0D\u80FD\u5F97\u5230\u540E\u53F0\u4EBA\u5458\u7684\u652F\u6301\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6846\u67B6\u63D0\u4F9Bmock\u652F\u6301\uFF0C\u8FD9\u6837\u4F1A\u66F4\u65B9\u4FBF\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u81EA\u5DF1\u7528node\u642D\u4E2A\u670D\u52A1\u6765\u652F\u6301</p></div><p><strong>\u5FC5\u9700\u7684\u63A5\u53E3</strong></p><p>\u6240\u6709\u5FC5\u987B\u63A5\u53E3\u914D\u7F6E\u5728\xA0<code>@/services/modules/login.ts</code>\xA0\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4FEE\u6539\u5FC5\u987B\u63A5\u53E3\u7684 url\uFF0C\u4F46\u662F\u5C3D\u91CF\u4E0D\u8981\u53BB\u4FEE\u6539\u63A5\u53E3 ts \u7C7B\u578B\u89C4\u8303\uFF01</p><p><code>?</code>\xA0\u8868\u793A\u53EF\u9009\u5B57\u6BB5</p><h3 id="_1-\u767B\u9646\u63A5\u53E3" tabindex="-1"><strong>1. \u767B\u9646\u63A5\u53E3</strong> <a class="header-anchor" href="#_1-\u767B\u9646\u63A5\u53E3" aria-hidden="true">#</a></h3><p>[post]</p><p>url</p><div class="language-shell"><pre><code>/login
</code></pre></div><p>\u63A5\u53E3\u89C4\u8303</p><div class="language-ts"><pre><code><span class="token comment">// \u63D0\u4EA4\u7ED9\u540E\u53F0\u7684\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">LoginFrom</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  username<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8981\u6C42\u540E\u53F0\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">LoginSuccess</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>\u8FD4\u56DE\u6570\u636E\u793A\u4F8B</p><div class="language-js"><pre><code><span class="token comment">// \u767B\u9646\u5931\u8D25</span>
<span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF&quot;</span><span class="token punctuation">}</span>
<span class="token comment">// \u767B\u9646\u6210\u529F</span>
<span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&quot;Token123456&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u9646\u6210\u529F&quot;</span><span class="token punctuation">}</span>

</code></pre></div><h3 id="_2-\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3" tabindex="-1"><strong>2. \u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3</strong> <a class="header-anchor" href="#_2-\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3" aria-hidden="true">#</a></h3><p>[get]</p><p>url</p><div class="language-shell"><pre><code>/info

</code></pre></div><p>\u63A5\u53E3\u89C4\u8303</p><div class="language-ts"><pre><code><span class="token comment">// \u63D0\u4EA4\u7ED9\u540E\u53F0\u7684\u6570\u636E\u683C\u5F0F</span>
\u65E0\uFF0Cheader\u4E2Dtoken\u9A8C\u8BC1\u8EAB\u4EFD
<span class="token comment">// \u8981\u6C42\u540E\u53F0\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UserInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  info<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// token</span>
    token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u6237\u540D</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5934\u50CF</span>
    avatar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6743\u9650</span>
    roles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD4\u56DE\u6570\u636E\u793A\u4F8B</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token number">200</span>
  info<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u76F8\u4FE1\u5149&quot;</span><span class="token punctuation">,</span> avatar<span class="token operator">:</span> <span class="token string">&quot;https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&quot;</span><span class="token punctuation">,</span>\u2026<span class="token punctuation">}</span>
  message<span class="token operator">:</span> <span class="token string">&quot;\u4FE1\u606F\u8FD4\u56DE\u6210\u529F&quot;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-\u83DC\u5355\u63A5\u53E3" tabindex="-1"><strong>3. \u83DC\u5355\u63A5\u53E3</strong> <a class="header-anchor" href="#_3-\u83DC\u5355\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u7528\u6237\u52A8\u6001\u8BBE\u7F6E\u8DEF\u7531\u9875\u9762</p><p>[get]</p><p>url</p><div class="language-shell"><pre><code>/menu
</code></pre></div><p>\u63A5\u53E3\u89C4\u8303</p><div class="language-ts"><pre><code><span class="token comment">// \u63D0\u4EA4\u7ED9\u540E\u53F0\u7684\u6570\u636E\u683C\u5F0F</span>
\u65E0\uFF0Cheader\u4E2Dtoken\u9A8C\u8BC1\u8EAB\u4EFD
<span class="token comment">// \u8981\u6C42\u540E\u53F0\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RouterData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
       <span class="token comment">// \u83DC\u5355id</span>
      id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8DEF\u7531\u5730\u5740</span>
      path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u83DC\u5355\u540D\u79F0</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u76F8\u5BF9\u4E8Eviews\u6587\u4EF6\u5939\u7684\u6A21\u677F\u6587\u4EF6\u7684\u76F8\u5BF9\u4F4D\u7F6E</span>
      component<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8DEF\u7531\u540D\u79F0 (\u5FC5\u987B\u552F\u4E00)</span>
      key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u91CD\u5B9A\u5411\u5730\u5740</span>
      redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
      icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token comment">// \u83DC\u5355\u5B50\u96C6\uFF0C\u9875\u9762\u7EA7\u65E0\u9700\u914D\u7F6E</span>
      children<span class="token operator">?</span><span class="token operator">:</span> RouterObj<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7236\u7EA7id</span>
      pid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
      <span class="token comment">// \u662F\u5426\u9690\u85CF\u9875\u9762/\u83DC\u5355\uFF0C\u9ED8\u8BA4false\u4E0D\u9690\u85CF</span>
      hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
      <span class="token comment">// \u662F\u5426\u7F13\u5B58\u9875\u9762\uFF0C\u9ED8\u8BA4false\u4E0D\u7F13\u5B58</span>
      keepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD4\u56DE\u6570\u636E\u793A\u4F8B</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u57FA\u7840\u6A21\u677F&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/icon&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BasicLayout&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AppleOutlined&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;layout&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u597D\u7528\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/icon&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RouteView&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ChromeOutlined&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u56FE\u6807\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/icon&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/icon&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;el_icon&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;keepAlive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8868\u683C\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/table&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/table&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;el_table&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8BE6\u60C5&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/detail&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/element/detail&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5408\u4F5C\u6253\u8D4F&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team/optionc&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RouteView&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WechatOutlined&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;team&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u52A0\u5165\u7EF4\u62A4&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team/join&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team/join&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;join&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D5E\u52A9\u652F\u6301&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team/sponsor&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/team/sponsor&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sponsor&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u66F4\u65B0\u65E5\u5FD7&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update/issue&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BasicLayout&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AppleOutlined&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lan&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u73B0\u5B58\u95EE\u9898&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update/issue&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update/issue&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;issue&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;keepAlive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u66F4\u65B0\u8BB0\u5F55&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update/log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/update/log&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4FE1\u606F\u8FD4\u56DE\u6210\u529F&quot;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_4-\u9000\u51FA\u767B\u5F55\u63A5\u53E3" tabindex="-1"><strong>4. \u9000\u51FA\u767B\u5F55\u63A5\u53E3</strong> <a class="header-anchor" href="#_4-\u9000\u51FA\u767B\u5F55\u63A5\u53E3" aria-hidden="true">#</a></h3><p>[post]</p><p>url</p><div class="language-shell"><pre><code>/logout
</code></pre></div><p>\u63A5\u53E3\u89C4\u8303</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ResponseData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD4\u56DE\u6570\u636E\u793A\u4F8B</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">&#39;\u9000\u51FA\u6210\u529F&#39;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u540E\u53F0\u9700\u8981\u6309\u7167\u8981\u6C42\u63D0\u4F9B\u5982\u4E0A\u56DB\u4E2A\u5FC5\u987B\u63A5\u53E3\u3002</p><h2 id="\u8BBE\u7F6E\u524D\u7AEF\u8F6C\u53D1" tabindex="-1">\u8BBE\u7F6E\u524D\u7AEF\u8F6C\u53D1 <a class="header-anchor" href="#\u8BBE\u7F6E\u524D\u7AEF\u8F6C\u53D1" aria-hidden="true">#</a></h2><p>vite.congfig.ts</p><div class="language-ts"><pre><code>server<span class="token operator">:</span> <span class="token punctuation">{</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8010&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u4FEE\u6539\u6210\u5B9E\u9645\u540E\u53F0\u5730\u5740</span>
      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u51E1\u662F\u524D\u7F00\u5E26api\u7684\u5C31\u8F6C\u53D1\uFF0C\u5E76\u5254\u9664api\u3002\u4F8B\u5982\uFF1A/api/user/list\uFF0C\u5219\u5B9E\u9645\u8F6C\u53D1\u4E3A\uFF1Atarget\u914D\u7F6E\u9879\u5730\u5740 + /user/list</p><p>\u524D\u7F00\u914D\u7F6E\uFF1A.env.development \u548C .env.production</p><div class="language-shell"><pre><code>VITE_REQUEST_BASE_URL <span class="token operator">=</span> /api
// \u4F60\u53EF\u4EE5\u6839\u636E\u540E\u53F0\u8981\u6C42\u4FEE\u6539\uFF0C\u4F8B\u5982:
VITE_REQUEST_BASE_URL <span class="token operator">=</span> /api/admin/v1
// \u5B9E\u9645\u8BBF\u95EE\u4E3A\uFF08\u914D\u7F6Eproxy\u65F6\uFF09\uFF1Atarget\u914D\u7F6E\u9879\u5730\u5740 + /admin/v1/user/list

</code></pre></div><p>\u5B9E\u9645VITE_REQUEST_BASE_URL\u7684/api\u4F1A\u88AB\u8F6C\u53D1\u89C4\u5219\u5254\u9664\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u8F6C\u53D1\xA0<code>proxy</code>\xA0/api\u8F6C\u53D1, api\u524D\u7F00\u5219\u4E0D\u4F1A\u88AB\u5254\u9664\u3002</p><p><strong>\u5982\u679C\u4F60\u60F3\u6DF1\u5165\u4E86\u89E3\u6846\u67B6\u5185\u90E8\u8FD0\u884C\u903B\u8F91\uFF0C\u8BF7\u7EE7\u7EED\u9605\u8BFB\u5269\u4F59\u6587\u7AE0\u3002</strong></p>`,55),e=[o];function c(u,r,l,k,i,q){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{g as __pageData,m as default};
