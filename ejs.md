# EJS中文
嵌入式JavaScript模板引擎
## 安装
```
$ npm install ejs
```
## 使用语法
### ```<%=```：转义输出
在模板语言中最重要的事情，就是把变量传递到模板中然后解析成值
在EJS中，使用```<%= ```和```<%- ```

```<%= ```符号是变量的开始标签，当前变量需要被转义，如果里边包含特殊标签如```<```和```&```符号，则被自动转义成html代码

标签里的内容可以是任意的JavaScript代码段，例如代码是```<%= name ? name : (lastName || 'John Doe') %>```这种形式的，依然可以正常解析。

> 举例说明

- EJS

```
<p>Hello, <%= name %>.</p>
<p>Hello, <%= 'the Most Honorable ' + name %>.</p>
```

- 变量值是

```
{
  "name": "Timoth<y>"
}
```

- 得到的html代码为

```html
<p>Hello, Timoth&lt;y&gt;.</p>
<p>Hello, the Most Honorable Timoth&lt;y&gt;.</p>
```

### ```<%-```：非转义输出
有一些需要预格式化的html代码，你是不想转义的。用```<%- ```标签。
所有的真实渲染都需要注意，以避免XSS攻击。

> 举例说明

- EJS

```
<p>Hello, <%- myHtml %>.</p>
<p>Hello, <%= myHtml %>.</p>

<p>Hello, <%- myMaliciousHtml %>.</p>
<p>Hello, <%= myMaliciousHtml %>.</p>
```

- 变量值是

```
{
  "myHtml": "<strong>Timothy</strong>"
, "myMaliciousHtml": "</p><script>document.write()</script><p>"
}
```

- 得到的html代码为

```html
<p>Hello, <strong>Timothy</strong>.</p>
<p>Hello, &lt;strong&gt;Timothy&lt;/strong&gt;.</p>

<p>Hello, </p><script>document.write()</script><p>.</p>
<p>Hello, &lt;/p&gt;&lt;script&gt;document.write()&lt;/script&gt;&lt;p&gt;.</p>
```

### `<%#`: 注释

以这个符号`<%#`开始的是注释内容，不会被解析成html代码。

#### 去除空格

有的时候需要用到`<%#`这个符号去掉无用的空格，然后可以以`-%>`标签结尾。

> 举例说明

- EJS

```html
<div>
<%# comment %>
</div>

<div>
<%# comment -%>
</div>
```


- 得到的html代码为

```html
<div>

</div>

<div>
</div>
```

### `<%`: 在ejs里写JavaScript

ejs中可以在这个`<%`标签里写任何的JavaScript代码，及用`<%#`标签注释过的代码。

```js
<%# comment %>
<%/* comment */%>
<%// comment %>
```

### 大括号

在ejs中可以使用`{`写javascript的循环和条件判断

```html
<%# Bad practice %>
<% if (true) %>
  <p>Yay it's true!</p>

<%# Good practice %>
<% if (true) { %>
  <p>Yay it's true!</p>
<% } %>
```

```js
<%# 以下都是合法的语句 %>
<% var output
     , exclamation = ''
     , shouldOutput = false

   if (true)
     output = 'true!'

   if (true) {
     exclamation = 'Yay! ';
   }

   if (true) shouldOutput = true; %>

<% if (shouldOutput) { %>
  <%= exclamation + 'It\'s ' + output %>
<% } %>
```

#### 标签内准许换行

准许在`<%`标签里换行

```js
<% var stringToShow = thisIsABooleanVariableWithAVeryLongName
                    ? 'OK'
                    : 'not OK' %>
```

没必要写成这样

```js
<% var stringToShow = thisIsABooleanVariableWithAVeryLongName %>
<%                  ? 'OK'                                    %>
<%                  : 'not OK'                                %>
```

#### 明日待续。。。








