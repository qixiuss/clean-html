!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("CleanHTML",[],n):"object"==typeof exports?exports.CleanHTML=n():e.CleanHTML=n()}(this,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n){function r(e,n){for(var r=i,t=!0,o=0;t;)r=i.replace(e,n),r==i?t=!1:(o++,i=r);return o}function t(){for(var e=i,n=!0,r=0;n;)e=i.replace(/<(\w+)[^<]*?>\s*<\/\1>/gi,function(e,n){return"iframe"==n?e:""}),e==i?n=!1:(r++,i=e);return r}function o(){r(/\s+/gi," "),r(/(&nbsp;)+/gi,"&nbsp;"),r(/\s*(&nbsp;)+\s*/gi,"&nbsp"),r(/(<br[^>]*>)+/gi,"<br>"),r(/(<br[^>]*>)(<[^\/])/gi,"$2"),r(/<(\w+)[^>]*?><br>+<\/\1>/gi,function(e,n){return"p"==n?e:""})}var i;n.clean=function(e){return i=e,o(),t(),i}}])});