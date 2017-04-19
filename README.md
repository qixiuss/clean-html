# clean-html
清理HTML中的多余**空标签**或者**空白字符**


## 为什么要清理HTML？
很多时候，我们的HTML是用户提交上来，对于他们提交的HTML结构，通常来说，我们要做一些清理。

而这种清理，也主要分为两部分：清理空标签/空白字符、清理HTML结构。

该插件主要解决清理空标签/空白字符，并且适用于浏览器和NodeJS环境，也就是说，我们是把HTML当做字符串来处理的。

如果你对清理HTML结构更感兴趣，比如清理HTML标签属性、HTML标签转化、过滤HTML标签等功能，可以参考[sanitize-html](https://github.com/punkave/sanitize-html)。

当然也可以对[clean-html](https://github.com/qixiuss/clean-html)进行改造以支持[sanitize-html](https://github.com/punkave/sanitize-html)的功能。

## 哪些空标签/空白字符需要清理？
为了更加清晰，举例子来说明吧。
```
<!-- 空标签 -->
CleanHTML.clean('<p><a href=""></a>hello</p>'); // <p>hello</p>
CleanHTML.clean('<p>hello<span></span></p>'); // <p>hello</p>

<!-- 多级嵌套空标签 -->
CleanHTML.clean('<p><span></span></p><span>hello</span>'); // <span>hello</span>

<!-- 空白字符 -->
CleanHTML.clean('<p>hello&nbsp;&nbsp;&nbsp;&nbsp;</p>'); // <p>hello&nbsp</p>
CleanHTML.clean('<p>hello<br/><br/><br/></p>'); // <p>hello<br></p>
CleanHTML.clean('<p>hello\n\n\t\n</p>'); // <p>hello </p>
```

