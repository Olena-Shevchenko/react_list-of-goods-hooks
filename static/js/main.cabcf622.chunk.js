(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),r=n(5),i=n(7),a=n(1),l=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(a.useState)(c.NONE),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),b=Object(r.a)(o,2),h=b[0],j=b[1],N=n===c.NONE&&!h,d=function(t,e){var n=e.sortType,s=e.isReversed,o=Object(i.a)(t);switch(n){case c.NONE:break;case c.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:o.sort((function(t,e){return t.length-e.length}));break;default:throw Error("Unknown sortType")}return s&&o.reverse(),o}(u,{sortType:n,isReversed:h});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){s(c.ALPHABET)},className:"button is-info ".concat(n===c.ALPHABET?"":"is-light"),children:"Sort alphabetically"}),Object(l.jsx)("button",{onClick:function(){s(c.LENGTH)},type:"button",className:"button is-success ".concat(n===c.LENGTH?"":"is-light"),children:"Sort by length"}),Object(l.jsx)("button",{onClick:function(){j(!h)},type:"button",className:"button is-warning ".concat(h?"":"is-light"),children:"Reverse"}),!N&&Object(l.jsx)("button",{onClick:function(){s(c.NONE),j(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(l.jsx)("ul",{children:d.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cabcf622.chunk.js.map