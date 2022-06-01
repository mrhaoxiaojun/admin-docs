import{_ as n,c as s,o as a,a as p}from"./app.263436ba.js";const y='{"title":"ESLint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BC6\u522B\u9519\u8BEF","slug":"\u8BC6\u522B\u9519\u8BEF"},{"level":2,"title":"\u8FD0\u884C\u68C0\u67E5","slug":"\u8FD0\u884C\u68C0\u67E5"},{"level":2,"title":"\u5173\u95ED ESLint \u68C0\u67E5","slug":"\u5173\u95ED-eslint-\u68C0\u67E5"},{"level":2,"title":"\u5E38\u7528\u914D\u7F6E\u89C4\u5219","slug":"\u5E38\u7528\u914D\u7F6E\u89C4\u5219"}],"relativePath":"doc/advanced/eslint.md"}',t={},o=p(`<h1 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h1><p>\u4E0D\u7BA1\u662F\u591A\u4EBA\u5408\u4F5C\u8FD8\u662F\u4E2A\u4EBA\u9879\u76EE\uFF0C\u4EE3\u7801\u89C4\u8303\u90FD\u662F\u5F88\u91CD\u8981\u7684\u3002\u8FD9\u6837\u505A\u4E0D\u4EC5\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u5730\u907F\u514D\u57FA\u672C\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4E5F\u4FDD\u8BC1\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u672C\u6846\u67B6\u5DF2\u96C6\u6210\u4E86 eslint + prettier + lint-staged ,\u8BED\u6CD5\u9519\u8BEF\u63D0\u793A\u548C\u4FDD\u5B58\u7F8E\u5316\u52A8\u4F5C\u9700\u8981\u5B89\u88C5\u63D2\u4EF6\uFF08\u4E0B\u9762\u4F1A\u63D0\u5230\uFF09\uFF0C\u4E14\u4E3B\u8981\u9488\u5BF9vscode\u7F16\u8F91\u5668\uFF0C\u5176\u4ED6\u7F16\u8F91\u5668\u8BF7\u81EA\u884C\u914D\u7F6E</p></div><p><a href="http://eslint.cn/docs/user-guide/getting-started" target="_blank" rel="noopener noreferrer">eslint \u4E2D\u6587\u5B98\u7F51</a></p><h2 id="\u8BC6\u522B\u9519\u8BEF" tabindex="-1">\u8BC6\u522B\u9519\u8BEF <a class="header-anchor" href="#\u8BC6\u522B\u9519\u8BEF" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>vscode \u7F16\u8F91\u5668\u9700\u8981\u5B89\u88C5eslint+prettier\u7684\u63D2\u4EF6\uFF0C\u624D\u53EF\u4EE5\u5728\u5F00\u53D1\u65F6\u914D\u5408\u68C0\u67E5\u4EE3\u7801\u53CA\u7F8E\u5316\u4EE3\u7801</p></div><p>eslint + prettier \u914D\u5408\u7684\u51B2\u7A81\u5DF2\u89E3\u51B3\uFF0C\u4E14\u5728\u4EE3\u7801\u7F16\u5199\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6839\u636E\u81EA\u52A8\u63D0\u793A\u683C\u5F0F\u9519\u8BEF\u548C\u7F8E\u5316\u4EE3\u7801\uFF0C\u524D\u63D0\u65F6\u9700\u8981\u5B89\u88C5\u4EE5\u4E0A\u63D2\u4EF6</p><h2 id="\u8FD0\u884C\u68C0\u67E5" tabindex="-1">\u8FD0\u884C\u68C0\u67E5 <a class="header-anchor" href="#\u8FD0\u884C\u68C0\u67E5" aria-hidden="true">#</a></h2><p>\u8FD0\u884C<code>npm run lint</code>\u6309\u7167<code>standard</code>\u89C4\u8303\u8FDB\u884C\u6821\u9A8C</p><p>\u8FD0\u884C<code>npm run format</code>\u5C06\u4F7F\u7528<code>prettier</code>\u8FDB\u884C\u4EE3\u7801\u7684\u7F8E\u5316</p><p>\u6267\u884C\u4EE3\u7801\u63D0\u4EA4\u547D\u4EE4<code>git commit -m&#39;xxx&#39;</code>\u524D\u90FD\u5C06\u6267\u884C\u4E0A\u8FF0\u4E24\u4E2A\u547D\u4EE4\uFF0C\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u4EE3\u7801\u5C06\u4F1A\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u51FA\u63D0\u793A\uFF0C\u4E14\u4E0D\u4F1A\u5B8C\u6210\u672C\u6B21<code>commit</code></p><h2 id="\u5173\u95ED-eslint-\u68C0\u67E5" tabindex="-1">\u5173\u95ED ESLint \u68C0\u67E5 <a class="header-anchor" href="#\u5173\u95ED-eslint-\u68C0\u67E5" aria-hidden="true">#</a></h2><p>\u628A.eslintrc \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 root \u6539\u4E3A false \u5373\u53EF\u3002</p><h2 id="\u5E38\u7528\u914D\u7F6E\u89C4\u5219" tabindex="-1">\u5E38\u7528\u914D\u7F6E\u89C4\u5219 <a class="header-anchor" href="#\u5E38\u7528\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EE5\u5F53\u524D\u76EE\u5F55\u4E3A\u6839\u76EE\u5F55\uFF0C\u4E0D\u518D\u5411\u4E0A\u67E5\u627E .eslintrc.js</span>
  root<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/*
    //\u914D\u7F6E\u89C4\u5219
    rules: {
      &quot;\u89C4\u5219\u540D&quot;: [\u89C4\u5219\u503C, \u89C4\u5219\u914D\u7F6E]
    }

    &quot;off&quot; \u6216 0 - \u5173\u95ED\u89C4\u5219
    &quot;warn&quot; \u6216 1 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u8B66\u544A\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Awarn (\u4E0D\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u9000\u51FA),
    &quot;error&quot; \u6216 2 - \u5F00\u542F\u89C4\u5219\uFF0C\u4F7F\u7528\u9519\u8BEF\u7EA7\u522B\u7684\u9519\u8BEF\uFF1Aerror (\u5F53\u88AB\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u7A0B\u5E8F\u4F1A\u9000\u51FA)
  */</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//////////////////////////////////////////////////////////</span>
    <span class="token comment">//                      \u53EF\u80FD\u7684\u9519\u8BEF                       //</span>
    <span class="token comment">// \u8FD9\u4E9B\u89C4\u5219\u4E0E JavaScript \u4EE3\u7801\u4E2D\u53EF\u80FD\u7684\u8BED\u6CD5\u9519\u8BEF\u6216\u903B\u8F91\u9519\u8BEF\u6709\u5173 //</span>
    <span class="token comment">//////////////////////////////////////////////////////////</span>

    <span class="token comment">// \u7981\u6B62\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u8D4B\u503C\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-cond-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 for \u5FAA\u73AF\u51FA\u73B0\u65B9\u5411\u9519\u8BEF\u7684\u5FAA\u73AF\uFF0C\u6BD4\u5982 for (i = 0; i &lt; 10; i--)</span>
    <span class="token string-property property">&quot;for-direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// getter \u5FC5\u987B\u6709\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u7981\u6B62\u8FD4\u56DE\u7A7A\uFF0C\u6BD4\u5982 return;</span>
    <span class="token string-property property">&quot;getter-return&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        allowImplicit<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5C06 await \u5199\u5728\u5FAA\u73AF\u91CC\uFF0C\u56E0\u4E3A\u8FD9\u6837\u5C31\u65E0\u6CD5\u540C\u65F6\u53D1\u9001\u591A\u4E2A\u5F02\u6B65\u8BF7\u6C42\u4E86</span>
    <span class="token comment">// @off \u8981\u6C42\u592A\u4E25\u683C\u4E86\uFF0C\u6709\u65F6\u9700\u8981\u5728\u5FAA\u73AF\u4E2D\u5199 await</span>
    <span class="token string-property property">&quot;no-await-in-loop&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0E\u8D1F\u96F6\u8FDB\u884C\u6BD4\u8F83</span>
    <span class="token string-property property">&quot;no-compare-neg-zero&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 console</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6761\u4EF6\u4E2D\u4F7F\u7528\u5E38\u91CF\u8868\u8FBE\u5F0F</span>
    <span class="token comment">// if (false) {</span>
    <span class="token comment">// doSomethingUnfinished();</span>
    <span class="token comment">// } //cuowu</span>
    <span class="token string-property property">&quot;no-constant-condition&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u63A7\u5236\u5B57\u7B26 \uFF1Anew RegExp(&quot;\\x1f&quot;)</span>
    <span class="token string-property property">&quot;no-control-regex&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6570\u7EC4\u548C\u5BF9\u8C61\u952E\u503C\u5BF9\u6700\u540E\u4E00\u4E2A\u9017\u53F7\uFF0C never\u53C2\u6570\uFF1A\u4E0D\u80FD\u5E26\u672B\u5C3E\u7684\u9017\u53F7, always\u53C2\u6570\uFF1A\u5FC5\u987B\u5E26\u672B\u5C3E\u7684\u9017\u53F7\uFF0C</span>
    <span class="token comment">// always-multiline\uFF1A\u591A\u884C\u6A21\u5F0F\u5FC5\u987B\u5E26\u9017\u53F7\uFF0C\u5355\u884C\u6A21\u5F0F\u4E0D\u80FD\u5E26\u9017\u53F7</span>
    <span class="token string-property property">&quot;comma-dangle&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 debugger</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 function \u5B9A\u4E49\u4E2D\u51FA\u73B0\u91CD\u540D\u53C2\u6570</span>
    <span class="token string-property property">&quot;no-dupe-args&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u91CD\u590D\u7684 key</span>
    <span class="token string-property property">&quot;no-dupe-keys&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u91CD\u590D\u7684 case \u6807\u7B7E</span>
    <span class="token string-property property">&quot;no-duplicate-case&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u7A7A\u8BED\u53E5\u5757</span>
    <span class="token string-property property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u7A7A\u5B57\u7B26\u96C6 (/^abc[]/)</span>
    <span class="token string-property property">&quot;no-empty-character-class&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9 catch \u5B50\u53E5\u7684\u53C2\u6570\u91CD\u65B0\u8D4B\u503C</span>
    <span class="token string-property property">&quot;no-ex-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362</span>
    <span class="token string-property property">&quot;no-extra-boolean-cast&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u62EC\u53F7 //(a * b) + c;//\u62A5\u9519</span>
    <span class="token string-property property">&quot;no-extra-parens&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5206\u53F7</span>
    <span class="token string-property property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9 function \u58F0\u660E\u91CD\u65B0\u8D4B\u503C</span>
    <span class="token string-property property">&quot;no-func-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5D4C\u5957\u7684\u5757\u4E2D\u51FA\u73B0 function \u6216 var \u58F0\u660E</span>
    <span class="token string-property property">&quot;no-inner-declarations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;functions&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 RegExp \u6784\u9020\u51FD\u6570\u4E2D\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32</span>
    <span class="token string-property property">&quot;no-invalid-regexp&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u548C\u6CE8\u91CA\u4E4B\u5916\u4E0D\u89C4\u5219\u7684\u7A7A\u767D</span>
    <span class="token string-property property">&quot;no-irregular-whitespace&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728 in \u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u5426\u5B9A\u7684\u5DE6\u64CD\u4F5C\u6570</span>
    <span class="token string-property property">&quot;no-negated-in-lhs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u628A\u5168\u5C40\u5BF9\u8C61 (Math \u548C JSON) \u4F5C\u4E3A\u51FD\u6570\u8C03\u7528 \u9519\u8BEF\uFF1Avar math = Math();</span>
    <span class="token string-property property">&quot;no-obj-calls&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u76F4\u63A5\u4F7F\u7528 Object.prototypes \u7684\u5185\u7F6E\u5C5E\u6027</span>
    <span class="token string-property property">&quot;no-prototype-builtins&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u591A\u4E2A\u7A7A\u683C</span>
    <span class="token string-property property">&quot;no-regex-spaces&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u7A00\u758F\u6570\u7EC4</span>
    <span class="token string-property property">&quot;no-sparse-arrays&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u4EE4\u4EBA\u56F0\u60D1\u7684\u591A\u884C\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;no-unexpected-multiline&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728return\u3001throw\u3001continue \u548C break\u8BED\u53E5\u4E4B\u540E\u51FA\u73B0\u4E0D\u53EF\u8FBE\u4EE3\u7801</span>
    <span class="token string-property property">&quot;no-unreachable&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528 isNaN() \u68C0\u67E5 NaN</span>
    <span class="token string-property property">&quot;use-isnan&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u6709\u6548\u7684 JSDoc \u6CE8\u91CA</span>
    <span class="token string-property property">&quot;valid-jsdoc&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236 typeof \u8868\u8FBE\u5F0F\u4E0E\u6709\u6548\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83</span>
    <span class="token comment">// typeof foo === &quot;undefimed&quot; \u9519\u8BEF</span>
    <span class="token string-property property">&quot;valid-typeof&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>


    <span class="token comment">//////////////</span>
    <span class="token comment">// \u6700\u4F73\u5B9E\u8DF5 //</span>
    <span class="token comment">//////////////</span>

    <span class="token comment">// \u5B9A\u4E49\u5BF9\u8C61\u7684set\u5B58\u53D6\u5668\u5C5E\u6027\u65F6\uFF0C\u5F3A\u5236\u5B9A\u4E49get</span>
    <span class="token string-property property">&quot;accessor-pairs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6570\u7EC4\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u6709 return \u8BED\u53E5</span>
    <span class="token string-property property">&quot;array-callback-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u628A\u53D8\u91CF\u7684\u4F7F\u7528\u9650\u5236\u5728\u5176\u5B9A\u4E49\u7684\u4F5C\u7528\u57DF\u8303\u56F4\u5185</span>
    <span class="token string-property property">&quot;block-scoped-var&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9650\u5236\u5708\u590D\u6742\u5EA6\uFF0C\u4E5F\u5C31\u662F\u7C7B\u4F3Cif else\u80FD\u8FDE\u7EED\u63A5\u591A\u5C11\u4E2A</span>
    <span class="token string-property property">&quot;complexity&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42 return \u8BED\u53E5\u8981\u4E48\u603B\u662F\u6307\u5B9A\u8FD4\u56DE\u7684\u503C\uFF0C\u8981\u4E48\u4E0D\u6307\u5B9A</span>
    <span class="token string-property property">&quot;consistent-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6240\u6709\u63A7\u5236\u8BED\u53E5\u4F7F\u7528\u4E00\u81F4\u7684\u62EC\u53F7\u98CE\u683C</span>
    <span class="token string-property property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// switch \u8BED\u53E5\u5F3A\u5236 default \u5206\u652F\uFF0C\u4E5F\u53EF\u6DFB\u52A0 // no default \u6CE8\u91CA\u53D6\u6D88\u6B64\u6B21\u8B66\u544A</span>
    <span class="token string-property property">&quot;default-case&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236object.key \u4E2D . \u7684\u4F4D\u7F6E\uFF0C\u53C2\u6570:</span>
    <span class="token comment">// property\uFF0C&#39;.&#39;\u53F7\u5E94\u4E0E\u5C5E\u6027\u5728\u540C\u4E00\u884C</span>
    <span class="token comment">// object, &#39;.&#39; \u53F7\u5E94\u4E0E\u5BF9\u8C61\u540D\u5728\u540C\u4E00\u884C</span>
    <span class="token string-property property">&quot;dot-location&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;property&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528.\u53F7\u53D6\u5C5E\u6027</span>
    <span class="token comment">// \u53C2\u6570\uFF1A allowKeywords\uFF1Atrue \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528.\u65B9\u5F0F\u53D6\u5C5E\u6027</span>
    <span class="token comment">// false \u4F7F\u7528\u4FDD\u7559\u5B57\u505A\u5C5E\u6027\u540D\u65F6, \u53EA\u80FD\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u5C5E\u6027 e.g [2, {&quot;allowKeywords&quot;: false}]</span>
    <span class="token comment">// allowPattern: \u5F53\u5C5E\u6027\u540D\u5339\u914D\u63D0\u4F9B\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u65F6\uFF0C\u5141\u8BB8\u4F7F\u7528[]\u65B9\u5F0F\u53D6\u503C,\u5426\u5219\u53EA\u80FD\u7528.\u53F7\u53D6\u503C e.g [2, {&quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot;}]</span>
    <span class="token string-property property">&quot;dot-notation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;allowKeywords&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528 === \u66FF\u4EE3 == allow-null\u5141\u8BB8null\u548Cundefined==</span>
    <span class="token string-property property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;allow-null&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42 for-in \u5FAA\u73AF\u4E2D\u6709\u4E00\u4E2A if \u8BED\u53E5</span>
    <span class="token string-property property">&quot;guard-for-in&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 alert\u3001confirm \u548C prompt</span>
    <span class="token string-property property">&quot;no-alert&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 arguments.caller \u6216 arguments.callee</span>
    <span class="token string-property property">&quot;no-caller&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5728 case \u5B50\u53E5\u4E2D\u4F7F\u7528\u8BCD\u6CD5\u58F0\u660E</span>
    <span class="token string-property property">&quot;no-case-declarations&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u9664\u6CD5\u64CD\u4F5C\u7B26\u663E\u5F0F\u7684\u51FA\u73B0\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u5F00\u59CB\u7684\u4F4D\u7F6E</span>
    <span class="token string-property property">&quot;no-div-regex&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 if \u8BED\u53E5\u4E2D\u6709 return \u4E4B\u540E\u6709 else</span>
    <span class="token string-property property">&quot;no-else-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u7A7A\u51FD\u6570.\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5305\u542B\u4E86\u4E00\u6761\u6CE8\u91CA\uFF0C\u5B83\u5C06\u4E0D\u4F1A\u88AB\u8BA4\u4E3A\u6709\u95EE\u9898\u3002</span>
    <span class="token string-property property">&quot;no-empty-function&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u7A7A\u89E3\u6784\u6A21\u5F0Fno-empty-pattern</span>
    <span class="token string-property property">&quot;no-empty-pattern&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6CA1\u6709\u7C7B\u578B\u68C0\u67E5\u64CD\u4F5C\u7B26\u7684\u60C5\u51B5\u4E0B\u4E0E null \u8FDB\u884C\u6BD4\u8F83</span>
    <span class="token string-property property">&quot;no-eq-null&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 eval()</span>
    <span class="token string-property property">&quot;no-eval&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6269\u5C55\u539F\u751F\u7C7B\u578B</span>
    <span class="token string-property property">&quot;no-extend-native&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684 .bind() \u8C03\u7528</span>
    <span class="token string-property property">&quot;no-extra-bind&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u6807\u7B7E</span>
    <span class="token string-property property">&quot;no-extra-label:&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 case \u8BED\u53E5\u843D\u7A7A</span>
    <span class="token string-property property">&quot;no-fallthrough&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6570\u5B57\u5B57\u9762\u91CF\u4E2D\u4F7F\u7528\u524D\u5BFC\u548C\u672B\u5C3E\u5C0F\u6570\u70B9</span>
    <span class="token string-property property">&quot;no-floating-decimal&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u77ED\u7B26\u53F7\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362(!!fOO)</span>
    <span class="token string-property property">&quot;no-implicit-coercion&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5168\u5C40\u8303\u56F4\u5185\u4F7F\u7528 var \u548C\u547D\u540D\u7684 function \u58F0\u660E</span>
    <span class="token string-property property">&quot;no-implicit-globals&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u7C7B\u4F3C eval() \u7684\u65B9\u6CD5</span>
    <span class="token string-property property">&quot;no-implied-eval&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 this \u5173\u952E\u5B57\u51FA\u73B0\u5728\u7C7B\u548C\u7C7B\u5BF9\u8C61\u4E4B\u5916</span>
    <span class="token string-property property">&quot;no-invalid-this&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 __iterator__ \u5C5E\u6027</span>
    <span class="token string-property property">&quot;no-iterator&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u6807\u7B7E\u8BED\u53E5</span>
    <span class="token string-property property">&quot;no-labels&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957\u5757</span>
    <span class="token string-property property">&quot;no-lone-blocks&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5FAA\u73AF\u4E2D\u51FA\u73B0 function \u58F0\u660E\u548C\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;no-loop-func&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u9B54\u672F\u6570\u5B57(3.14\u4EC0\u4E48\u7684\u7528\u5E38\u91CF\u4EE3\u66FF)</span>
    <span class="token string-property property">&quot;no-magic-numbers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u591A\u4E2A\u7A7A\u683C</span>
    <span class="token string-property property">&quot;no-multi-spaces&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u53EF\u4EE5\u5728\u65B0\u884C\u4E4B\u524D\u4F7F\u7528\u659C\u7EBF\u521B\u5EFA\u591A\u884C\u5B57\u7B26\u4E32</span>
    <span class="token string-property property">&quot;no-multi-str&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9\u539F\u751F\u5BF9\u8C61\u8D4B\u503C</span>
    <span class="token string-property property">&quot;no-native-reassign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u975E\u8D4B\u503C\u6216\u6761\u4EF6\u8BED\u53E5\u4E2D\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9 Function \u5BF9\u8C61\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-new-func&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9 String\uFF0CNumber \u548C Boolean \u4F7F\u7528 new \u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-new-wrappers&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u516B\u8FDB\u5236\u5B57\u9762\u91CF</span>
    <span class="token string-property property">&quot;no-octal&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u516B\u8FDB\u5236\u8F6C\u4E49\u5E8F\u5217</span>
    <span class="token string-property property">&quot;no-octal-escape&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5BF9 function \u7684\u53C2\u6570\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C</span>
    <span class="token string-property property">&quot;no-param-reassign&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 __proto__ \u5C5E\u6027</span>
    <span class="token string-property property">&quot;no-proto&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 var \u591A\u6B21\u58F0\u660E\u540C\u4E00\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u6307\u5B9A\u7684\u901A\u8FC7 require \u52A0\u8F7D\u7684\u6A21\u5757</span>
    <span class="token string-property property">&quot;no-return-assign&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 javascript: url</span>
    <span class="token string-property property">&quot;no-script-url&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u81EA\u6211\u8D4B\u503C</span>
    <span class="token string-property property">&quot;no-self-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u81EA\u8EAB\u6BD4\u8F83</span>
    <span class="token string-property property">&quot;no-self-compare&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u9017\u53F7\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-sequences&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u629B\u51FA\u975E\u5F02\u5E38\u5B57\u9762\u91CF</span>
    <span class="token string-property property">&quot;no-throw-literal&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u4E00\u6210\u4E0D\u53D8\u7684\u5FAA\u73AF\u6761\u4EF6</span>
    <span class="token string-property property">&quot;no-unmodified-loop-condition&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u672A\u4F7F\u7528\u8FC7\u7684\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;no-unused-expressions&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u672A\u4F7F\u7528\u8FC7\u7684\u6807\u7B7E</span>
    <span class="token string-property property">&quot;no-unused-labels&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684 .call() \u548C .apply()</span>
    <span class="token string-property property">&quot;no-useless-call&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u6216\u6A21\u677F\u5B57\u9762\u91CF\u7684\u8FDE\u63A5</span>
    <span class="token string-property property">&quot;no-useless-concat&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u8F6C\u4E49\u5B57\u7B26</span>
    <span class="token string-property property">&quot;no-useless-escape&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 void \u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-void&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6CE8\u91CA\u4E2D\u4F7F\u7528\u7279\u5B9A\u7684\u8B66\u544A\u672F\u8BED</span>
    <span class="token string-property property">&quot;no-warning-comments&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 with \u8BED\u53E5</span>
    <span class="token string-property property">&quot;no-with&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728parseInt()\u4F7F\u7528\u57FA\u6570\u53C2\u6570</span>
    <span class="token string-property property">&quot;radix&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6240\u6709\u7684 var \u58F0\u660E\u51FA\u73B0\u5728\u5B83\u4EEC\u6240\u5728\u7684\u4F5C\u7528\u57DF\u9876\u90E8</span>
    <span class="token string-property property">&quot;vars-on-top&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42 IIFE \u4F7F\u7528\u62EC\u53F7\u62EC\u8D77\u6765</span>
    <span class="token string-property property">&quot;wrap-iife&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;any&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62 \u201CYoda\u201D \u6761\u4EF6</span>
    <span class="token string-property property">&quot;yoda&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u6307\u4EE4</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>


    <span class="token comment">//////////////</span>
    <span class="token comment">// \u53D8\u91CF\u58F0\u660E //</span>
    <span class="token comment">//////////////</span>

    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62 var \u58F0\u660E\u4E2D\u7684\u521D\u59CB\u5316(\u521D\u503C)</span>
    <span class="token string-property property">&quot;init-declarations&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8 catch \u5B50\u53E5\u7684\u53C2\u6570\u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u540C\u540D</span>
    <span class="token string-property property">&quot;no-catch-shadow&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5220\u9664\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-delete-var&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u6807\u7B7E\u4E0E\u53D8\u91CF\u540C\u540D</span>
    <span class="token string-property property">&quot;no-label-var&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u7279\u5B9A\u7684\u5168\u5C40\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-restricted-globals&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 var \u58F0\u660E \u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u540C\u540D</span>
    <span class="token string-property property">&quot;no-shadow&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u8986\u76D6\u53D7\u9650\u5236\u7684\u6807\u8BC6\u7B26</span>
    <span class="token string-property property">&quot;no-shadow-restricted-names&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u672A\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u9664\u975E\u5B83\u4EEC\u5728 /*global */ \u6CE8\u91CA\u4E2D\u88AB\u63D0\u5230</span>
    <span class="token string-property property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5C06\u53D8\u91CF\u521D\u59CB\u5316\u4E3A undefined</span>
    <span class="token string-property property">&quot;no-undef-init&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5C06 undefined \u4F5C\u4E3A\u6807\u8BC6\u7B26</span>
    <span class="token string-property property">&quot;no-undefined&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u672A\u4F7F\u7528\u8FC7\u7684\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5728\u53D8\u91CF\u5B9A\u4E49\u4E4B\u524D\u4F7F\u7528\u5B83\u4EEC</span>
    <span class="token string-property property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token comment">//////////////////////////</span>
    <span class="token comment">// Node.js and CommonJS //</span>
    <span class="token comment">//////////////////////////</span>

    <span class="token comment">// require return statements after callbacks</span>
    <span class="token string-property property">&quot;callback-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42 require() \u51FA\u73B0\u5728\u9876\u5C42\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D</span>
    <span class="token string-property property">&quot;global-require&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u56DE\u8C03\u51FD\u6570\u4E2D\u6709\u5BB9\u9519\u5904\u7406</span>
    <span class="token string-property property">&quot;handle-callback-err&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;^(err|error)$&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6DF7\u5408\u5E38\u89C4 var \u58F0\u660E\u548C require \u8C03\u7528</span>
    <span class="token string-property property">&quot;no-mixed-requires&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u8C03\u7528 require \u65F6\u4F7F\u7528 new \u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-new-require&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5BF9 __dirname \u548C __filename\u8FDB\u884C\u5B57\u7B26\u4E32\u8FDE\u63A5</span>
    <span class="token string-property property">&quot;no-path-concat&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 process.<wbr>env</span>
    <span class="token string-property property">&quot;no-process-env&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 process.exit()</span>
    <span class="token string-property property">&quot;no-process-exit&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u540C\u6B65\u65B9\u6CD5</span>
    <span class="token string-property property">&quot;no-sync&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token comment">//////////////</span>
    <span class="token comment">// \u98CE\u683C\u6307\u5357 //</span>
    <span class="token comment">//////////////</span>

    <span class="token comment">// \u6307\u5B9A\u6570\u7EC4\u7684\u5143\u7D20\u4E4B\u95F4\u8981\u4EE5\u7A7A\u683C\u9694\u5F00(, \u540E\u9762)\uFF0C never\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u4E0D\u80FD\u5E26\u7A7A\u683C\uFF0Calways\u53C2\u6570\uFF1A[ \u4E4B\u524D\u548C ] \u4E4B\u540E\u5FC5\u987B\u5E26\u7A7A\u683C</span>
    <span class="token string-property property">&quot;array-bracket-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6216\u5F3A\u5236\u5728\u5355\u884C\u4EE3\u7801\u5757\u4E2D\u4F7F\u7528\u7A7A\u683C(\u7981\u7528)</span>
    <span class="token string-property property">&quot;block-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u7F29\u8FDB \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A &quot;tab&quot; \u65F6\uFF0C\u4F1A\u4F7F\u7528tab\uFF0C</span>
    <span class="token comment">// if while function \u540E\u9762\u7684{\u5FC5\u987B\u4E0Eif\u5728\u540C\u4E00\u884C\uFF0Cjava\u98CE\u683C\u3002</span>
    <span class="token string-property property">&quot;brace-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;1tbs&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;allowSingleLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53CC\u5CF0\u9A7C\u547D\u540D\u683C\u5F0F</span>
    <span class="token string-property property">&quot;camelcase&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63A7\u5236\u9017\u53F7\u524D\u540E\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;comma-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;before&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;after&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63A7\u5236\u9017\u53F7\u5728\u884C\u5C3E\u51FA\u73B0\u8FD8\u662F\u5728\u884C\u9996\u51FA\u73B0 (\u9ED8\u8BA4\u884C\u5C3E)</span>
    <span class="token comment">// http://eslint.org/docs/rules/comma-style</span>
    <span class="token string-property property">&quot;comma-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;last&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//&quot;SwitchCase&quot; (\u9ED8\u8BA4\uFF1A0) \u5F3A\u5236 switch \u8BED\u53E5\u4E2D\u7684 case \u5B50\u53E5\u7684\u7F29\u8FDB\u6C34\u5E73</span>
    <span class="token comment">// \u4EE5\u65B9\u62EC\u53F7\u53D6\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C[ \u540E\u9762\u548C ] \u524D\u9762\u662F\u5426\u9700\u8981\u7A7A\u683C, \u53EF\u9009\u53C2\u6570 never, always</span>
    <span class="token string-property property">&quot;computed-property-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u4E8E\u6307\u7EDF\u4E00\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6307\u5411this\u7684\u53D8\u91CF\u540D\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684this\u5DF2\u7ECF\u53EF\u4EE5\u6307\u5411\u5916\u5C42\u8C03\u7528\u8005\uFF0C\u5E94\u8BE5\u6CA1\u5375\u7528\u4E86</span>
    <span class="token comment">// e.g [0,&quot;that&quot;] \u6307\u5B9A\u53EA\u80FD var that = this. that\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0Cthis\u4E5F\u4E0D\u80FD\u8D4B\u503C\u7ED9that\u4EE5\u5916\u7684\u5176\u4ED6\u503C</span>
    <span class="token string-property property">&quot;consistent-this&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;that&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u547D\u540D\u7684 function \u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;func-names&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6587\u4EF6\u672B\u5C3E\u5F3A\u5236\u6362\u884C</span>
    <span class="token string-property property">&quot;eol-last&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;indent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;SwitchCase&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5C5E\u6027\u4E2D\u952E\u548C\u503C\u4E4B\u95F4\u4F7F\u7528\u4E00\u81F4\u7684\u95F4\u8DDD</span>
    <span class="token string-property property">&quot;key-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;beforeColon&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;afterColon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u98CE\u683C</span>
    <span class="token string-property property">&quot;linebreak-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;unix&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u5728\u6CE8\u91CA\u5468\u56F4\u6709\u7A7A\u884C ( \u8981\u6C42\u5728\u5757\u7EA7\u6CE8\u91CA\u4E4B\u524D\u6709\u4E00\u7A7A\u884C)</span>
    <span class="token string-property property">&quot;lines-around-comment&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;beforeBlockComment&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4E00\u81F4\u5730\u4F7F\u7528\u51FD\u6570\u58F0\u660E\u6216\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u98CE\u683C\uFF0C\u53C2\u6570\uFF1A</span>
    <span class="token comment">// declaration: \u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u58F0\u660E\u7684\u65B9\u5F0F\uFF0Cfunction f(){} e.g [2, &quot;declaration&quot;]</span>
    <span class="token comment">// expression\uFF1A\u5F3A\u5236\u4F7F\u7528\u65B9\u6CD5\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\uFF0Cvar f = function() {} e.g [2, &quot;expression&quot;]</span>
    <span class="token comment">// allowArrowFunctions: declaration\u98CE\u683C\u4E2D\u5141\u8BB8\u7BAD\u5934\u51FD\u6570\u3002 e.g [2, &quot;declaration&quot;, { &quot;allowArrowFunctions&quot;: true }]</span>
    <span class="token string-property property">&quot;func-style&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u56DE\u8C03\u51FD\u6570\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6 5\u5C42</span>
    <span class="token string-property property">&quot;max-nested-callbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u6807\u8BC6\u7B26</span>
    <span class="token string-property property">&quot;id-blacklist&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6807\u8BC6\u7B26\u7684\u6700\u65B0\u548C\u6700\u5927\u957F\u5EA6</span>
    <span class="token string-property property">&quot;id-length&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6807\u8BC6\u7B26\u5339\u914D\u4E00\u4E2A\u6307\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;id-match&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728 JSX \u5C5E\u6027\u4E2D\u4E00\u81F4\u5730\u4F7F\u7528\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7</span>
    <span class="token string-property property">&quot;jsx-quotes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u5173\u952E\u5B57\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C (\u524D\u540E\u8170\u9700\u8981)</span>
    <span class="token string-property property">&quot;keyword-spacing&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4E00\u884C\u7684\u6700\u5927\u957F\u5EA6</span>
    <span class="token string-property property">&quot;max-len&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6700\u5927\u884C\u6570</span>
    <span class="token string-property property">&quot;max-lines&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236 function \u5B9A\u4E49\u4E2D\u6700\u591A\u5141\u8BB8\u7684\u53C2\u6570\u6570\u91CF</span>
    <span class="token string-property property">&quot;max-params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236 function \u5757\u6700\u591A\u5141\u8BB8\u7684\u7684\u8BED\u53E5\u6570\u91CF</span>
    <span class="token string-property property">&quot;max-statements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6BCF\u4E00\u884C\u4E2D\u6240\u5141\u8BB8\u7684\u6700\u5927\u8BED\u53E5\u6570\u91CF</span>
    <span class="token string-property property">&quot;max-statements-per-line&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6784\u9020\u51FD\u6570\u9996\u5B57\u6BCD\u5927\u5199 \uFF08\u8981\u6C42\u8C03\u7528 new \u64CD\u4F5C\u7B26\u65F6\u6709\u9996\u5B57\u6BCD\u5927\u5C0F\u7684\u51FD\u6570\uFF0C\u5141\u8BB8\u8C03\u7528\u9996\u5B57\u6BCD\u5927\u5199\u7684\u51FD\u6570\u65F6\u6CA1\u6709 new \u64CD\u4F5C\u7B26\u3002\uFF09</span>
    <span class="token string-property property">&quot;new-cap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;newIsCap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;capIsNew&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u8C03\u7528\u65E0\u53C2\u6784\u9020\u51FD\u6570\u65F6\u6709\u5706\u62EC\u53F7</span>
    <span class="token string-property property">&quot;new-parens&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62 var \u58F0\u660E\u8BED\u53E5\u540E\u6709\u4E00\u884C\u7A7A\u884C</span>
    <span class="token string-property property">&quot;newline-after-var&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 Array \u6784\u9020\u51FD\u6570</span>
    <span class="token string-property property">&quot;no-array-constructor&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u6309\u4F4D\u8FD0\u7B97\u7B26</span>
    <span class="token string-property property">&quot;no-bitwise&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42 return \u8BED\u53E5\u4E4B\u524D\u6709\u4E00\u7A7A\u884C</span>
    <span class="token string-property property">&quot;newline-before-return&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u65B9\u6CD5\u94FE\u4E2D\u6BCF\u4E2A\u8C03\u7528\u90FD\u6709\u4E00\u4E2A\u6362\u884C\u7B26</span>
    <span class="token string-property property">&quot;newline-per-chained-call&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528 continue \u8BED\u53E5</span>
    <span class="token string-property property">&quot;no-continue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u4EE3\u7801\u884C\u540E\u4F7F\u7528\u5185\u8054\u6CE8\u91CA</span>
    <span class="token string-property property">&quot;no-inline-comments&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 if \u4F5C\u4E3A\u552F\u4E00\u7684\u8BED\u53E5\u51FA\u73B0\u5728 else \u8BED\u53E5\u4E2D</span>
    <span class="token string-property property">&quot;no-lonely-if&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6DF7\u5408\u4F7F\u7528\u4E0D\u540C\u7684\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-mixed-operators&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u7A7A\u683C\u548C tab \u6DF7\u5408\u7F29\u8FDB</span>
    <span class="token string-property property">&quot;no-mixed-spaces-and-tabs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u591A\u4E2A\u7A7A\u884C</span>
    <span class="token string-property property">&quot;no-multiple-empty-lines&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5426\u5B9A\u7684\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;no-negated-condition&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u4F7F\u7528\u5D4C\u5957\u7684\u4E09\u5143\u8868\u8FBE\u5F0F</span>
    <span class="token string-property property">&quot;no-nested-ternary&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 Object \u7684\u6784\u9020\u51FD\u6570</span>
    <span class="token string-property property">&quot;no-new-object&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u4E00\u5143\u64CD\u4F5C\u7B26 ++ \u548C --</span>
    <span class="token string-property property">&quot;no-plusplus&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u7279\u5B9A\u7684\u8BED\u6CD5</span>
    <span class="token string-property property">&quot;no-restricted-syntax&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 function \u6807\u8BC6\u7B26\u548C\u62EC\u53F7\u4E4B\u95F4\u51FA\u73B0\u7A7A\u683C</span>
    <span class="token string-property property">&quot;no-spaced-func&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u4F7F\u7528\u4E09\u5143\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-ternary&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u7528\u884C\u5C3E\u7A7A\u683C</span>
    <span class="token string-property property">&quot;no-trailing-spaces&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u6807\u8BC6\u7B26\u4E2D\u6709\u60AC\u7A7A\u4E0B\u5212\u7EBF_bar</span>
    <span class="token string-property property">&quot;no-underscore-dangle&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u53EF\u4EE5\u5728\u6709\u66F4\u7B80\u5355\u7684\u53EF\u66FF\u4EE3\u7684\u8868\u8FBE\u5F0F\u65F6\u4F7F\u7528\u4E09\u5143\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;no-unneeded-ternary&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5C5E\u6027\u524D\u6709\u7A7A\u767D</span>
    <span class="token string-property property">&quot;no-whitespace-before-property&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u82B1\u62EC\u53F7\u5185\u6362\u884C\u7B26\u7684\u4E00\u81F4\u6027</span>
    <span class="token string-property property">&quot;object-curly-newline&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u82B1\u62EC\u53F7\u4E2D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;object-curly-spacing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5C06\u5BF9\u8C61\u7684\u5C5E\u6027\u653E\u5728\u4E0D\u540C\u7684\u884C\u4E0A</span>
    <span class="token string-property property">&quot;object-property-newline&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u8981\u4E48\u4E00\u8D77\u58F0\u660E\u8981\u4E48\u5206\u5F00\u58F0\u660E</span>
    <span class="token string-property property">&quot;one-var&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;initialized&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u5728 var \u58F0\u660E\u5468\u56F4\u6362\u884C</span>
    <span class="token string-property property">&quot;one-var-declaration-per-line&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u5728\u53EF\u80FD\u7684\u60C5\u51B5\u4E0B\u8981\u6C42\u4F7F\u7528\u7B80\u5316\u7684\u8D4B\u503C\u64CD\u4F5C\u7B26</span>
    <span class="token string-property property">&quot;operator-assignment&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u64CD\u4F5C\u7B26\u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u7B26</span>
    <span class="token string-property property">&quot;operator-linebreak&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;after&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;before&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;:&quot;</span><span class="token operator">:</span> <span class="token string">&quot;before&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u5757\u5185\u586B\u5145</span>
    <span class="token string-property property">&quot;padded-blocks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u5BF9\u8C61\u5B57\u9762\u91CF\u5C5E\u6027\u540D\u79F0\u7528\u5F15\u53F7\u62EC\u8D77\u6765</span>
    <span class="token string-property property">&quot;quote-props&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u53CD\u52FE\u53F7\u3001\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7</span>
    <span class="token string-property property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;avoid-escape&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528 JSDoc \u6CE8\u91CA</span>
    <span class="token string-property property">&quot;require-jsdoc&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u4F7F\u7528\u5206\u53F7\u800C\u4E0D\u662F ASI\uFF08\u8FD9\u4E2A\u624D\u662F\u63A7\u5236\u884C\u5C3E\u90E8\u5206\u53F7\u7684\uFF0C\uFF09</span>
    <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5206\u53F7\u4E4B\u524D\u548C\u4E4B\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;semi-spacing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u540C\u4E00\u4E2A\u58F0\u660E\u5757\u4E2D\u7684\u53D8\u91CF\u6309\u987A\u5E8F\u6392\u5217</span>
    <span class="token string-property property">&quot;sort-vars&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u5757\u4E4B\u524D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;space-before-blocks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728 function\u7684\u5DE6\u62EC\u53F7\u4E4B\u524D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;space-before-function-paren&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u5706\u62EC\u53F7\u5185\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;space-in-parens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u64CD\u4F5C\u7B26\u5468\u56F4\u6709\u7A7A\u683C</span>
    <span class="token string-property property">&quot;space-infix-ops&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u4E00\u5143\u64CD\u4F5C\u7B26\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;space-unary-ops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;words&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;nonwords&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u6CE8\u91CA\u4E2D // \u6216 /* \u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;spaced-comment&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;markers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;globals&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint-disable&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*package&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62 Unicode BOM</span>
    <span class="token string-property property">&quot;unicode-bom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6B63\u5219\u8868\u8FBE\u5F0F\u88AB\u62EC\u53F7\u62EC\u8D77\u6765</span>
    <span class="token string-property property">&quot;wrap-regex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token comment">//////////////</span>
    <span class="token comment">// ES6.\u76F8\u5173 //</span>
    <span class="token comment">//////////////</span>

    <span class="token comment">// \u8981\u6C42\u7BAD\u5934\u51FD\u6570\u4F53\u4F7F\u7528\u5927\u62EC\u53F7</span>
    <span class="token string-property property">&quot;arrow-body-style&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u4F7F\u7528\u5706\u62EC\u53F7</span>
    <span class="token string-property property">&quot;arrow-parens&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;arrow-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;before&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;after&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u7528super()\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0CTypeScrip\u7684\u7F16\u8BD1\u5668\u4E5F\u4F1A\u63D0\u793A</span>
    <span class="token string-property property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236 generator \u51FD\u6570\u4E2D * \u53F7\u5468\u56F4\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token string-property property">&quot;generator-star-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;before&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;after&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4FEE\u6539\u7C7B\u58F0\u660E\u7684\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-class-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u7BAD\u5934\u529F\u80FD\uFF0C\u5728\u90A3\u91CC\u4ED6\u4EEC\u53EF\u4EE5\u6DF7\u6DC6\u7684\u6BD4\u8F83</span>
    <span class="token string-property property">&quot;no-confusing-arrow&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4FEE\u6539 const \u58F0\u660E\u7684\u53D8\u91CF</span>
    <span class="token string-property property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u7C7B\u6210\u5458\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u540D\u79F0</span>
    <span class="token string-property property">&quot;no-dupe-class-members&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u590D\u5236\u6A21\u5757\u7684\u8FDB\u53E3</span>
    <span class="token string-property property">&quot;no-duplicate-imports&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62 Symbol \u7684\u6784\u9020\u51FD\u6570</span>
    <span class="token string-property property">&quot;no-new-symbol&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5141\u8BB8\u6307\u5B9A\u6A21\u5757\u52A0\u8F7D\u65F6\u7684\u8FDB\u53E3</span>
    <span class="token string-property property">&quot;no-restricted-imports&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u5728\u8C03\u7528 super() \u4E4B\u524D\u4F7F\u7528 this \u6216 super</span>
    <span class="token string-property property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\u6027\u80FD\u952E\u5BF9\u8C61\u7684\u6587\u5B57</span>
    <span class="token string-property property">&quot;no-useless-computed-key&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528 let \u6216 const \u800C\u4E0D\u662F var</span>
    <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u65B9\u6CD5\u548C\u5C5E\u6027\u4F7F\u7528\u7B80\u5199\u8BED\u6CD5</span>
    <span class="token string-property property">&quot;object-shorthand&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u4F5C\u4E3A\u56DE\u8C03</span>
    <span class="token string-property property">&quot;prefer-arrow-callback&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528 const \u58F0\u660E\u90A3\u4E9B\u58F0\u660E\u540E\u4E0D\u518D\u88AB\u4FEE\u6539\u7684\u53D8\u91CF</span>
    <span class="token string-property property">&quot;prefer-const&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u5728\u5408\u9002\u7684\u5730\u65B9\u4F7F\u7528 Reflect \u65B9\u6CD5</span>
    <span class="token string-property property">&quot;prefer-reflect&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u975E .apply()</span>
    <span class="token string-property property">&quot;prefer-spread&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u4F7F\u7528\u6A21\u677F\u5B57\u9762\u91CF\u800C\u975E\u5B57\u7B26\u4E32\u8FDE\u63A5</span>
    <span class="token string-property property">&quot;prefer-template&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// Suggest using the rest parameters instead of arguments</span>
    <span class="token string-property property">&quot;prefer-rest-params&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42generator \u51FD\u6570\u5185\u6709 yield</span>
    <span class="token string-property property">&quot;require-yield&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// enforce spacing between rest and spread operators and their expressions</span>
    <span class="token string-property property">&quot;rest-spread-spacing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u6A21\u5757\u5185\u7684 import \u6392\u5E8F</span>
    <span class="token string-property property">&quot;sort-imports&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6C42\u6216\u7981\u6B62\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u7684\u5D4C\u5165\u8868\u8FBE\u5F0F\u5468\u56F4\u7A7A\u683C\u7684\u4F7F\u7528</span>
    <span class="token string-property property">&quot;template-curly-spacing&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F3A\u5236\u5728 yield* \u8868\u8FBE\u5F0F\u4E2D * \u5468\u56F4\u4F7F\u7528\u7A7A\u683C</span>
    <span class="token string-property property">&quot;yield-star-spacing&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>

</code></pre></div>`,15),e=[o];function r(c,u,l,k,i,m){return a(),s("div",null,e)}var g=n(t,[["render",r]]);export{y as __pageData,g as default};
