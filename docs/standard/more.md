
## html规范

#### 1.HTML5 doctype

在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；

虽然doctype不区分大小写，但是按照惯例，doctype大写 （[关于html属性，大写还是小写](http://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname)）。

```html
<!DOCTYPE html>
<html>
	...
</html>
```

#### 2.lang属性

根据HTML5规范：

> 应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

为什么使用 lang="zh-cmn-Hans" 而不是我们通常写的 lang="zh-CN" 呢? 请参考知乎上的讨论: [网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](http://www.zhihu.com/question/20797118)

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    ...
</html>
```

#### 3.字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

#### 4.IE兼容模式及国内360浏览器内核控制

用 `<meta>` 标签可以指定页面应该用什么版本的IE来渲染；

如果你想要了解更多，请点击[这里](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)；

360浏览器新增加了一个控制手段：内核控制Meta标签。只要你在自己的网站里增加一个Meta标签，告诉360浏览器这个网址应该用哪个内核渲染，那么360浏览器就会在读取到这个标签后，立即切换对应的内核。并将这个行为应用于这个二级域名下所有网址。如果想了解360的渲染控制标签，请点击[这里](http://se.360.cn/v6/help/meta.html)；

不同doctype在不同浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
      <meta name="renderer" content="webkit">
    </head>
    ...
</html>
```

#### 5.引入CSS, JS

根据HTML5规范, 通常在引入CSS和JS时不需要指明`type`，因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

#### 6.脚本加载

脚本引用写在 body 结束标签之前。

#### 7.属性顺序

属性应该按照特定的顺序出现以保证易读性；

- `class`
- `id`
- `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`,`min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-*`, `role`
- `required`, `readonly`, `disabled`

class是为高可复用组件设计的，所以应处在第一位；

id更加具体且应该尽量少使用，所以将它放在第二位。

```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

#### 8.boolean属性

boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；

更多内容可以参考 [WhatWG section on boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)：

> boolean属性的存在表示取值为true，不存在则表示取值为false。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

#### 7.内联样式

HTML标签内不建议内联样式，应抽离出来放在CSS文件中。

```html
<!-- not good -->
<div style="font-size:14px;line-height:20px;">
</div>

<!-- good -->
<div class="article-info">
</div>

.article-info {
  font-size: 14px;
  line-height: 20px;
}
```

#### 8.减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使HTML变得更少。

```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

#### 9.实用高于完美

尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；

任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

## css规范

#### 1.合理的避免使用ID

尽量少用id,先考虑用class

#### 2.缩写属性

使用缩写属性，提高代码效率和可读性

```css
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
可以写成
padding: 0 1em 2em;
```

#### 3.单位和0

省略“0”值后面的单位。不要在0值后面使用单位，除非有值。

#### 4.十六进制表示法

可能的话，使用3个字符的十六进制表示法，3个字符的十六进制表示法更简短。

```css
//不推荐
color: #FF33AA; 
//推荐
color: #f3a;
```

#### 5.声明结束

为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。

#### 6.属性名结束

属性名的冒号后使用一个空格。出于一致性的原因，
属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。

```css
//不推荐
h3 {
  font-weight:bold;
}
//推荐
h3 {
  font-weight: bold;
}
```

#### 7.选择器嵌套 (LESS,SCSS)

在Sass,less中你可以嵌套选择器，这可以使代码变得更清洁和可读。嵌套所有的选择器，但尽量避免嵌套没有任何内容的选择器。

#### 8.CSS reset（源自Bootstrap）

脚手架中已经有体现，也可以拿开源的如下

```css
/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */

/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
 */

html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove the margin in all browsers (opinionated).
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 * 2. Add the correct display in IE.
 */

article,
aside,
details, /* 1 */
figcaption,
figure,
footer,
header,
main, /* 2 */
menu,
nav,
section,
summary { /* 1 */
  display: block;
}

/**
 * Add the correct display in IE 9-.
 */

audio,
canvas,
progress,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Add the correct display in IE 10-.
 * 1. Add the correct display in IE.
 */

template, /* 1 */
[hidden] {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

a:active,
a:hover {
  outline-width: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * Add the correct font style in Android 4.3-.
 */

dfn {
  font-style: italic;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Add the correct background and color in IE 9-.
 */

mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct margin in IE 8.
 */

figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/* Forms
   ========================================================================== */

/**
 * 1. Change font properties to `inherit` in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
select,
textarea {
  font: inherit; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Restore the font weight unset by the previous rule.
 */

optgroup {
  font-weight: bold;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Correct the text style of placeholders in Chrome, Edge, and Safari.
 */

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
```



#### 9.CSS3属性前缀兼容

css3只需要写标准属性和值，通过Autoprefixer构建工具来自动实现兼容属性前缀补全。

```scss
/* not good */
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
    background: linear-gradient(to bottom, #fff 0, #eee 100%);
}

/* good */
.element {
  border-radius: 3px;
  background: linear-gradient(to bottom, #fff 0, #eee 100%);
}
```

#### 

## js规范细则

#### 1.编码通用原则

- **单一职责原则**
  一个类只能干一个事情, 一个方法最好也只干一件事情。
- **DRY原则**
  DRY（Don't repeat yourself），多处使用的代码需要抽离出来封装成公用方法
- **错误处理**
  有没有容错处理，try catch，报错了能否继续保持页面的正常运行；
- **可读性**
  代码是否可读，尽可能少的“黑魔法”

#### 2.不要重复声明变量。

```js
let name = 'John'
let name = 'Jane'     // ✗ no good

let name = 'John'
name = 'Jane'         // ✓ good

```

#### 3. return 语句中的赋值必需有括号包裹。

```js
function sum (a, b) {
  return result = a + b     // ✗ no good
}

function sum (a, b) {
  return (result = a + b)   // ✓ good
}


```

#### 4.关键字后面加空格。

```js
if (condition) { ... }   // ✓ good
if(condition) { ... }    // ✗ no good
```

#### 5.函数声明时括号与函数名间加空格。

```js
function name (arg) { ... }   // ✓ good
function name(arg) { ... }    // ✗ no good
```

#### 6.始终使用 === 替代 ==。

例外： obj == null 可以用来检查 null || undefined。

#### 7.字符串拼接推荐es6语法。

```js
// ✓ good
let x = 2
let message = `hello, ${name}!`
// ✗ no good
var x = 2
var message = 'hello, ' + name + '!'
```

#### 8.null

适用场景：

- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

不适用场景：

- 不要用null来判断函数调用时有无传参
- 不要与未初始化的变量做比较

```js
// not good
function test(a, b) {
    if (b === null) {
        // not mean b is not supply
        ...
    }
}

var a;

if (a === null) {
    ...
}

// good
var a = null;

if (a === null) {
    ...
}
```

#### 9.undefined

永远不要直接使用undefined进行变量判断；

使用typeof和字符串'undefined'对变量进行判断。

```js
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

#### 10.如果有更好的实现，尽量不要使用三元表达式。

```js
let score = val ? val : 0     // ✗ no good
let score = val || 0          // ✓ good


```

#### 11.import, export 和解构操作中，禁止赋值到同名变量。

```js
import { config as config } from './config'     // ✗ no good
import { config } from './config'               // ✓ good


```

#### 12.禁止使用 with。

```js
with (val) {...}    // ✗ no good

```

#### 13.展开运算符与它的表达式间不要留空白。

```js
fn(... args)    // ✗ no good
fn(...args)     // ✓ good


```

#### 14.遇到分号时空格要后留前不留。

```js
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ no good
for (let i = 0; i < items.length; i++) {...}    // ✓ good


```

#### 15.对于变量和函数名统一使用驼峰命名法。

```js
  function my_function () { }    // ✗ no good
  function myFunction () { }     // ✓ good

```

#### 16.点号操作符须与属性需在同一行。

```js
  console.
    log('hello')  // ✗ no good

  console.log('hello') // ✓ good
```

#### 17.函数调用时标识符与括号间不留间隔。

```js
console.log ('hello') // ✗ no good
console.log('hello')  // ✓ good
```

#### 18.键值对当中冒号与值之间要留空白。

```js
var obj = { 'key' : 'value' }    // ✗ no good
var obj = { 'key' :'value' }     // ✗ no good
var obj = { 'key':'value' }      // ✗ no good
var obj = { 'key': 'value' }     // ✓ good
```

#### 19.构造函数要以大写字母开头。

```js
function animal () {}
var dog = new animal()    // ✗ no good

function Animal () {}
var dog = new Animal()    // ✓ good

```

#### 20.子类的构造器中一定要调用 super

```js
class Dog {
  constructor () {
    super()   // ✗ no good
  }
}

class Dog extends Animal {
  constructor () {
    super()   // ✓ good
  }
}
```

#### 21.使用数组字面量而不是构造器。

```js
var nums = new Array(1, 2, 3)   // ✗ no good
var nums = [1, 2, 3]            // ✓ good

```

#### 22.注释首尾留空格。

```js
//comment           // ✗ no good
// comment          // ✓ good

/*comment*/         // ✗ no good
/* comment */       // ✓ good
```

#### 23.模板字符串中变量前后不加空格。

```js
const message = `Hello, ${ name }`    // ✗ no good
const message = `Hello, ${name}`      // ✓ good
```

#### 24.检查 NaN 的正确姿势是使用 isNaN()。

```js
if (price === NaN) { }      // ✗ no good
if (isNaN(price)) { }       // ✓ good
```

#### 25.自调用匿名函数  使用括号包裹。

```js
const getName = function () { }()     // ✗ no good
const getName = (function () { }())   // ✓ good
const getName = (function () { })()   // ✓ good
```

#### 26.代码块首尾留空格。

```js
if (admin){...}     // ✗ no good
if (admin) {...}    // ✓ good
```

#### 27.严格模式

严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。

#### 28.不要定义冗余的函数参数。

```js
function sum (a, b, a) {  // ✗ no good
  // ...
}

function sum (a, b, c) {  // ✓ good
  // ...
}

```

#### 29.使用 this 前请确保 super() 已调用。

```js
class Dog extends Animal {
  constructor () {
    this.legs = 4     // ✗ no good
    super()
  }
}


```

#### 30.用 throw 抛错时，抛出 Error 对象而不是字符串。

```js
throw 'error'               // ✗ no good
throw new Error('error')    // ✓ good
```

#### 31.不要使用 undefined 来初始化变量。

```js
let name = undefined    // ✗ no good
let name
name = 'value'          // ✓ good
```

#### 32.同一模块有多个导入时一次性写完。

```js
import { myFunc1 } from 'module'
import { myFunc2 } from 'module'          // ✗ no good

import { myFunc1, myFunc2 } from 'module' // ✓ good
```

#### 33.不要解构空值。

```js
const { a: {} } = foo         // ✗ no good
const { a: { b } } = foo      // ✓ good
```

#### 34.不要随意更改关键字的值。

```js
let undefined = 'value'     // ✗ no good
```

#### 35.new 创建对象实例后需要赋值给变量。

```js
new Character()                     // ✗ no good
const character = new Character()   // ✓ good
```

#### 36.避免不必要的布尔转换。

```js
const result = true
if (!!result) {   // ✗ no good
  // ...
}

const result = true
if (result) {     // ✓ good
  // ...
}
```

#### 37.不要省去小数点前面的0。

```js
const discount = .5      // ✗ no good
const discount = 0.5     // ✓ good
```

#### 38.嵌套的代码块中禁止再定义函数。

```js
if (authenticated) {
  function setAuthUser () {}    // ✗ no good
}
```

#### 39.使用 __dirname 和 __filename 时尽量避免使用字符串拼接。

```js
const pathToFile = __dirname + '/app.js'            // ✗ no good
const pathToFile = path.join(__dirname, 'app.js')   // ✓ good
```

#### 40. 杂项

代码块中避免多余留白
switch 一定要使用 break 来将条件分支正常中断。
不要使用 eval()。
switch 语句中不要定义重复的 case 分支。
不要对变量使用 delete 操作。
不要修改使用 const 声明的变量。const声明的变量是只读的
避免使用 arguments.callee 和 arguments.caller。
对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
不允许有连续多行空行。
不要丢掉异常处理中err参数。
else 关键字要与花括号保持在同一行。
不要定义未使用的变量。
除需要转义的情况外，字符串统一使用单引号。
使用两个空格进行缩进。