(this["webpackJsonpwave-algorithm"]=this["webpackJsonpwave-algorithm"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var l=r(2),a=r.n(l),n=r(6),o=r.n(n),u=(r(14),r(1)),i=r(9),d=function(e){var t=Object(u.a)(e,2),r=t[0],l=t[1];return function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return[a+r,n+l]}},c=d([0,-1]),b=d([0,1]),y=d([-1,0]),f=d([1,0]),p=function(e,t){var r=Object(u.a)(t,2),l=r[0],a=r[1],n=e[l][a];if(!n)throw new Error("\u042f\u0447\u0435\u0439\u043a\u0430 \u043f\u043e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c [".concat(l,", ").concat(a,"] \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"));return n},v=function(e,t){var r=Object(u.a)(e,2),l=r[0],a=r[1],n=Object(u.a)(t,2),o=n[0],i=n[1];return l===o&&a===i},s=function(e){return e.map((function(e){return e.map((function(e){return Object(i.a)({},e)}))}))},h=r(8),j=r(7),w=function(e,t){return new Array(e).fill([]).map((function(r,l){return new Array(t).fill({}).map((function(r,a){return{type:0===l||l===e-1||0===a||a===t-1?"forbidden":"free",value:0}}))}))},g=(r(15),r(0)),O=w(50,35),m=["free","passed"],x=function(e,t,r,l){var a=p(e,t),n=!!r&&v(t,r),o=!!l&&v(t,l);return{background:n||o?"purple":a.color||function(e){switch(e){case"forbidden":return"gray";case"way":return"green";case"way-forbidden":return"white";default:return}}(a.type),cursor:m.includes(a.type)?"pointer":"not-allowed"}};var N=function(){var e=Object(l.useState)(O),t=Object(u.a)(e,2),r=t[0],a=t[1],n=Object(l.useState)(null),o=Object(u.a)(n,2),i=o[0],d=o[1],N=Object(l.useState)(null),k=Object(u.a)(N,2),C=k[0],A=k[1],E=function(e){var t=p(r,e);if(m.includes(t.type)){if(i&&v(i,e))return void d(null);if(i){var l=p(r,i),n=p(r,e);"red"===l.color&&"red"===n.color?(a(function(e,t,r){for(var l=function(e){return e.map((function(e){return e.map((function(e){return"passed"===e.type&&(e.type="free",e.value=0),e}))}))}(s(e)),a=[t],n=function(){var e=a.shift();if(v(e,r))return"break";var t=p(l,e);t.type="passed",console.log(t);var n=[c(e),b(e),y(e),f(e)].filter((function(e){try{var r=p(l,e),a="free"===r.type;return a&&(r.type="passed",r.value=t.value+1),a}catch(n){return!1}}));a.push.apply(a,Object(h.a)(n.reverse()))};a.length&&"break"!==n(););for(var o=p(l,r),i=[r],d=r;!v(d,t);){var w=[c(d),b(d),y(d),f(d)].filter((function(e){try{return"passed"===p(l,e).type}catch(t){return!1}}));if(!w.length)break;o.type="way";var g,O=Object(u.a)(w,1)[0],m=p(l,O),x=O,N=Object(j.a)(w);try{for(N.s();!(g=N.n()).done;){var k=g.value,C=p(l,k);C.value<m.value&&(m=C,x=k)}}catch(A){N.e(A)}finally{N.f()}d=x,m.type="way",i.push(d)}return i.length>1&&i.forEach((function(e){[c(e),b(e),y(e),f(e)].forEach((function(e){var t=p(l,e);!t||"passed"!==t.type&&"free"!==t.type||(t.type="way-forbidden")}))})),l}(r,i,e)),d(null),A(null)):(d(e),A(null))}else d(e)}},S=Object(l.useState)(50),F=Object(u.a)(S,2),B=F[0],I=F[1],J=Object(l.useState)(35),L=Object(u.a)(J,2),P=L[0],T=L[1],D=function(e){var t=+e.target.value;switch(e.target.name){case"x":var r=Number.isNaN(t)||t<5?5:t>50?50:t;I(r),a(w(r,P));break;case"y":var l=Number.isNaN(t)||t<5?5:t>50?50:t;T(l),a(w(B,l))}};return Object(g.jsxs)("div",{className:"App-wrapper",children:[Object(g.jsxs)("div",{className:"App-sidebar",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043b\u043e\u043d\u043e\u043a (\u043e\u0442 5 \u0434\u043e 50):"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"number",value:B,name:"x",min:"5",max:"50",onChange:D})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a (\u043e\u0442 5 \u0434\u043e 50):"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"number",value:P,name:"y",min:"5",max:"50",onChange:D})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{disabled:!i,onClick:function(){return function(){var e=[[{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0}],[{type:"way-forbidden",value:0},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"way-forbidden",value:0}],[{type:"way-forbidden",value:0},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"way-forbidden",value:0}],[{type:"way-forbidden",value:0},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"way-forbidden",value:0}],[{type:"way-forbidden",value:0},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"forbidden",value:0,color:"lightblue"},{type:"way-forbidden",value:0}],[{type:"way-forbidden",value:0},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"free",value:0,color:"red"},{type:"way-forbidden",value:0},{type:"way-forbidden",value:0}],[{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0},{type:"way-forbidden",value:0},{type:"free",value:0}]],t=s(r);try{e.forEach((function(e,r){e.forEach((function(e,l){var a=t[r+i[0]][l+i[1]];if("free"!==a.type&&"passed"!==a.type)throw new Error("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u0435\u0441\u0442\u0430 \u0434\u043b\u044f \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f");a.type=e.type,a.value=e.value,a.color=e.color}))})),a(t)}catch(l){alert("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u0435\u0441\u0442\u0430 \u0434\u043b\u044f \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f")}d(null)}()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0438\u043a\u0440\u043e\u0441\u0445\u0435\u043c\u0443"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return a(w(B,P)),d(null),void A(null)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]}),Object(g.jsx)("br",{})]}),Object(g.jsx)("div",{className:"App",children:r.map((function(e,t){return Object(g.jsx)("div",{className:"App-column",children:e.map((function(e,l){var a=[t,l];return Object(g.jsx)("div",{className:"App-cell",style:x(r,a,i,C),onClick:function(){return E(a)},children:"way-forbidden"===e.type?"\u042d\u0417":"passed"===e.type?e.value:""})}))})}))})]})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,l=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),l(e),a(e),n(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.76458195.chunk.js.map