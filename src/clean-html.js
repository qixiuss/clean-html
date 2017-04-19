// 正则表达式替换
function regReplace(reg, newStr) {
    var tmp = text,
        isReplaceAvailable = true,
        count = 0;

    while (isReplaceAvailable) {
        tmp = text.replace(reg, newStr);

        if (tmp == text) {
            isReplaceAvailable = false;
        } else {
            count++;
            text = tmp;
        }
    }

    return count;
}

// 移除空标签
function removeEmptyTag() {
    var tmp = text,
        isReplaceAvailable = true,
        count = 0;

    while (isReplaceAvailable) {
        tmp = text.replace(/<(\w+)[^<]*?>\s*<\/\1>/ig, function(match, p1) {
            return p1 == 'iframe' ? match : '';
        });

        if (tmp == text) {
            isReplaceAvailable = false;
        } else {
            count++;
            text = tmp;
        }
    }

    return count;
}

// 移除空白符
function removeWhiteSpace() {
    // 移除多余的空白符
    regReplace(/\s+/ig, " ");

    // 移除多余的'&nbsp;'符号
    regReplace(/(&nbsp;)+/ig, '&nbsp;');
    regReplace(/\s*(&nbsp;)+\s*/ig, '&nbsp');

    // 移除多余的<br>标签
    regReplace(/(<br[^>]*>)+/ig, '<br>');
    regReplace(/(<br[^>]*>)(<[^\/])/ig, '$2');
    regReplace(/<(\w+)[^>]*?><br>+<\/\1>/ig, function(match, p1) {
        return p1 == 'p' ? match : '';
    });
}


var text;

exports.clean = function(html) {
    text = html;

    removeWhiteSpace();
    removeEmptyTag();

    return text;
}
